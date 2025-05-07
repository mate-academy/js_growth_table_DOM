'use strict';

const field = document.querySelector('.field tbody');
const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const deleteColumn = document.querySelector('.remove-column');

function checkLength() {
  addRow.toggleAttribute('disabled', field.children.length === 10);
  deleteRow.toggleAttribute('disabled', field.children.length === 2);

  addColumn.toggleAttribute(
    'disabled',
    field.firstElementChild.children.length === 10,
  );

  deleteColumn.toggleAttribute(
    'disabled',
    field.firstElementChild.children.length === 2,
  );
}

addRow.addEventListener('click', () => {
  const newRow = field.firstElementChild.cloneNode(true);

  field.appendChild(newRow);

  checkLength();
});

deleteRow.addEventListener('click', () => {
  if (field.children.length > 0) {
    field.lastElementChild.remove();
    checkLength();
  }
});

addColumn.addEventListener('click', () => {
  Array.from(field.children).forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });

  checkLength();
});

deleteColumn.addEventListener('click', () => {
  Array.from(field.children).forEach((row) => {
    if (row.children.length > 0) {
      row.lastElementChild.remove();
    }
  });
  checkLength();
});

checkLength();
