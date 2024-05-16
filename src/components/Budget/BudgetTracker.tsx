import { useBudget } from "../../hooks/useBudget"
import { AmountDisplay } from "../AmountDisplay"

export const BudgetTracker = () => {

  const { state, totalExpenses, totalAvailable } = useBudget();  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/public/grafico.jpg" alt="Gráfica de gastos" />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <button 
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold"
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
