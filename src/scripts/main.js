'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody') || document.createElement('tbody');

if (!table.querySelector('tbody')) {
  table.append(tbody);
}

let rows = 4;
let cols = 4;

function renderTable() {
  tbody.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');

      tr.append(td);
    }

    tbody.append(tr);
  }
}

function updateButtons() {
  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColBtn.disabled = cols >= 10;
  removeColBtn.disabled = cols <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (rows >= 10) {
    return;
  }

  rows++;
  renderTable();
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (rows <= 2) {
    return;
  }

  rows--;
  renderTable();
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  if (cols >= 10) {
    return;
  }

  cols++;
  renderTable();
  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  if (cols <= 2) {
    return;
  }

  cols--;
  renderTable();
  updateButtons();
});

renderTable();
updateButtons();
