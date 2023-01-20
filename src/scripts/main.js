'use strict';

const tableBody = document.querySelector('.field').lastChild;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const addColButton = document.querySelector('.append-column');
const removeColButton = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

function modifyRow(addRow, delRow) {
  addRow.addEventListener('click', e => {
    const rowsLength = tableBody.children.length - 1;
    const clone = tableBody.children[rowsLength].cloneNode(true);

    tableBody.appendChild(clone);

    if (tableBody.children.length > minCount) {
      delRow.disabled = false;
    }

    if (tableBody.children.length > maxCount - 1) {
      e.target.disabled = true;
    }
  });

  delRow.addEventListener('click', e => {
    tableBody.children[tableBody.children.length - 1].remove();

    if (tableBody.children.length === minCount) {
      e.target.disabled = true;
    }

    if (tableBody.children.length <= maxCount - 1) {
      addRow.disabled = false;
    }
  });
};

function modifyCol(addCol, delCol) {
  const rows = tableBody.children;

  addCol.addEventListener('click', e => {
    for (let i = 0; i < rows.length; i++) {
      const rowLength = rows[i].children.length - 1;
      const clone = rows[i].children[rowLength].cloneNode(true);

      rows[i].children[rowLength].insertAdjacentElement('afterend', clone);
    }

    if (rows[0].children.length > minCount) {
      delCol.disabled = false;
    }

    if (rows[0].children.length > maxCount - 1) {
      e.target.disabled = true;
    }
  });

  delCol.addEventListener('click', e => {
    for (let i = 0; i < rows.length; i++) {
      const rowLength = rows[i].children.length - 1;

      rows[i].children[rowLength].remove();
    }

    if (rows[0].children.length === minCount) {
      e.target.disabled = true;
    }

    if (rows[0].children.length <= maxCount - 1) {
      addCol.disabled = false;
    }
  });
}

modifyRow(addRowButton, removeRowButton);
modifyCol(addColButton, removeColButton);
