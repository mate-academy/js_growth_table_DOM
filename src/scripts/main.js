'use strict';

const trCollection = [...document.querySelectorAll('tr')];
const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtonStates() {
  appendRow.disabled = trCollection.length >= 10;
  removeRow.disabled = trCollection.length <= 2;
  appendColumn.disabled = trCollection.some((tr) => tr.children.length >= 10);
  removeColumn.disabled = trCollection.every((tr) => tr.children.length <= 2);
}

appendRow.addEventListener('click', () => {
  const row = trCollection[0].cloneNode(true);

  if (trCollection.length < 10) {
    table.append(row);
    trCollection.push(row);
  }

  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  if (trCollection.length > 2) {
    const lastRow = trCollection.pop();

    lastRow.remove();
  }

  updateButtonStates();
});

appendColumn.addEventListener('click', () => {
  trCollection.forEach((tr) => {
    const td = document.createElement('td');

    if (tr.children.length < 10) {
      tr.append(td);
    }
  });

  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  trCollection.forEach((tr) => {
    const lastTd = tr.lastElementChild;

    if (tr.children.length > 2) {
      lastTd.remove();
    }
  });

  updateButtonStates();
});
