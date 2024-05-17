import { useMemo } from "react"
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from "../../helpers"
import { ExpenseDetailsProps } from "../../types"
import { AmountDisplay } from "../AmountDisplay"
import { categories } from "../../data/categories"
import { useBudget } from "../../hooks/useBudget";

export const ExpenseDetails = ({ expense }: ExpenseDetailsProps) => {

  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense]);

  const {dispatch} = useBudget()

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => dispatch({type: 'GET_EXPENSE_BY_ID', payload: {id: expense.id}})}
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => dispatch({type: 'REMOVE_EXPENSE', payload: {id: expense.id}})}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem 
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        >
        <div className="bg-white shadow-lg p-8 w-full border-b border-gray-200 flex gap-5 items-center">
          <div>
            <img src={`/icono_${categoryInfo.icon}.svg`} alt="icono del gasto" className="w-20" />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
          </div>
          <AmountDisplay
            amount={expense.amount}
          />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
