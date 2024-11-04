/* eslint-disable function-paren-newline */
'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tableBodie = document.querySelector('table').tBodies[0];
const colectionRow = tableBodie.children;

document.addEventListener('click', function (e) {
  const someButton = e.target.closest('button');

  if (!someButton) {
    return;
  }

  // click on appendRowButton
  if (someButton === appendRowButton && colectionRow.length < 10) {
    const cloneRow = colectionRow[0].cloneNode(true);

    tableBodie.appendChild(cloneRow);

    if (colectionRow.length > 2 && removeRowButton.hasAttribute('disabled')) {
      removeRowButton.removeAttribute('disabled');
    }

    if (colectionRow.length === 10) {
      appendRowButton.setAttribute('disabled', '');
    }
  }

  // click on removeRowButton
  if (someButton === removeRowButton && colectionRow.length > 2) {
    colectionRow[colectionRow.length - 1].remove();

    if (colectionRow.length < 10 && appendRowButton.hasAttribute('disabled')) {
      appendRowButton.removeAttribute('disabled');
    }

    if (colectionRow.length === 2) {
      removeRowButton.setAttribute('disabled', '');
    }
  }

  // click on appendColumnButton
  if (
    someButton === appendColumnButton &&
    colectionRow[0].children.length < 10
  ) {
    for (let i = 0; i < colectionRow.length; i++) {
      const cloneCell = colectionRow[0].children[0].cloneNode(true);

      colectionRow[i].append(cloneCell);
    }

    if (
      colectionRow[0].children.length > 2 &&
      removeColumnButton.hasAttribute('disabled')
    ) {
      removeColumnButton.removeAttribute('disabled');
    }

    if (colectionRow[0].children.length === 10) {
      appendColumnButton.setAttribute('disabled', '');
    }
  }

  // click on removeColumnButton
  if (
    someButton === removeColumnButton &&
    colectionRow[0].children.length > 2
  ) {
    for (let i = 0; i < colectionRow.length; i++) {
      const colectionCells = colectionRow[i].children;

      colectionCells[colectionCells.length - 1].remove();
    }

    if (
      colectionRow[0].children.length < 10 &&
      appendColumnButton.hasAttribute('disabled')
    ) {
      appendColumnButton.removeAttribute('disabled');
    }

    if (colectionRow[0].children.length === 2) {
      removeColumnButton.setAttribute('disabled', '');
    }
  }
});
