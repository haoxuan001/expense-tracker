// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];


const addContext = document.querySelector(".expenseForm"); 



//add function
addContext.addEventListener("submit", (e) => {
 
   e.preventDefault(); //stop the page from reloading
    let type = addContext.type.value.trim();
    let name = addContext.name.value.trim();
    let date = addContext.date.value;
    let amount = addContext.amount.value.trim();
    
    
    if(type.length > 0 && name.length >0 && date != 0 && amount >0){
      // createTemplate = (type,name,date,amount);
      const expense={type, name, date, amount,    id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1, }
 
      expenses.push(expense);
      // localStorage 
      localStorage.setItem('expenses', JSON.stringify(expenses));
         }else{
        alert("Oops,Your input cannot be empty");
  };
   addContext.reset();
   showExpenses();
});


//create html template


const showExpenses = () => {

  const expenseTable = document.getElementById('expenseTable');

  expenseTable.innerHTML = '';

  for(let i = 0; i < expenses.length; i++){
      expenseTable.innerHTML += `
      <tr>
        <td class="table-suceess">${expenses[i].type}</td>
        <td class="table-suceess">${expenses[i].name}</td>
        <td class="table-suceess">${expenses[i].date}</td>
        <td class="table-suceess">$${expenses[i].amount}</td>
        <td><a class="deleteButton " onclick="deleteExpense(${expenses[i].id})">
            Delete</td>
  </tr>
      `;
  }
}

const deleteExpense = (id) => {
  for(let i = 0; i < expenses.length; i++){
      if(expenses[i].id == id){
          expenses.splice(i, 1);
      }
  }

  // localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));
  showExpenses();
}

showExpenses();