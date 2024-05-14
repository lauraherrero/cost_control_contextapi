

export type budgetActions = {
  type: 'ADD_BUDGET',
  payload: { 
    budget: number
  }
} | {
  type: 'REMOVE_BUDGET',
  payload: {
    id: string,
  }
} | {
  type: 'SHOW_MODAL'
} | {
  type: 'HIDE_MODAL'
};

export type BudgetState = {
  budget: number,
  modal: boolean
};

export const initialState : BudgetState = {
  budget: 0,
  modal: false
}

export const budgetReducer = (state: BudgetState = initialState, action: budgetActions) => {

  if(action.type === 'ADD_BUDGET') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }
  if(action.type === 'REMOVE_BUDGET') {
    return {
      ...state
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
      modal: false
    }
  }
  return state;
}