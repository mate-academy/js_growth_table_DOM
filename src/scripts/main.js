'use strict';

// write code here
const table = document.querySelector('table');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function disableButton(button) {
  button.disabled = true;
  button.classList.add('disabled');
}

function enableButton(button) {
  button.disabled = false;
  button.classList.remove('disabled');
}

appendRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];
  const newRow = lastRow.cloneNode(true);
  const numberOfRows = table.rows.length;

  if (numberOfRows < 10) {
    table.appendChild(newRow);
  }

  if (numberOfRows >= 9) {
    disableButton(appendRowButton);
  }

  if (numberOfRows > 1) {
    enableButton(removeRowButton);
  }
});

removeRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];
  const numberOfRows = table.rows.length;

  if (numberOfRows > 2) {
    lastRow.remove();
  }

  if (numberOfRows <= 3) {
    disableButton(removeRowButton);
  }

  if (numberOfRows > 3) {
    enableButton(appendRowButton);
  }
});

appendColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const rowLength = table.rows[0].cells.length;

  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');
    const numberOfColumns = rows[i].cells.length;

    if (numberOfColumns < 10) {
      rows[i].appendChild(newCell);
    }
  }

  if (rowLength >= 9) {
    disableButton(appendColumnButton);
  }

  if (rowLength > 1) {
    enableButton(removeColumnButton);
  }
});

removeColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const rowLength = table.rows[0].cells.length;

  for (let i = 0; i < rows.length; i++) {
    const lastCell = table.rows[i].lastElementChild;
    const numberOfColumns = rows[i].cells.length;

    if (numberOfColumns > 2) {
      lastCell.remove();
    }
  }

  if (rowLength <= 3) {
    disableButton(removeColumnButton);
  }

  if (rowLength <= 10) {
    enableButton(appendColumnButton);
  }
});
