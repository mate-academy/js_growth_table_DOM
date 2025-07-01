'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field>tbody');

function disableButton(e, appendButton, elementLength, removeButton) {
  if (e.target.textContent === '-') {
    if (elementLength <= 2) {
      removeButton.setAttribute('disabled', '');
    }

    if (elementLength <= 10) {
      appendButton.removeAttribute('disabled');
    }
  } else {
    if (elementLength >= 10) {
      appendButton.setAttribute('disabled', '');
    }

    if (elementLength >= 2) {
      removeButton.removeAttribute('disabled');
    }
  }
}

appendRow.addEventListener('click', (e) => {
  const newRow = document.createElement('tr');
  const rows = field.firstElementChild.querySelectorAll('td');

  for (let i = 0; i < rows.length; i++) {
    const newEl = document.createElement('td');

    newRow.appendChild(newEl);
  }

  field.appendChild(newRow);

  const rowsLength = field.querySelectorAll('tr').length;

  disableButton(e, appendRow, rowsLength, removeRow);
});

removeRow.addEventListener('click', (e) => {
  field.firstElementChild.remove();

  const rowsLength = field.querySelectorAll('tr').length;

  disableButton(e, appendRow, rowsLength, removeRow);
});

appendColumn.addEventListener('click', (e) => {
  for (const key of field.children) {
    const newCol = document.createElement('td');

    key.appendChild(newCol);
  }

  const columnsLength = field.firstElementChild.querySelectorAll('td').length;

  disableButton(e, appendColumn, columnsLength, removeColumn);
});

removeColumn.addEventListener('click', (e) => {
  for (const key of field.children) {
    key.lastElementChild.remove();
  }

  const columnsLength = field.firstElementChild.querySelectorAll('td').length;

  disableButton(e, appendColumn, columnsLength, removeColumn);
});
