'use strict';

const table = document.querySelector('.field');
const tBody = table.tBodies[0];
const container = document.querySelector('.container');
const rows = table.rows;
const cells = [...rows][0].cells;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const appendCol = document.querySelector('.append-column');

container.addEventListener('click', (e) => {
  const elem = e.target;
  const lastRow = table.rows[table.rows.length - 1];

  switch (true) {
    case (elem === appendRow) :
      tBody.append(lastRow.cloneNode(true));

      evalSize(rows, appendRow, removeRow);
      break;

    case (elem === removeRow) :
      lastRow.remove();

      evalSize(rows, appendRow, removeRow);
      break;

    case (elem === appendCol) :
      [...rows].forEach(row => {
        const clone = row.lastElementChild.cloneNode(true);

        row.append(clone);
      });

      evalSize(cells, appendCol, removeCol);
      break;

    case (elem === removeCol) :
      [...rows].forEach(row => {
        row.lastElementChild.remove();
      });

      evalSize(cells, appendCol, removeCol);
      break;
  }
});

function evalSize(property, addButton, removeButton) {
  if (property.length === 2) {
    removeButton.disabled = true;
  } else if (property.length === 10) {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
    removeButton.disabled = false;
  }
}
