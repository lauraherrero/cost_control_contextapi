/* eslint-disable react-hooks/exhaustive-deps */
import { categories } from "../../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { ChangeEvent, useEffect, useState } from "react";
import { DraftExpense, Value } from "../../types";
import { ErrorMessage } from "../ErrorMessage";
import { useBudget } from "../../hooks/useBudget";

export const ExpenseForm = () => {

  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  });

  const [error, setError] = useState('');
  const [previousAmount, setPreviousAmount] = useState(0);
  const { dispatch, state, totalAvailable } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)[0]
      setExpense(editingExpense);
      setPreviousAmount(editingExpense.amount);
    }
  }, [state.editingId])

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isAmountField = ['amount'].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? value : value
    })
  }

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validation
    if (Object.values(expense).includes('')) {
      setError('All fields are required');
    }
    //Validar que no se pase el gasto del presupuesto
    if ((expense.amount - previousAmount) > totalAvailable ) {
      setError('Ese gasto se sale del presupuesto');
    }
    //Agregar o actualizar un nuevo gasto
    if (state.editingId) {
      dispatch({ type: 'UPDATE_EXPENSE', payload: { expense: { id: state.editingId, ...expense } } })
    } else {
      dispatch({ type: 'ADD_EXPENSE', payload: { expense } })
    }

    //Vaciar formulario y reiniciar el state
    setExpense({
      amount: 0,
      expenseName: '',
      category: '',
      date: new Date(),
    })
    setPreviousAmount(0);
  }

  const isNewExpense = state.editingId ? 'Update expense' : 'New expense';

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-4">{isNewExpense}</legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        >
          <option value="" disabled>--Select--</option>
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
          onChange={handleChangeDate}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={state.editingId ? 'Save changes' : 'Record expense'}
      />
    </form>
  )
}
