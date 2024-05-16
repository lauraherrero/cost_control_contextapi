import { Dispatch, ReactNode } from "react"
import { budgetActions, BudgetState } from './../reducers/budgetReducer';


export type BudgetContextProps = {
  state: BudgetState,
  dispatch: Dispatch<budgetActions>
}

export type BudgetProviderProps = {
  children: ReactNode
}

export type AmountDisplayProps = {
  label?: string,
  amount: number
}


export type Expense = {
  id: string,
  amount: number,
  expenseName: string,
  category: string,
  date:  Value
}

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];


export type DraftExpense = Omit<Expense, 'id'>

export type Category = {
  id: string,
  name: string,
  icon: string
}

export type ErrorMessageProps = {
  children: ReactNode
}

export type ExpenseDetailsProps = {
  expense: Expense
}