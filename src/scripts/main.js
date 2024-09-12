'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('table');

function disabledBtn() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendCol.disabled = colCount >= 10;
  removeCol.disabled = colCount <= 2;
  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const tbody = document.querySelector('tbody');
    const row = tbody.firstChild.cloneNode(true);

    tbody.prepend(row);

    disabledBtn();
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    const tbody = document.querySelector('tbody');

    tbody.lastElementChild.remove();

    disabledBtn();
  }
});

appendCol.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    const trows = document.querySelectorAll('tr');

    for (let i = 0; i < trows.length; i++) {
      const td = document.createElement('td');

      trows[i].lastElementChild.after(td);
    }

    disabledBtn();
  }
});

removeCol.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    const trows = document.querySelectorAll('tr');

    for (let i = 0; i < trows.length; i++) {
      trows[i].lastElementChild.remove();
    }

    disabledBtn();
  }
});

disabledBtn();
