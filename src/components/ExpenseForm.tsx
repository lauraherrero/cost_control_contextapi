import { categories } from "../data/categories"

export const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4">New expense</legend>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Expense Name:
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Add the name of the expense"
          className="bg-slate-100 p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Add the amount of the expense. Ej.: 300"
          className="bg-slate-100 p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select
          name="category"
          id="category"
          className="bg-slate-100 p-2"
        >
          <option value="" disabled selected>--Select--</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input 
        type="submit" 
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'Record expense'}
      />
    </form>
  )
}
