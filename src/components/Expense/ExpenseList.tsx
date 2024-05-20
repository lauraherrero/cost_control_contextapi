import { useMemo } from "react";
import { useBudget } from "../../hooks/useBudget"
import { ExpenseDetails } from "./ExpenseDetails";

export const ExpenseList = () => {

  const { state } = useBudget();


  const filteredExpense = state.currentCategory ? state.expenses.filter( expense => expense.category === state.currentCategory ) : state.expenses; 
   
  const isEmpty = useMemo( () => filteredExpense.length === 0, [filteredExpense] );


  return (
    <div className="mt-10">
      {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos:</p>
          {filteredExpense.map(expense => (
            <ExpenseDetails 
              key={expense.id}
              expense={expense}
            />
          ))}
        </>
      )}
    </div>
  )
}
