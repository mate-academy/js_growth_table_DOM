'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const columns = table.querySelector('tr').children.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    const newTd = document.createElement('td');

    newRow.appendChild(newTd);
  }

  tbody.appendChild(newRow);

  setButtonsState();
});

removeRowButton.addEventListener('click', () => {
  tbody.removeChild(tbody.lastElementChild);

  setButtonsState();
});

appendColumnButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  const rowLength = rows.length;

  for (let i = 0; i < rowLength; i++) {
    const newTd = document.createElement('td');

    rows[i].appendChild(newTd);
  }

  setButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  const rowLength = rows.length;

  for (let i = 0; i < rowLength; i++) {
    rows[i].removeChild(rows[i].lastElementChild);
  }

  setButtonsState();
});

function setButtonsState() {
  disableButtons();
  enableButtons();
}

function disableButtons() {
  const rows = tbody.children.length;
  const columns = tbody.querySelector('tr').children.length;

  if (columns <= 2) {
    removeColumnButton.disabled = true;
  }

  if (columns >= 10) {
    appendColumnButton.disabled = true;
  }

  if (rows <= 2) {
    removeRowButton.disabled = true;
  }

  if (rows >= 10) {
    appendRowButton.disabled = true;
  }
}

function enableButtons() {
  const rows = tbody.children.length;
  const columns = tbody.querySelector('tr').children.length;

  if (columns > 2) {
    removeColumnButton.disabled = false;
  }

  if (columns < 10) {
    appendColumnButton.disabled = false;
  }

  if (rows > 2) {
    removeRowButton.disabled = false;
  }

  if (rows < 10) {
    appendRowButton.disabled = false;
  }
}
