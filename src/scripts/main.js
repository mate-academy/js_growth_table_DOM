'use strict';

// write code here
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field > tbody');

appendRowBtn.addEventListener('click', (e) => {
  const newRow = table.firstElementChild.cloneNode(true);

  table.appendChild(newRow);

  if (table.children.length === 10) {
    appendRowBtn.disabled = true;
  }

  if (table.children.length > 2) {
    removeRowBtn.disabled = false;
  }
});

removeRowBtn.addEventListener('click', (e) => {

  table.removeChild(table.lastChild);

  if (table.children.length < 10) {
    appendRowBtn.disabled = false;
  }

  if (table.children.length < 3) {
    removeRowBtn.disabled = true;
  }
});

appendColBtn.addEventListener('click', (e) => {
  const tableRows = table.querySelectorAll('tr');

  tableRows.forEach(row => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);

    if (row.children.length === 10) {
      appendColBtn.disabled = true;
    }

    if (row.children.length > 2) {
      removeColBtn.disabled = false;
    }
  });
});

removeColBtn.addEventListener('click', (e) => {
  const tableRows = table.querySelectorAll('tr');

  tableRows.forEach(row => {
    row.removeChild(row.lastChild);

    if (row.children.length < 10) {
      appendColBtn.disabled = false;
    }

    if (row.children.length < 3) {
      removeColBtn.disabled = true;
    }
  });
});
