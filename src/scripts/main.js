'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field');
const tableRows = table.getElementsByTagName('tr');

const insertNewRow = (columnsLength, rowsLength) => {
  if (rowsLength < 10) {
    const row = table.insertRow(-1);

    Array.from({ length: columnsLength }, () => {
      row.insertCell(-1);
    });
  }
};

const deleteRow = (rowsLength) => {
  if (rowsLength > 2) {
    table.deleteRow(-1);
  }
};

const insertNewColumn = (columnsLength) => {
  if (columnsLength < 10) {
    [...tableRows].forEach((row) => {
      row.insertCell(-1);
    });
  }
};

const deleteColumn = (columnsLength) => {
  if (columnsLength > 2) {
    [...tableRows].forEach((row) => {
      row.deleteCell(-1);
    });
  }
};

const checkButtons = (cellsLength, buttonType) => {
  const appendButton = document.querySelector(`.append-${buttonType}`);
  const removeButton = document.querySelector(`.remove-${buttonType}`);

  if (cellsLength >= 10) {
    appendButton.disabled = true;
  } else if (cellsLength <= 2) {
    removeButton.disabled = true;
  } else {
    appendButton.disabled = false;
    removeButton.disabled = false;
  }
};

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    const tableRowsLength = tableRows.length;
    const tableColumnsLength = tableRows[0].children.length;
    const targetsClassList = e.target.classList[0];

    switch (targetsClassList) {
      case 'append-row':
        insertNewRow(tableColumnsLength, tableRowsLength);
        break;
      case 'remove-row':
        deleteRow(tableRowsLength);
        break;
      case 'append-column':
        insertNewColumn(tableColumnsLength);
        break;
      case 'remove-column':
        deleteColumn(tableColumnsLength);
        break;
      default:
        throw Error('This button has no function');
    }

    if (targetsClassList.includes('row')) {
      checkButtons(tableRowsLength, 'row');
    } else {
      checkButtons(tableColumnsLength, 'column');
    }
  })
);
