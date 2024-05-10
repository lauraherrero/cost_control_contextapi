import { useState } from "react"



export const BudgetForm = () => {

  const [budget, setBudget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {   
    setBudget(+e.target.value);
  }

  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
          Define budget
        </label>
        <input
          id="budgetID"
          type="number"
          name="budget"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define your budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input 
        type="submit"
        value='Define your budget'
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase"
      />
    </form>

  )
}
