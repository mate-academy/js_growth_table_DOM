'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const appendRowBotton = document.querySelector('.append-row');
const removeRowBotton = document.querySelector('.remove-row');
const appendColumnBotton = document.querySelector('.append-column');
const removeColumnBotton = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const buttonTarget = e.target.closest('button');

  const newCell = document.createElement('td');
  const cellLength = document.querySelectorAll('tr').length;
  const maxLength = 10;
  const minLength = 2;

  if (!buttonTarget) {
    return;
  }

  switch (buttonTarget) {
    case appendRowBotton:
      if (table.rows.length < maxLength) {
        const newRow = table.insertRow();
        const columnsCount = table.rows[0].cells.length;

        for (let i = 0; i < columnsCount; i++) {
          newRow.insertCell();
        }

        if (table.rows.length === maxLength) {
          appendRowBotton.disabled = true;
        }
        removeRowBotton.disabled = false;
      }

      break;

    case removeRowBotton:
      if (table.rows.length > minLength) {
        const removeElement = table.querySelector('tr');

        removeElement.remove();

        if (table.rows.length === minLength) {
          removeRowBotton.disabled = true;
        }
        appendRowBotton.disabled = false;
      }

      break;

    case appendColumnBotton:
      if (table.rows[0].cells.length < maxLength) {
        for (let index = 0; index < cellLength; index++) {
          table.rows[index].insertCell(newCell);
        }

        if (table.rows[0].cells.length === maxLength) {
          appendColumnBotton.disabled = true;
        }
        removeColumnBotton.disabled = false;
      }

      break;

    case removeColumnBotton:
      if (table.rows[0].cells.length > minLength) {
        for (let index = 0; index < cellLength; index++) {
          table.rows[index].deleteCell(-1);
        }

        if (table.rows[0].cells.length === minLength) {
          removeColumnBotton.disabled = true;
        }

        appendColumnBotton.disabled = false;
      }

      break;
  }
});
