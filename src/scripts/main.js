'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const max = 10;
const min = 2;

function updateButtonStates() {
  const counterR = [...document.querySelectorAll('tr')].length;
  const counterC = document.querySelector('tr').children.length;

  appendRowButton.disabled = counterR === max;
  removeRowButton.disabled = counterR === min;
  appendColumnButton.disabled = counterC === max;
  removeColumnButton.disabled = counterC === min;
}

appendRowButton.addEventListener('click', (e) => {
  const table = document.querySelector('tbody');
  const newRow = table.firstChild.cloneNode(true);

  table.appendChild(newRow);
  updateButtonStates();
});

removeRowButton.addEventListener('click', (e) => {
  const table = document.querySelector('tbody');
  const deletedRow = table.lastChild;

  table.removeChild(deletedRow);
  updateButtonStates();
});

appendColumnButton.addEventListener('click', (e) => {
  const rows = [...document.getElementsByTagName('tr')];

  rows.forEach((row) => {
    const td = document.querySelector('td').cloneNode(true);

    row.appendChild(td);
  });
  updateButtonStates();
});

removeColumnButton.addEventListener('click', (e) => {
  const rows = [...document.getElementsByTagName('tr')];

  rows.forEach((row) => {
    const lastChild = row.lastChild;

    row.removeChild(lastChild);
  });

  updateButtonStates();
});
