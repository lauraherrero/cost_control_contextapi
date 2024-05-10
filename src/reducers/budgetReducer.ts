

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
};

export type BudgetState = {
  budget: number
};

export const initialState : BudgetState = {
  budget: 0
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
  return state;
}