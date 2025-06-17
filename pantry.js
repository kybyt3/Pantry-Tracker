// manage-pantry.js

function editQuantity(button) {
  const row = button.closest('tr');
  const quantityCell = row.querySelector('.quantity');

  if (!quantityCell.querySelector('input')) {
    const currentQuantity = quantityCell.textContent;
    quantityCell.innerHTML = `<input type='number' min='0' value='${currentQuantity}' onblur='saveQuantity(this)' />`;
    quantityCell.querySelector('input').focus();
  }
}

function saveQuantity(input) {
  const newValue = input.value;
  const cell = input.parentElement;
  cell.textContent = newValue;
}

function deleteRow(button) {
  const row = button.closest('tr');
  row.remove();
}

function addRow() {
  const item = prompt("Enter item name:");
  const quantity = prompt("Enter item quantity:");
  const expiration = prompt("Enter expiration date (YYYY-MM-DD):");

  if (!item || !quantity || !expiration) {
    alert("All fields are required.");
    return;
  }

  if (item.includes('"') || item.includes("'")) {
    alert("Item name cannot contain quotes.");
    return;
  }

  const table = document.getElementById("pantryTable");
  const newRow = table.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = item;
  cell2.textContent = quantity;
  cell2.className = "quantity";
  cell3.textContent = expiration;
  cell4.innerHTML = `
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
  `;

  // Attach event listeners to new buttons
  cell4.querySelector(".edit-button").addEventListener("click", function () {
    editQuantity(this);
  });
  cell4.querySelector(".delete-button").addEventListener("click", function () {
    deleteRow(this);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Attach handlers to initial buttons
  document.querySelectorAll(".edit-button").forEach(btn => {
    btn.addEventListener("click", function () {
      editQuantity(this);
    });
  });

  document.querySelectorAll(".delete-button").forEach(btn => {
    btn.addEventListener("click", function () {
      deleteRow(this);
    });
  });

  // Back and add buttons
  document.querySelector(".add-button").addEventListener("click", addRow);
  document.querySelector(".back-button").addEventListener("click", function () {
    window.location.href = 'dashboard.html';
  });
});
