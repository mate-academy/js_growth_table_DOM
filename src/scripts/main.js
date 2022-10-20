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

addRow.addEventListener('click', () => {
  if (rows().length < 10) {
    table.append(lastRow().cloneNode(true));
    removeRow.disabled = false;
  }

  disable(addRow);
});

removeRow.addEventListener('click', () => {
  if (rows().length > 2) {
    lastRow().remove();
    addRow.disabled = false;
  }

  disable(removeRow);
});

addCol.addEventListener('click', () => {
  if (lastRow().cells.length < 10) {
    rows().forEach(row => {
      const newCell = row.lastElementChild.cloneNode(true);

      row.append(newCell);
    });
    removeCol.disabled = false;
  }

  disable(addCol);
});

removeCol.addEventListener('click', () => {
  if (lastRow().cells.length > 2) {
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
      if (rows().length === 10) {
        addRow.disabled = true;
      };
      break;

    case removeRow:
      if (rows().length === 2) {
        removeRow.disabled = true;
      };
      break;

    case addCol:
      if (lastRow().cells.length === 10) {
        addCol.disabled = true;
      }
      break;

    case removeCol:
      if (lastRow().cells.length === 2) {
        removeCol.disabled = true;
      }
  }
}
