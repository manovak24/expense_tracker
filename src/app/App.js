import Transactions from '../features/transactions/Transactions';
import Budgets from '../features/budgets/Budgets';
import React from 'react';
import TransactionForm from '../components/TransactionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <TransactionForm 
        className="transaction-form-container" />
        <div className="budget-transactions-container">
          <Budgets />
          <Transactions />
        </div>
      </header>
    </div>
  );
}

export default App;
