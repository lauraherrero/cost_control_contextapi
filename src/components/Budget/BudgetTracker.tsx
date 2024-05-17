import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useBudget } from "../../hooks/useBudget"
import { AmountDisplay } from "../AmountDisplay"

export const BudgetTracker = () => {

  const { state, totalExpenses, totalAvailable, dispatch } = useBudget();  
  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar 
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textSize: 8,
            textColor: percentage === 100 ? '#DC2626' : '#3B82F6'
          })}
          text={`${percentage}% gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <button 
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold"
          onClick={() => dispatch({type: 'RESET_APP'})}
        >
          Resetear App
        </button>
        <AmountDisplay 
          label='Budget'
          amount={state.budget}
        />
        <AmountDisplay 
          label='Available'
          amount={totalAvailable}
        />
        <AmountDisplay 
          label='Spent'
          amount={totalExpenses}
        />
      </div>
    </div>
  )
}
