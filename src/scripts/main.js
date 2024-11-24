'use strict';

const container = document.querySelector('.container');
const appendRow = container.querySelector('.append-row');
const appendCol = container.querySelector('.append-column');
const removeRow = container.querySelector('.remove-row');
const removeCol = container.querySelector('.remove-column');
const table = container.querySelector('table');

let countRow = table.rows.length;
let countCol = table.rows[0].cells.length;

const appendRowClick = () => {
  const newRow = table.rows[0].cloneNode(true);

  table.appendChild(newRow);
};
const appendColClick = () => {
  for (let i = 0; i < countRow; i++) {
    const newCol = table.rows[0].cells[0].cloneNode(true);

    table.rows[i].appendChild(newCol);
  }
};
const removeRowClick = () => {
  table.deleteRow(0);
};
const removeColClick = () => {
  for (let i = 0; i < countRow; i++) {
    table.rows[i].deleteCell(0);
  }
};
const checkCountRow = () => {
  if (countRow === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (countRow === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
};
const checkCountCol = () => {
  if (countCol === 2) {
    removeCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }

  if (countCol === 10) {
    appendCol.disabled = true;
  } else {
    appendCol.disabled = false;
  }
};

// eslint-disable-next-line no-shadow
container.addEventListener('click', (event) => {
  const button = event.target.closest('.button');

  if (button) {
    if (button.classList.contains('append-row')) {
      appendRowClick();
    }

    if (button.classList.contains('append-column')) {
      appendColClick();
    }

    if (button.classList.contains('remove-row')) {
      removeRowClick();
    }

    if (button.classList.contains('remove-column')) {
      removeColClick();
    }

    countRow = table.rows.length;
    countCol = table.rows[0].cells.length;

    checkCountRow();
    checkCountCol();
  }
});
