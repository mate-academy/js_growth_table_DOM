'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');
const trs = [...document.querySelectorAll('tr')];
const cells = {
  rows: 4,
  columns: 4,
};

appendRow.addEventListener('click', () => {
  const newRow = tbody.lastElementChild.cloneNode(true);

  tbody.append(newRow);
  cells.rows++;

  if (cells.rows === 10) {
    appendRow.disabled = true;
  } else if (cells.rows === 3) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();
  cells.rows--;

  if (cells.rows === 2) {
    removeRow.disabled = true;
  } else if (cells.rows === 9) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  if (trs[0].children.length < 10) {
    for (let i = 0; i < trs.length; i++) {
      const td = document.createElement('td');
      trs[i].appendChild(td);
    }
  }

  cells.columns++;

  if (cells.columns === 10) {
    appendColumn.disabled = true;
  } else if (cells.columns === 3) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  trs.forEach((el) => el.lastElementChild.remove());
  cells.columns--;

  if (cells.columns === 2) {
    removeColumn.disabled = true;
  } else if (cells.columns === 9) {
    appendColumn.disabled = false;
  }
});
