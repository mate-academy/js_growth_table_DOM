'use strict';

// write code here
const field =
  document.querySelector('.field tbody') || document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtons() {
  const rowsLength = field.querySelectorAll('tr').length;
  const columnsLength = field.querySelector('tr').querySelectorAll('td').length;

  appendRowBtn.disabled = rowsLength >= 10;
  removeRowBtn.disabled = rowsLength <= 2;
  appendColumnBtn.disabled = columnsLength >= 10;
  removeColumnBtn.disabled = columnsLength <= 2;
}

updateButtons();

appendRowBtn.addEventListener('click', () => {
  const fieldRows = field.querySelectorAll('tr');
  const newRow = fieldRows[0].cloneNode(true);

  newRow.querySelectorAll('td').forEach((cell) => {
    cell.textContent = '';
  });

  if (fieldRows.length < 10) {
    field.append(newRow);
  }

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const fieldRows = document.querySelectorAll('.field tr');

  if (fieldRows.length > 2) {
    fieldRows[fieldRows.length - 1].remove();
  }

  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  const fieldRows = document.querySelectorAll('.field tr');

  fieldRows.forEach((fieldRow) => {
    const newColumn = document.createElement('td');

    newColumn.textContent = '';

    if (fieldRow.querySelectorAll('td').length < 10) {
      fieldRow.append(newColumn);
    }
  });

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  const fieldRows = document.querySelectorAll('.field tr');

  fieldRows.forEach((fieldRow) => {
    if (fieldRow.querySelectorAll('td').length > 2) {
      fieldRow.lastElementChild.remove();
    }
  });

  updateButtons();
});
