import {v4 as uuidv4} from 'uuid';
import { Category, DraftExpense, Expense } from "../types";


export type budgetActions = {
  type: 'ADD_BUDGET',
  payload: { budget: number }
} | {
  type: 'SHOW_MODAL'
} | {
  type: 'HIDE_MODAL'
} | {
  type: 'ADD_EXPENSE',
  payload: { expense: DraftExpense }
} | {
  type: 'REMOVE_EXPENSE',
  payload: {id: Expense['id']}
} | {
  type: 'GET_EXPENSE_BY_ID',
  payload: {id: Expense['id']}
} | {
  type: 'UPDATE_EXPENSE',
  payload: {expense: Expense}
} | {
  type: 'RESET_APP'
} | {
  type: 'FILTER_BY_CATEGORY',
  payload: { id: Category['id']}
};


const initialBudget = () : number => {
  const localStorageBudget = localStorage.getItem('budget')
  return localStorageBudget ? +localStorageBudget : 0;
}

const localStorageExpenses = () : Expense[] => {
  const localStorageExpenses = localStorage.getItem('expenses')
  return localStorageExpenses ? JSON.parse(localStorageExpenses) : [];
}

export type BudgetState = {
  budget: number,
  modal: boolean
  expenses: Expense[]
  editingId: Expense['id']
  currentCategory: Category['id']
};

export const initialState : BudgetState = {
  budget: initialBudget(),
  modal: false,
  expenses: localStorageExpenses(),
  editingId: '',
  currentCategory: ''
}

const  createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense, 
    id: uuidv4()
  }
}


export const budgetReducer = (state: BudgetState = initialState, action: budgetActions) => {

  if(action.type === 'ADD_BUDGET') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }
  if(action.type === 'SHOW_MODAL') {
    return {
      ...state,
      modal: true
    }
  }
  if(action.type === 'HIDE_MODAL') {
    return {
      ...state,
      modal: false,
      editingId: ''
    }
  }
  if(action.type === 'ADD_EXPENSE') {

    const expense = createExpense(action.payload.expense);
    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false
    }
  }
  if(action.type === 'REMOVE_EXPENSE') {
    return {
      ...state,
      expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
    }
  }
  if(action.type === 'GET_EXPENSE_BY_ID') {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true
    }
  }
  if(action.type === 'UPDATE_EXPENSE') {
    return {
      ...state,
      expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
      modal: false,
      editingId: ''
    }
  }
  if(action.type === 'RESET_APP') {
    return {
      ...state,
      budget: 0,
      expenses: [],
    }
  }
  if(action.type === 'FILTER_BY_CATEGORY') {
    return {
      ...state,
      currentCategory: action.payload.id
    }
  }
  return state;
}