'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const appendRowBotton = document.querySelector('.append-row');
const removeRowBotton = document.querySelector('.remove-row');
const appendColumnBotton = document.querySelector('.append-column');
const removeColumnBotton = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const buttonTarget = e.target.closest('button');
  const tr = table.querySelector('tr');

  const newCell = document.createElement('td');
  const cellLength = document.querySelectorAll('tr').length;

  if (!buttonTarget) {
    return;
  }

  switch (buttonTarget) {
    case appendRowBotton:
      if (table.rows.length < 10) {
        const newRow = table.insertRow();
        const columnsCount = table.rows[0].cells.length;

        for (let i = 0; i < columnsCount; i++) {
          newRow.insertCell();
        }

        if (table.rows.length === 10) {
          appendRowBotton.disabled = true;
        }
        removeRowBotton.disabled = false;
      }

      break;

    case removeRowBotton:
      if (table.rows.length > 2) {
        const removeElement = table.querySelector('tr');

        removeElement.remove();

        if (table.rows.length === 2) {
          removeRowBotton.disabled = true;
        }
        appendRowBotton.disabled = false;
      }

      break;

    case appendColumnBotton:
      if (table.rows[0].cells.length < 10) {
        for (let index = 0; index < cellLength; index++) {
          table.rows[index].insertCell(newCell);
        }

        if (table.rows[0].cells.length === 10) {
          appendColumnBotton.disabled = true;
        }
        removeColumnBotton.disabled = false;
      }

      break;

    case removeColumnBotton:
      if (table.rows[0].cells.length > 2) {
        for (let index = 0; index < cellLength; index++) {
          table.rows[index].deleteCell(-1);
        }

        if (table.rows[0].cells.length === 2) {
          removeColumnBotton.disabled = true;
        }

        appendColumnBotton.disabled = false;
      }

      break;
  }
});
