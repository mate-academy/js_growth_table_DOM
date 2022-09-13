'use strict';

const table = document.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const addColumn = () => {
  const conditionAddCol = table.firstElementChild.children.length;
  const tableLenght = table.children.length;

  if (conditionAddCol < 10) {
    for (let i = 0; i < tableLenght; i++) {
      const cell = document.createElement('td');

      table.children[i].insertAdjacentElement('beforeend', cell);
    };

    switch (conditionAddCol) {
      case 9:
        appendColumn.setAttribute('disabled', true);
        break;
      case 3:
        removeColumn.removeAttribute('disabled');
        break;
    }
  };
};
const deleteColumn = () => {
  const conditionDeleteCol = table.firstElementChild.children.length;
  const tableLenght = table.children.length;

  if (conditionDeleteCol > 2) {
    for (let i = 0; i < tableLenght; i++) {
      table.children[i].lastElementChild.remove();
    };

    switch (conditionDeleteCol) {
      case 9:
        appendColumn.removeAttribute('disabled');
        break;
      case 3:
        removeColumn.setAttribute('disabled', true);
        break;
    }
  };
};

const addRow = () => {
  const tableLenght = table.children.length;

  if (tableLenght < 10) {
    const newRow = table.firstElementChild.cloneNode(true);

    table.insertAdjacentElement('beforeend', newRow);

    switch (tableLenght) {
      case 9:
        appendRow.setAttribute('disabled', true);
        break;
      case 3:
        removeRow.removeAttribute('disabled');
        break;
    }
  };
};
const deleteRow = () => {
  const tableLenght = table.children.length;

  if (tableLenght > 2) {
    table.lastElementChild.remove();

    switch (tableLenght) {
      case 9:
        appendRow.removeAttribute('disabled');
        break;
      case 3:
        removeRow.setAttribute('disabled', true);
        break;
    }
  };
};

appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
