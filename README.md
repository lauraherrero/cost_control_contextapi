#  Cost Control Context API 📊 🧮💲

## Summary: 📝

https://cost-control-contextapi.netlify.app

Simple application based on the control of expenses by categories based on a budget.

The first step in the application is for the user to define an initial budget, which cannot be modified later.

A view will then be displayed that allows the user to visualize the budget indicated, the money available and the amount spent, as well as a pie chart indicating the percentage spent.

At the bottom of the screen the complete list of expenses and the filter to apply the list of expenses by categories will appear.

The user can add a new expense by clicking on the plus button at the bottom right.
By clicking on it, a form will be displayed where a name and amount of the expense must be defined and a category and date of the expense must be selected. All fields must be filled in to be able to save a new expense.

The expense information persists thanks to localstorage despite reloading or closing the page.

Finally, the user can reset the application with the button next to the pie chart, going to the budget definition part and starting again.



## Technology Stack 💻
The application has been made from scratch with React using Vite and zustand, which provides a centralized status management system that allows status to be shared among multiple components in an efficient way. 

<ul>
  <li>React</li>
  <li>CustomHook</li>
  <li>Typescript</li>
  <li>Context API</li>
  <li>LocalStorage</li>  
  <li>Git</li>
  <li>Vite</li>
  <li>Tailwind</li>
</ul>


## Instructions ✍

### How to run: 

<pre>
    <p>npm install <br></p>
    <p>npm run dev <br></p>
    
</pre>
