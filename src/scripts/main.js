'use strict';

const [
  addRow,
  removeRow,
  addCol,
  removeCol,
] = document.querySelectorAll('.button');

const table = document.querySelector('.field').tBodies[0];

const rows = () => [...table.rows];
const lastRow = () => table.lastElementChild;

const minLength = 2;
const maxLength = 10;

addRow.addEventListener('click', () => {
  if (rows().length < maxLength) {
    table.append(lastRow().cloneNode(true));
    removeRow.disabled = false;
  }

  disable(addRow);
});

removeRow.addEventListener('click', () => {
  if (rows().length > minLength) {
    lastRow().remove();
    addRow.disabled = false;
  }

  disable(removeRow);
});

addCol.addEventListener('click', () => {
  if (lastRow().cells.length < maxLength) {
    rows().forEach(row => {
      const newCell = row.lastElementChild.cloneNode(true);

      row.append(newCell);
    });
    removeCol.disabled = false;
  }

  disable(addCol);
});

removeCol.addEventListener('click', () => {
  if (lastRow().cells.length > minLength) {
    rows().forEach(row => {
      row.lastElementChild.remove();
    });
    addCol.disabled = false;
  }

  disable(removeCol);
});

function disable(button) {
  switch (button) {
    case addRow:
      if (rows().length === maxLength) {
        addRow.disabled = true;
      };
      break;

    case removeRow:
      if (rows().length === minLength) {
        removeRow.disabled = true;
      };
      break;

    case addCol:
      if (lastRow().cells.length === maxLength) {
        addCol.disabled = true;
      }
      break;

    case removeCol:
      if (lastRow().cells.length === minLength) {
        removeCol.disabled = true;
      }
  }
}
