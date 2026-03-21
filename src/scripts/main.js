'use strict';

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('table');

function updateButtons() {
  const rows = table.querySelectorAll('tr');
  const cols = rows[0].children.length;

  addRowBtn.disabled = rows.length >= 10;
  removeRowBtn.disabled = rows.length <= 2;

  addColBtn.disabled = cols >= 10;
  removeColBtn.disabled = cols <= 2;
}

addRowBtn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');
  const colCount = rows[0].children.length;

  let newRow = '<tr>';

  for (let i = 0; i < colCount; i++) {
    newRow += '<td></td>';
  }

  newRow += '</tr>';

  table.insertAdjacentHTML('beforeend', newRow);
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows[rows.length - 1].remove();
  updateButtons();
});

addColBtn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    row.insertAdjacentHTML('beforeend', '<td></td>');
  });
  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtons();
});

updateButtons();
