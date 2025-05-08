function fetchUsers() {
  const tableBody = document.getElementById("usersTable");
  const errorElement = document.getElementById("error");
  tableBody.innerHTML = "";
  errorElement.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
          if (!response.ok) {
              throw new Error("Помилка при отриманні даних");
          }
          return response.json();
      })
      .then(data => {
          data.forEach(user => {
              let row = document.createElement("tr");
              row.innerHTML = `
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.email}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          errorElement.textContent = `Помилка: ${error.message}`;
      });
}

function addUser() {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const tableBody = document.getElementById("usersTable");
  const errorElement = document.getElementById("error");

  if (!nameInput.value || !emailInput.value) {
      errorElement.textContent = "Будь ласка, заповніть усі поля";
      return;
  }

  const newUser = {
      id: Math.floor(Math.random() * 1000),
      name: nameInput.value,
      email: emailInput.value
  };

  let row = document.createElement("tr");
  row.innerHTML = `
      <td>${newUser.id}</td>
      <td>${newUser.name}</td>
      <td>${newUser.email}</td>
  `;
  tableBody.appendChild(row);

  nameInput.value = "";
  emailInput.value = "";
  errorElement.textContent = "";
}

window.onload = fetchUsers;