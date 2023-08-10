'use strict';

const tableBody = document.querySelector('.field').firstElementChild;
const buttons = document.querySelectorAll('button');
const rowAdder = buttons[0];
const rowRemover = buttons[1];
const columnAdder = buttons[2];
const columnRemover = buttons[3];
const rows = tableBody.children;

function removeColumn(row) {
  row.lastElementChild.remove();
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let rowLength = tableBody.lastElementChild.rowIndex + 1;
    let columnLength = tableBody
      .firstElementChild.lastElementChild.cellIndex + 1;

    if (e.target.className === 'append-row button') {
      const rowToClone = tableBody.firstElementChild;
      const newRow = rowToClone.cloneNode(true);

      if (rowLength < 10) {
        rowLength++;
        tableBody.appendChild(newRow);
      }

      if (rowLength > 2) {
        rowRemover.disabled = false;
      }

      if (rowLength === 10) {
        e.target.disabled = true;
      }
    } else if (e.target.className === 'remove-row button') {
      if (rowLength > 2) {
        rowLength--;
        tableBody.lastElementChild.remove();
      }

      if (rowLength < 10) {
        rowAdder.disabled = false;
      }

      if (rowLength === 2) {
        e.target.disabled = true;
      }
    } else if (e.target.className === 'append-column button') {
      if (columnLength < 10) {
        columnLength++;
      }

      for (const row of rows) {
        const newCell = row.firstElementChild.cloneNode(true);

        if (columnLength < 10) {
          row.appendChild(newCell);
        }

        if (columnLength > 2) {
          columnRemover.disabled = false;
        }

        if (columnLength === 10) {
          row.appendChild(newCell);
          e.target.disabled = true;
        }
      }
    } else {
      if (columnLength > 2) {
        columnLength--;
      }

      for (const row of rows) {
        if (columnLength > 2) {
          removeColumn(row);
        }

        if (columnLength < 10) {
          columnAdder.disabled = false;
        }

        if (columnLength === 2) {
          removeColumn(row);
          e.target.disabled = true;
        }
      }
    }
  });
});
