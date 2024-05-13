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
  label: string,
  amount: number
}