import { categories } from "../../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { DraftExpense } from "../../types";

export const ExpenseForm = () => {

  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  });

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
          value={expense.expenseName}
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
          value={expense.amount}
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
          value={expense.category}
        >
          <option value="" disabled selected>--Select--</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Date of expense:
        </label>
        <DatePicker 
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={'Record expense'}
      />
    </form>
  )
}