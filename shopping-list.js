// shopping.js

// Canvas background resizing
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Shopping list logic
document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const addButton = document.querySelector(".add-button");

  addButton.addEventListener("click", () => {
    const date = prompt("Enter date created (YYYY-MM-DD):");
    const itemCount = prompt("Enter number of items:");

    if (!date || !itemCount || isNaN(itemCount)) {
      alert("Please enter valid inputs.");
      return;
    }

    const newRow = table.insertRow(-1);
    const dateCell = newRow.insertCell(0);
    const countCell = newRow.insertCell(1);
    const actionsCell = newRow.insertCell(2);

    dateCell.textContent = date;
    countCell.textContent = itemCount;
    actionsCell.className = "action-buttons";
    actionsCell.innerHTML = `
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    `;

    const editButton = actionsCell.querySelector(".edit-button");
    const deleteButton = actionsCell.querySelector(".delete-button");

    editButton.addEventListener("click", () => {
      const newDate = prompt("Edit date:", dateCell.textContent);
      const newCount = prompt("Edit number of items:", countCell.textContent);

      if (!newDate || !newCount || isNaN(newCount)) {
        alert("Invalid update.");
        return;
      }

      dateCell.textContent = newDate;
      countCell.textContent = newCount;
    });

    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this shopping list?")) {
        newRow.remove();
      }
    });
  });
});
