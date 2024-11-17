'use strict';

const table = document.querySelector('.field');
const lines = table.getElementsByTagName('tr');
const tableBody = table.querySelector('tbody');
const counter = lines[0].getElementsByTagName('td');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

function buttonChecker() {
  if (counter.length === 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (counter.length <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (lines.length === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (lines.length <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
}

appendColumn.addEventListener('click', () => {
  for (const elem of lines) {
    const newCell = document.createElement('td');

    elem.appendChild(newCell);
  }
  buttonChecker();
});

removeColumn.addEventListener('click', () => {
  for (const elem of lines) {
    elem.lastElementChild.remove();
  }
  buttonChecker();
});

appendRow.addEventListener('click', () => {
  const newLine = document.createElement('tr');

  tableBody.appendChild(newLine);

  for (let i = 0; i < counter.length; i++) {
    const newCell = document.createElement('td');

    newLine.appendChild(newCell);
  }
  buttonChecker();
});

removeRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();
  buttonChecker();
});
