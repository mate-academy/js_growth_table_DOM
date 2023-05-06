'use strict';

const table = document.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const addColumn = () => {
  if (table.firstElementChild.children.length < 10) {
    for (let i = 0; i < table.children.length; i++) {
      const cell = document.createElement('td');

      table.children[i].insertAdjacentElement('beforeend', cell);
    };

    switch (table.firstElementChild.children.length) {
      case 10:
        appendColumn.setAttribute('disabled', true);
        break;
      case 3:
        removeColumn.removeAttribute('disabled');
        break;
    }
  };
};
const deleteColumn = () => {
  if (table.firstElementChild.children.length > 2) {
    for (let i = 0; i < table.children.length; i++) {
      table.children[i].lastElementChild.remove();
    };

    switch (table.firstElementChild.children.length) {
      case 9:
        appendColumn.removeAttribute('disabled');
        break;
      case 2:
        removeColumn.setAttribute('disabled', true);
        break;
    }
  };
};

const addRow = () => {
  if (table.children.length < 10) {
    const newRow = table.firstElementChild.cloneNode(true);

    table.insertAdjacentElement('beforeend', newRow);

    switch (table.children.length) {
      case 10:
        appendRow.setAttribute('disabled', true);
        break;
      case 3:
        removeRow.removeAttribute('disabled');
        break;
    }
  };
};
const deleteRow = () => {
  if (table.children.length > 2) {
    table.lastElementChild.remove();

    switch (table.children.length) {
      case 9:
        appendRow.removeAttribute('disabled');
        break;
      case 2:
        removeRow.setAttribute('disabled', true);
        break;
    }
  };
};

appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
