'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', function(e) {
  if (!e.target.closest('button')) {
    return false;
  }

  const rows = table.tBodies[0].rows;
  const newRow = rows[0].cloneNode(true);
  let lastRow = rows[rows.length - 1];
  const td = document.createElement('td');

  function changeColumn(button, secondButton, count) {
    button.disabled = false;

    if (rows[0].childElementCount === count) {
      secondButton.disabled = !secondButton.disabled;

      return false;
    }
  }

  function changeRow(button, secondButton, count) {
    button.disabled = false;
    secondButton.disabled = false;

    if (rows.length === count) {
      button.disabled = !button.disabled;
    }
  }

  if (e.target === appendRowButton) {
    if (rows.length < 10) {
      table.tBodies[0].append(newRow);
      lastRow = rows[rows.length - 1];

      changeRow(appendRowButton, removeRowButton, 10);
    }
  }

  if (e.target === removeRowButton) {
    if (rows.length > 2) {
      lastRow.remove();
      changeRow(removeRowButton, appendRowButton, 2);
    }
  }

  if (e.target === appendColumnButton) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].append(td.cloneNode());
    }

    changeColumn(removeColumnButton, appendColumnButton, 10);
  }

  if (e.target === removeColumnButton) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].lastElementChild.remove(td);
    }

    changeColumn(appendColumnButton, removeColumnButton, 2);
  }
});
