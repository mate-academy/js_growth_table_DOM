'use strict';

const DEFAULT_COLUMN_COUNT = 4;
const MAX_COLUMN_COUNT = 10;
const MIN_COLUMN_COUNT = 2;
const DEFAULT_ROW_COUNT = 4;
const MAX_ROW_COUNT = 10;
const MIN_ROW_COUNT = 2;

const tbody = document.querySelector('tbody');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');

(function () {
  let counterCol = DEFAULT_COLUMN_COUNT;
  let counterRow = DEFAULT_ROW_COUNT;

  addColBtn.addEventListener('click', addNewColumn);
  removeColBtn.addEventListener('click', removeColumn);
  addRowBtn.addEventListener('click', addNewRow);
  removeRowBtn.addEventListener('click', removeRow);

  function addNewColumn() {
    for (const tr of tbody.children) {
      tr.insertAdjacentHTML('beforeend', `<td></td>`);
    }

    counterCol++;

    if (counterCol >= MAX_COLUMN_COUNT) {
      addColBtn.disabled = true;
    }

    if (counterCol > MIN_COLUMN_COUNT) {
      removeColBtn.disabled = false;
    }
  }

  function removeColumn() {
    for (const tr of tbody.children) {
      tr.lastElementChild.remove();
    }

    counterCol--;

    if (counterCol <= MIN_COLUMN_COUNT) {
      removeColBtn.disabled = true;
    }

    if (counterCol < MAX_COLUMN_COUNT) {
      addColBtn.disabled = false;
    }
  }

  function addNewRow() {
    const isChild = tbody.firstElementChild;
    const tr = isChild ? isChild.cloneNode(true) : document.createElement('tr');

    tbody.insertAdjacentElement('beforeend', tr);

    counterRow++;

    if (counterRow >= MAX_ROW_COUNT) {
      addRowBtn.disabled = true;
    }

    if (counterRow > MIN_ROW_COUNT) {
      removeRowBtn.disabled = false;
    }
  }

  function removeRow() {
    tbody.lastElementChild.remove();

    counterRow--;

    if (counterRow < MAX_ROW_COUNT) {
      addRowBtn.disabled = false;
    }

    if (counterRow <= MIN_ROW_COUNT) {
      removeRowBtn.disabled = true;
    }
  }
})();
