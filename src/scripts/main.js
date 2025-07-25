'use strict';

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtonsState() {
  const rowCount = document.querySelectorAll('tr').length;
  const colCount = document.querySelectorAll('tr')[0].children.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = colCount >= 10;
  removeColumn.disabled = colCount <= 2;
}

appendRow.addEventListener('click', (e) => {
  const numbersRow = document.querySelectorAll('tr').length;
  const newTr = document.createElement('tr');
  const numbersColumn = document.querySelectorAll('tr')[0].children.length;

  if (numbersRow < 10) {
    appendRow.disabled = false;

    for (let i = 0; i < numbersColumn; i++) {
      const td = document.createElement('td');

      newTr.appendChild(td);
    }

    if (numbersRow + 1 >= 10) {
      appendRow.disabled = true;
    }
    table.appendChild(newTr);
    updateButtonsState();
  } else {
    appendRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (a) => {
  const numbersColumn = document.querySelectorAll('tr')[0].children.length;
  const trs = document.querySelectorAll('tr');

  if (numbersColumn < 10) {
    trs.forEach((tr) => {
      const newTd = document.createElement('td');

      tr.appendChild(newTd);
    });

    if (numbersColumn + 1 >= 10) {
      appendColumn.disabled = true;
    }
    updateButtonsState();
  }
});

removeColumn.addEventListener('click', (a) => {
  const numbersColumn = document.querySelectorAll('tr')[0].children.length;
  const trs = document.querySelectorAll('tr');

  if (numbersColumn > 2) {
    trs.forEach((tr) => {
      tr.removeChild(tr.lastElementChild);
    });
    updateButtonsState();
  }
});

removeRow.addEventListener('click', (a) => {
  const numbersRow = document.querySelectorAll('tr').length;
  const trs = document.querySelectorAll('tr');

  if (numbersRow > 2) {
    const lastTr = trs[trs.length - 1];

    lastTr.remove();

    updateButtonsState();
  }
});
