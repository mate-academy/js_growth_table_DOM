'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const rows = document.querySelector('tr');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  };

  switch (e.target) {
    case appendColumn:
      if (rows.children.length < 10) {
        const allRows = document.querySelectorAll('tr');

        for (let i = 0; i < allRows.length; i++) {
          allRows[i].insertAdjacentHTML('beforeend', '<td></td>');
        }
      }
      break;
    case removeColumn:
      if (rows.children.length > 2) {
        const allRow = document.querySelectorAll('tr');

        for (let i = 0; i < allRow.length; i++) {
          allRow[i].lastElementChild.remove();
        }
      }
      break;
    case appendRow:
      if (tbody.children.length < 10) {
        tbody.append(tbody.lastElementChild.cloneNode(true));
      }
      break;
    case removeRow:
      if (tbody.children.length > 2) {
        tbody.lastElementChild.remove();
      }
      break;
  };
});
