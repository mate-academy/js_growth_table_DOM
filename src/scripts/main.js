'use strict';

const APPEND_ROW = 'append-row';
const REMOVE_ROW = 'remove-row';
const APPEND_COLUMN = 'append-column';
const REMOVE_COLUMN = 'remove-column';

document.querySelector('.container').addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const table = document.querySelector('.field');
  const tbody = table.firstElementChild;

  switch (e.target.classList[0]) {
    case APPEND_ROW:
      if (tbody.children.length >= 10) {
        break;
      }

      if (tbody.children.length === 9) {
        document.querySelector(`.${APPEND_ROW}`).disabled = true;
      }
      tbody.append(tbody.rows[0].cloneNode(true));
      document.querySelector(`.${REMOVE_ROW}`).disabled = false;
      break;

    case REMOVE_ROW:
      if (tbody.children.length === 3) {
        document.querySelector(`.${REMOVE_ROW}`).disabled = true;
      }
      table.deleteRow(-1);
      document.querySelector(`.${APPEND_ROW}`).disabled = false;
      break;

    case APPEND_COLUMN:
      if (tbody.lastElementChild.children.length >= 10) {
        break;
      }

      if (tbody.lastElementChild.children.length === 9) {
        document.querySelector(`.${APPEND_COLUMN}`).disabled = true;
      }

      for (const tr of tbody.children) {
        tr.append(document.createElement('td'));
      }
      document.querySelector(`.${REMOVE_COLUMN}`).disabled = false;
      break;

    case REMOVE_COLUMN:
      if (tbody.lastElementChild.children.length === 3) {
        document.querySelector(`.${REMOVE_COLUMN}`).disabled = true;
      }

      for (const tr of tbody.children) {
        tr.lastElementChild.remove();
      }
      document.querySelector(`.${APPEND_COLUMN}`).disabled = false;
      break;
  }
});
