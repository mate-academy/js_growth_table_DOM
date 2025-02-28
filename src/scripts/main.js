'use strict';

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

const MAX_ROW_OR_COLUMNS = 10;
const MIN_ROW_OR_COLUMNS = 2;

addRowBtn.onclick = (e) => {
  e.preventDefault();
  tbody.append(tbody.lastElementChild?.cloneNode(true));
  check();
};

removeRowBtn.onclick = (e) => {
  e.preventDefault();
  tbody.lastElementChild?.remove();
  check();
};

addColumnBtn.onclick = (e) => {
  e.preventDefault();

  Array.from(tbody.rows).forEach((row) => {
    row.append(row.lastElementChild?.cloneNode(true));
  });
  check();
};

removeColumnBtn.onclick = (e) => {
  e.preventDefault();

  Array.from(tbody.rows).forEach((row) => {
    row.lastElementChild?.remove();
  });
  check();
};

function check() {
  const rows = tbody?.rows;
  const rowsLength = rows.length;
  const columnsLength = rows[0]?.children?.length;

  addRowBtn.removeAttribute('disabled');
  removeRowBtn.removeAttribute('disabled');
  addColumnBtn.removeAttribute('disabled');
  removeColumnBtn.removeAttribute('disabled');

  if (rowsLength === MIN_ROW_OR_COLUMNS) {
    removeRowBtn.setAttribute('disabled', true);
  }

  if (columnsLength === MIN_ROW_OR_COLUMNS) {
    removeColumnBtn.setAttribute('disabled', true);
  }

  if (rowsLength === MAX_ROW_OR_COLUMNS) {
    addRowBtn.setAttribute('disabled', true);
  }

  if (columnsLength === MAX_ROW_OR_COLUMNS) {
    addColumnBtn.setAttribute('disabled', true);
  }
}
