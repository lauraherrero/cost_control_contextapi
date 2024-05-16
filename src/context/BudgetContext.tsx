import { useReducer, createContext, useMemo } from "react"
import { budgetReducer, initialState } from "../reducers/budgetReducer";
import { BudgetContextProps, BudgetProviderProps } from "../types";

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => total + expense.amount, 0), [state.expenses]);
  const totalAvailable = state.budget - totalExpenses;
  

  return (
    <BudgetContext.Provider
      value={{ state, dispatch, totalExpenses, totalAvailable }}
    >
      {children}
    </BudgetContext.Provider>
  )
}
