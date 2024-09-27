'use strict';

const field = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const disableColor = '#c1c1c1';
const enableColor = '#ffac00';

addRow.addEventListener('click', (evnt) => {
  if (field.children.length < 10) {
    const newRow = document.createElement('tr');

    newRow.innerHTML = field.children[0].innerHTML;
    field.append(newRow);

    if (field.children.length === 10) {
      addRow.style.background = disableColor;
    }

    if (field.children.length > 2) {
      removeRow.style.background = enableColor;
    }
  }
});

removeRow.addEventListener('click', (evnt) => {
  if (field.children.length > 2) {
    field.children[0].remove();
  }

  if (field.children.length === 2) {
    removeRow.style.background = disableColor;
  }

  if (field.children.length < 10) {
    addRow.style.background = enableColor;
  }
});

addColumn.addEventListener('click', (evnt) => {
  if (field.children[0].children.length < 10) {
    for (const row of field.children) {
      const column = document.createElement('td');

      row.append(column);
    };
  }

  if (field.children[0].children.length > 2) {
    removeColumn.style.background = enableColor;
  }

  if (field.children[0].children.length === 10) {
    addColumn.style.background = disableColor;
  }
});

removeColumn.addEventListener('click', (evnt) => {
  if (field.children[0].children.length > 2) {
    for (const row of field.children) {
      row.children[0].remove();
    };
  }

  if (field.children[0].children.length < 10) {
    addColumn.style.background = enableColor;
  }

  if (field.children[0].children.length === 2) {
    removeColumn.style.background = disableColor;
  }
});
