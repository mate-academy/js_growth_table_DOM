'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const addRowButton = document.querySelector('.append-row');
const removeRovButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', ev => {
  const item = ev.target;

  switch (true) {
    case item.classList.contains('append-row'):
      removeRovButton.removeAttribute('disabled');

      const row = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        const cell = document.createElement('td');

        row.append(cell);
      }

      if (table.rows.length >= 10) {
        item.setAttribute('disabled', '');
      }
      break;

    case item.classList.contains('remove-row'):
      addRowButton.removeAttribute('disabled');
      table.children[0].lastElementChild.remove();

      if (table.rows.length <= 2) {
        item.setAttribute('disabled', '');
      }
      break;

    case item.classList.contains('append-column'):
      removeColumnButton.removeAttribute('disabled');

      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }

      if (table.rows[0].cells.length >= 10) {
        item.setAttribute('disabled', '');
      }
      break;

    case item.classList.contains('remove-column'):
      addColumnButton.removeAttribute('disabled');

      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].lastElementChild.remove();
      }

      if (table.rows[0].cells.length <= 2) {
        item.setAttribute('disabled', '');
      }
      break;
  }
});
