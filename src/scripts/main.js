'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  switch (true) {
    case (e.target.classList.contains('append-row')):
      if (table.rows.length < 10) {
        const newRow = table.insertRow();

        for (let i = 0; i < table.rows[0].cells.length; i++) {
          newRow.insertCell();
        }

        if (table.rows.length === 10) {
          appendRowButton.disabled = true;
        }
        removeRowButton.disabled = false;
      }

      break;

    case (e.target.classList.contains('remove-row')):
      if (table.rows.length > 2) {
        table.deleteRow(-1);

        if (table.rows.length === 2) {
          removeRowButton.disabled = true;
        }

        appendRowButton.disabled = false;
      }
      break;

    case (e.target.classList.contains('append-column')):
      if (table.rows[0].cells.length < 10) {
        const row = table.rows;

        [...row].map(r => r.insertCell());
      };

      if (table.rows[0].cells.length === 10) {
        appendColumnButton.disabled = true;
      }
      removeColumnButton.disabled = false;

      break;

    case (e.target.classList.contains('remove-column')):
      if (table.rows[0].cells.length > 2) {
        const row = table.rows;

        [...row].map(r => r.deleteCell(-1));

        if (table.rows[0].cells.length === 2) {
          removeColumnButton.disabled = true;
        }

        appendColumnButton.disabled = false;
      }
      break;
  }
});
