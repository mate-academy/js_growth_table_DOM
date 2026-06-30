'use strict';

const container = document.querySelector('.container');
const buttonAppendRow = container.querySelector('.append-row');
const buttonRemoveRow = container.querySelector('.remove-row');
const buttonAppendColumn = container.querySelector('.append-column');
const buttonRemoveColumn = container.querySelector('.remove-column');

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

function updateButtons() {
  const rowCount = tbody.rows.length;
  const columnsCount = tbody.rows[0].cells.length;

  buttonAppendRow.disabled = rowCount === 10;
  buttonRemoveRow.disabled = rowCount === 2;

  buttonAppendColumn.disabled = columnsCount === 10;
  buttonRemoveColumn.disabled = columnsCount === 2;
}

updateButtons();

buttonAppendRow.addEventListener('click', () => {
  const columnsCount = tbody.rows[0].cells.length;
  const tr = document.createElement('tr');

  if (tbody.rows.length < 10) {
    for (let i = 0; i < columnsCount; i++) {
      tr.appendChild(document.createElement('td'));
    }

    tbody.appendChild(tr);
  }

  updateButtons();
});

buttonRemoveRow.addEventListener('click', () => {
  if (tbody.rows.length > 2) {
    tbody.deleteRow(-1);
  }

  updateButtons();
});

buttonAppendColumn.addEventListener('click', () => {
  const rowCount = tbody.rows.length;
  const columnsCount = tbody.rows[0].cells.length;

  if (columnsCount < 10) {
    for (let i = 0; i < rowCount; i++) {
      const td = document.createElement('td');

      tbody.rows[i].appendChild(td);
    }
  }

  updateButtons();
});

buttonRemoveColumn.addEventListener('click', () => {
  const rowCount = tbody.rows.length;
  const columnsCount = tbody.rows[0].cells.length;

  if (columnsCount > 2) {
    for (let i = 0; i < rowCount; i++) {
      tbody.rows[i].deleteCell(columnsCount - 1);
    }
  }

  updateButtons();
});
