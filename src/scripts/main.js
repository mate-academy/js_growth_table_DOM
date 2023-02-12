'use strict';

const TABLE = document.querySelector('table').tBodies[0];
const ADD_ROW = document.querySelector('.append-row');
const REMOVE_ROW = document.querySelector('.remove-row');
const ADD_COLUMN = document.querySelector('.append-column');
const REMOVE_COLUMN = document.querySelector('.remove-column');
const MIN_LIMIT = 2;
const MAX_LIMIT = 10;

ADD_ROW.addEventListener('click', e => {
  const AMOUNT_ROWS = TABLE.children.length;
  const AMOUNT_CELLS_IN_ROWS = TABLE.children[0].children.length;
  const NEW_ROW = document.createElement('tr');

  if (AMOUNT_ROWS < MAX_LIMIT) {
    for (let i = 0; i < AMOUNT_CELLS_IN_ROWS; i++) {
      const NEW_CELL = document.createElement('td');

      NEW_ROW.append(NEW_CELL);
    }

    REMOVE_ROW.removeAttribute('disabled');
    TABLE.append(NEW_ROW);
  } else {
    ADD_ROW.setAttribute('disabled', true);
  }
});

REMOVE_ROW.addEventListener('click', e => {
  const AMOUNT_ROWS = TABLE.children.length;

  if (AMOUNT_ROWS > MIN_LIMIT) {
    const LAST_ROW = TABLE.lastElementChild;

    ADD_ROW.removeAttribute('disabled');
    LAST_ROW.remove();
  } else {
    REMOVE_ROW.setAttribute('disabled', true);
  }
});

ADD_COLUMN.addEventListener('click', e => {
  const AMOUNT_ROWS = TABLE.children.length;
  const AMOUNT_CELLS_IN_ROWS = TABLE.children[0].children.length;

  if (AMOUNT_CELLS_IN_ROWS < MAX_LIMIT) {
    for (let i = 0; i < AMOUNT_ROWS; i++) {
      const NEW_CELL = document.createElement('td');
      const CURRENT_ROW = TABLE.children[i];

      CURRENT_ROW.append(NEW_CELL);
    }

    REMOVE_COLUMN.removeAttribute('disabled');
  } else {
    ADD_COLUMN.setAttribute('disabled', true);
  }
});

REMOVE_COLUMN.addEventListener('click', e => {
  const AMOUNT_ROWS = TABLE.children.length;
  const AMOUNT_CELLS_IN_ROW = TABLE.children[0].children.length;

  if (AMOUNT_CELLS_IN_ROW > MIN_LIMIT) {
    for (let i = 0; i < AMOUNT_ROWS; i++) {
      const LAST_CELL = TABLE.children[i].lastElementChild;

      LAST_CELL.remove();
    }

    ADD_COLUMN.removeAttribute('disabled');
  } else {
    REMOVE_COLUMN.setAttribute('disabled', true);
  }
});
