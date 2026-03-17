'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rows = table.querySelectorAll('tr').length;
let columns = table.querySelectorAll('tr')[0].children.length;

function renderTable() {
  table.innerHTML = '';

  for (let r = 0; r < rows; r++) {
    const tr = document.createElement('tr');

    for (let c = 0; c < columns; c++) {
      const td = document.createElement('td');

      tr.append(td);
    }
    table.append(tr);
  }
  updateButtonState();
}

function updateButtonState() {
  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColumnBtn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (rows < 10) {
    rows++;
    renderTable();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (rows > 2) {
    rows--;
    renderTable();
  }
});

appendColumnBtn.addEventListener('click', () => {
  if (columns < 10) {
    columns++;
    renderTable();
  }
});

removeColumn.addEventListener('click', () => {
  if (columns > 2) {
    columns--;
    renderTable();
  }
});

renderTable();
