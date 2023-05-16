'use strict';

const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonAddColumn = document.querySelector('.append-column');
const buttonAddRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');

buttonRemoveColumn.addEventListener('click', function() {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length <= 3) {
    buttonRemoveColumn.disabled = true;
  }

  if (rows[0].children.length > 2) {
    buttonAddColumn.disabled = false;

    for (let i = 0; i < rows.length; i++) {
      rows[i].children[rows[i].children.length - 1].remove();
    }
  }
});

buttonAddColumn.addEventListener('click', function() {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length >= 9) {
    buttonAddColumn.disabled = true;
  }

  if (rows[0].children.length < 10) {
    buttonRemoveColumn.disabled = false;

    for (let i = 0; i < rows.length; i++) {
      const cell = document.createElement('td');

      rows[i].prepend(cell);
    }
  }
});

buttonAddRow.addEventListener('click', function() {
  const tBody = document.querySelector('tbody');
  const rows = document.querySelectorAll('tr');

  if (tBody.children.length >= 9) {
    buttonAddRow.disabled = true;
  }

  if (tBody.children.length >= 2) {
    const newLine = tBody.insertRow(tBody.length - 1);

    buttonRemoveRow.disabled = false;

    for (let i = 0; i < rows[0].children.length; i++) {
      const cell = document.createElement('td');

      newLine.append(cell);
    }
  }
});

buttonRemoveRow.addEventListener('click', function() {
  const tBody = document.querySelector('tbody');

  buttonAddRow.disabled = false;

  if (tBody.children.length <= 3) {
    buttonRemoveRow.disabled = true;
  }

  tBody.deleteRow(2);
});
