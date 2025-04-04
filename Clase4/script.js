async function fetchUsers(page) {
    const API_URL = `https://reqres.in/api/users?page=${page}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.data) {
            displayUsers(data.data); //
        } else {
            console.error("No se encontraron usuarios en la respuesta.");
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para mostrar los usuarios en la tabla
function displayUsers(users) {
    const tableBody = document.getElementById("user-table");
    tableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src="${user.avatar}" alt="Avatar de ${user.first_name}"></td>
        `;
        tableBody.appendChild(row);
    });
}

fetchUsers(1);

