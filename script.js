personnel_data = [];

function addEmployee() {
   // Grab the data from the form
   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById("lastName").value;
   let age = document.getElementById("age").value;
   let salary = document.getElementById("salary").value;

   // Add it to the array of data
   personnel_data.push({
      "firstName": firstName,
      "lastName": lastName,
      "age": age,
      "salary": salary
   });

   refreshPageTable();

   clearForm();

   displayConfirmation();
}

function displayConfirmation() {
   const alertCode = `<div class="alert alert-success alert-dismissible fade show" role="alert">
   <strong>Success!</strong> You added an employee.
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
       <span aria-hidden="true">&times;</span>
   </button>
</div>`;

document.getElementById("confirmation").innerHTML = alertCode;
}

function refreshPageTable() {
   // Construct the table from the data
   let tableDiv = `<table class="table table-hover table-dark">`;
   tableDiv += "<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Salary</th></tr>"

   for (let pd of personnel_data) {
      tableDiv += "<tr><td>" + pd.firstName + "</td>";
      tableDiv += "<td>" + pd.lastName + "</td>";
      tableDiv += "<td>" + pd.age + "</td>";
      tableDiv += "<td>" + pd.salary + "</td></tr>";
   }

   tableDiv += "</table>";

   // Put the generated content into the div
   document.getElementById("data-table").innerHTML = tableDiv;
}

function clearForm() {
   document.getElementById("firstName").value = "";
   document.getElementById("lastName").value = "";
   document.getElementById("age").value = "";
   document.getElementById("salary").value = "";
}