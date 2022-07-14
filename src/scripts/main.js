'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const row = table.querySelector('TR');

container.addEventListener('click', (e) => {
  switch (e.target.classList.contains('append-row')) {
    case true:
      if (table.rows.length < 10) {
        table.append(row.cloneNode(true));
      }

      if (table.rows.length === 10) {
        e.target.disabled = true;
      }

      if (table.rows.length > 2) {
        const button = document.querySelector('.remove-row');

        button.disabled = false;
      }
      break;
  }

  switch (e.target.classList.contains('remove-row')) {
    case true:
      if (table.rows.length > 2) {
        const rows = table.rows;

        rows[rows.length - 1].remove();
      }

      if (table.rows.length === 2) {
        e.target.disabled = true;
      }

      if (table.rows.length < 10) {
        const button = document.querySelector('.append-row');

        button.disabled = false;
      }
      break;
  }

  switch (e.target.classList.contains('append-column')) {
    case true:
      if (row.childElementCount < 10) {
        const rows = table.rows;

        for (let i = 0; i < rows.length; i++) {
          const x = rows[i].getElementsByTagName('TD')[0];

          rows[i].append(x.cloneNode(true));
        }
      }

      if (row.childElementCount === 10) {
        e.target.disabled = true;
      }

      if (row.childElementCount > 2) {
        const button = document.querySelector('.remove-column');

        button.disabled = false;
      }
      break;
  }

  switch (e.target.classList.contains('remove-column')) {
    case true:
      if (row.childElementCount > 2) {
        const rows = table.rows;

        for (let i = 0; i < rows.length; i++) {
          rows[i].lastChild.remove();
        }
      }

      if (row.childElementCount === 2) {
        e.target.disabled = true;
      }

      if (row.childElementCount < 10) {
        const button = document.querySelector('.append-column');

        button.disabled = false;
      }
      break;
  }
});
