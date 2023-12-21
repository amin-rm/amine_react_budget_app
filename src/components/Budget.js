
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, Currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    if(newBudget > 20000) {
        alert("Budget limit exceeded !");
        setNewBudget("20000");
        return;
    }

    if(newBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending !");
        setNewBudget(totalExpenses);
        return;
    }

    

    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;