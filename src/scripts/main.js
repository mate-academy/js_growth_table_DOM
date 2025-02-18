'use strict';

const table = document.querySelector('table');
const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');

function removeColumn() {
  [...table.rows].forEach((row) => {
    if (row.cells.length > 2) {
      row.deleteCell(row.cells.length - 1);
    }

    if (row.cells.length === 2) {
      buttonRemoveColumn.setAttribute('disabled', 'true');
    } else {
      buttonRemoveColumn.removeAttribute('disabled');
    }

    if (row.cells.length < 10) {
      buttonAppendColumn.removeAttribute('disabled');
    }
  });

  checkMaxLength(buttonAppendColumn, table.rows[0].cells.length);
}

function appendColumn() {
  [...table.rows].forEach((row) => {
    if (row.cells.length < 10) {
      row.insertCell();
    }
  });

  if (table.rows[0].cells.length > 2) {
    buttonRemoveColumn.removeAttribute('disabled');
  }

  checkMaxLength(buttonAppendColumn, table.rows[0].cells.length);
}

function removeRow() {
  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);
  }

  if (table.rows.length === 2) {
    buttonRemoveRow.setAttribute('disabled', 'true');
  } else {
    buttonRemoveRow.removeAttribute('disabled');
  }

  if (table.rows.length < 10) {
    buttonAppendRow.removeAttribute('disabled');
  }

  checkMaxLength(buttonAppendRow, table.rows.length);
}

function appendRow() {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const tdItem = document.createElement('td');

      newRow.append(tdItem);
    }
  }

  if (table.rows.length > 2) {
    buttonRemoveRow.removeAttribute('disabled');
  }

  checkMaxLength(buttonAppendRow, table.rows.length);
}

function checkMaxLength(item, itemLength) {
  if (itemLength === 10) {
    item.setAttribute('disabled', 'true');
  }
}

buttonRemoveColumn.addEventListener('click', removeColumn);
buttonAppendColumn.addEventListener('click', appendColumn);
buttonAppendRow.addEventListener('click', appendRow);
buttonRemoveRow.addEventListener('click', removeRow);
