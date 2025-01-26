/* eslint-disable no-unused-vars */
'use strict';

const table = document.querySelector('.field');
const tBody = document.querySelector('tbody');
const removeC = document.querySelector('.remove-column');
const removeR = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');
const addColumn = document.querySelector('.append-column');

document.addEventListener('click', (e) => {
  const appendColumn = e.target.closest('button.append-column');
  const appendRow = e.target.closest('button.append-row');
  const removeRow = e.target.closest('button.remove-row');
  const removeColumn = e.target.closest('button.remove-column');

  const updMinMaxC = () => {
    const del = [...tBody.querySelectorAll(`tr`)];

    if (del.length <= 2) {
      removeR.disabled = true;
    } else {
      removeR.disabled = false;
    }

    if (del.length >= 10) {
      addRow.disabled = true;
    } else {
      addRow.disabled = false;
    }
  };

  const updMinR = () => {
    const trDelete = [...tBody.querySelectorAll('tr')];

    const allRowsHaveTwoOrLess = trDelete.every(
      (row) => row.children.length <= 2,
    );

    removeC.disabled = allRowsHaveTwoOrLess;

    const addMax = trDelete.every((row) => row.children.length === 10);

    addColumn.disabled = addMax;
  };

  if (removeColumn) {
    const trDelete = [...tBody.querySelectorAll('tr')];

    trDelete.forEach((element) => {
      const last = element.querySelector('td:last-child');

      if (last) {
        element.removeChild(last);
      }
    });
    updMinR();
  }

  if (removeRow) {
    const lastRow = tBody.querySelector('tr:last-child');

    if (tBody.children.length > 2) {
      tBody.removeChild(lastRow);
    }
    updMinMaxC();
  }

  if (appendColumn) {
    const tr = [...table.querySelectorAll('tr')];

    tr.forEach((element) => {
      if (element.children.length < 10) {
        const newCell = document.createElement('td');

        element.appendChild(newCell);
      }
    });

    updMinR();
  }

  if (appendRow) {
    if (tBody.querySelectorAll('tr').length < 10) {
      const firstRow = tBody.querySelector('tr');

      const tdCount = firstRow.children.length;
      const newRow = document.createElement('tr');

      for (let i = 0; i < tdCount; i++) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }

      tBody.appendChild(newRow);
    }
    updMinMaxC();
  }
});
