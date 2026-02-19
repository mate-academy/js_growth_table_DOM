'use strict';

// write code here

const tbody = document.querySelector('table.field tbody');

document.querySelector('.container').addEventListener('click', (e) => {
  const bodyTr = tbody.querySelector('tr');
  const rows = [...tbody.querySelectorAll('tr')];
  const columns = [...bodyTr.querySelectorAll('td')];
  const rowsCount = rows.length;
  const columnsCount = columns.length;

  if (e.target.classList.contains('append-row') && rowsCount < 10) {
    const newTr = document.createElement('tr');

    for (let i = 0; i < columnsCount; i++) {
      const td = document.createElement('td');

      newTr.appendChild(td);
    }

    tbody.appendChild(newTr);

    const newRowsCount = [...tbody.querySelectorAll('tr')].length;

    if (newRowsCount === 10) {
      e.target.disabled = true;
    }

    const button = document.querySelector('.remove-row');

    if (newRowsCount > 2 && button.disabled === true) {
      button.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-row') && rowsCount > 2) {
    tbody.removeChild(rows[rows.length - 1]);

    const newRowsCount = [...tbody.querySelectorAll('tr')].length;

    if (newRowsCount <= 2) {
      e.target.disabled = true;
    }

    const button = document.querySelector('.append-row');

    if (newRowsCount < 10 && button.disabled === true) {
      button.disabled = false;
    }
  }

  if (e.target.classList.contains('append-column') && columnsCount < 10) {
    rows.forEach((tr) => {
      const td = document.createElement('td');

      tr.appendChild(td);
    });

    const newColumnsCount = [...bodyTr.querySelectorAll('td')].length;

    if (newColumnsCount === 10) {
      e.target.disabled = true;
    }

    const button = document.querySelector('.remove-column');

    if (newColumnsCount > 2 && button.disabled === true) {
      button.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-column') && columnsCount > 2) {
    rows.forEach((tr) => {
      const td = [...tr.querySelectorAll('td')];

      tr.removeChild(td[td.length - 1]);
    });

    const newColumnsCount = [...bodyTr.querySelectorAll('td')].length;

    if (newColumnsCount <= 2) {
      e.target.disabled = true;
    }

    const button = document.querySelector('.append-column');

    if (newColumnsCount < 10 && button.disabled === true) {
      button.disabled = false;
    }
  }
});
