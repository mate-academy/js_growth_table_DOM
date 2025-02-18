'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const buttonColumnPlus = container.querySelector('.append-column');
  const buttonColumnMinus = container.querySelector('.remove-column');
  const buttonRowPlus = container.querySelector('.append-row');
  const buttonRowMinus = container.querySelector('.remove-row');

  const countRows = table.childElementCount;
  const countColumns = table.firstElementChild.childElementCount;
  const allColumn = table.querySelectorAll('tr');

  if (e.target === buttonColumnPlus && countColumns < 10) {
    allColumn.forEach((elem) => {
      const newRow = document.createElement('td');

      elem.appendChild(newRow);
    });
    addDisabledPlus(buttonColumnPlus, countColumns);
    delAttribute(buttonColumnMinus);
  }

  if (e.target === buttonColumnMinus && countColumns > 2) {
    allColumn.forEach((elem) => {
      elem.lastElementChild.remove();
    });
    addDisabledMinus(buttonColumnMinus, countColumns);
    delAttribute(buttonColumnPlus);
  }

  if (e.target === buttonRowPlus && countRows <= 10) {
    const column = document.createElement('tr');

    for (let i = 0; i < countColumns; i++) {
      const newCell = document.createElement('td');

      column.appendChild(newCell);
    }
    table.appendChild(column);
    addDisabledPlus(buttonRowPlus, countRows);
    delAttribute(buttonRowMinus);
  }

  if (e.target === buttonRowMinus && countRows >= 2) {
    table.lastElementChild.remove();
    addDisabledMinus(buttonRowMinus, countRows);
    delAttribute(buttonRowPlus);
  }
});

function delAttribute(button) {
  if (button.hasAttribute('disabled')) {
    button.removeAttribute('disabled');
  }
}

function addDisabledPlus(button, count) {
  if (count === 9) {
    button.setAttribute('disabled', '');
  }
}

function addDisabledMinus(button, count) {
  if (count === 3) {
    button.setAttribute('disabled', '');
  }
}
