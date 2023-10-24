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
      tbody.append(tbody.rows[0].cloneNode(true));
      document.querySelector(`.${REMOVE_ROW}`).disabled = false;
      break;

    case REMOVE_ROW:
      table.deleteRow(-1);
      document.querySelector(`.${APPEND_ROW}`).disabled = false;
      break;

    case APPEND_COLUMN:
      for (const tr of tbody.children) {
        tr.append(document.createElement('td'));
        document.querySelector(`.${REMOVE_COLUMN}`).disabled = false;
      }
      break;

    case REMOVE_COLUMN:
      for (const tr of tbody.children) {
        tr.lastElementChild.remove();
        document.querySelector(`.${APPEND_COLUMN}`).disabled = false;
      }
      break;
  }

  switch (tbody.children.length) {
    case 10:
      document.querySelector(`.${APPEND_ROW}`).disabled = true;
      break;

    case 2:
      document.querySelector(`.${REMOVE_ROW}`).disabled = true;
      break;
  }

  switch (tbody.lastElementChild.children.length) {
    case 10:
      document.querySelector(`.${APPEND_COLUMN}`).disabled = true;
      break;

    case 2:
      document.querySelector(`.${REMOVE_COLUMN}`).disabled = true;
      break;
  }
});
