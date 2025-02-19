'use strict';

const addRowsBtn = document.querySelector('.append-row');
const addColumnsBtn = document.querySelector('.append-column');
const removeRowsBtn = document.querySelector('.remove-row');
const removeColumnsBtn = document.querySelector('.remove-column');
const body = document.querySelector('tbody');

addRowsBtn.addEventListener('click', addRows);
addColumnsBtn.addEventListener('click', addColumns);
removeRowsBtn.addEventListener('click', removeRows);
removeColumnsBtn.addEventListener('click', removeColumns);

function addRows() {
  const columnCount = body.children.length;

  if (columnCount < 10) {
    const row = body.querySelector('tr');
    const rowClone = row.cloneNode(true);

    body.appendChild(rowClone);
  }

  if (columnCount === 9) {
    addColumnsBtn.disabled = true;
  }

  if (removeColumnsBtn.disabled === true) {
    removeColumnsBtn.disabled = false;
  }
}

function removeRows() {
  const columnCount = body.children.length;

  if (columnCount > 2) {
    const row = body.querySelector('tr');

    row.remove();
  }

  if (columnCount === 3) {
    removeColumnsBtn.disabled = true;
  }

  if (addColumnsBtn.disabled === true) {
    addColumnsBtn.disabled = false;
  }
}

function addColumns() {
  const rows = body.querySelectorAll('tr');
  const rowsElements = rows[0].children.length;

  if (rowsElements < 10) {
    rows.forEach((el) => {
      const colElCopy = el.firstElementChild.cloneNode(true);

      el.appendChild(colElCopy);
    });
  }

  if (rowsElements === 9) {
    addRowsBtn.disabled = true;
  }

  if (removeRowsBtn.disabled === true) {
    removeRowsBtn.disabled = false;
  }
}

function removeColumns() {
  const rows = body.querySelectorAll('tr');
  const rowsElements = rows[0].children.length;

  if (rowsElements > 2) {
    rows.forEach((el) => {
      el.firstElementChild.remove();
    });
  }

  if (rowsElements === 3) {
    removeRowsBtn.disabled = true;
  }

  if (addRowsBtn.disabled === true) {
    addRowsBtn.disabled = false;
  }
}
