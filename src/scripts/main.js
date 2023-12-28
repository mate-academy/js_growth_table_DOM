'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('.field').children[0];
const rows = tbody.rows;

const MAX_COUNT = 10;
const MIN_COUNT = 2;

container.addEventListener('click', changeTable);

function changeTable(e) {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  switch (true) {
    case (e.target.classList.contains('append-row')):
      const newRow = rows.item(0).cloneNode(true);

      if (tbody.childElementCount < MAX_COUNT) {
        tbody.append(newRow);
        document.querySelector('.remove-row').disabled = false;

        if (tbody.childElementCount === MAX_COUNT) {
          document.querySelector('.append-row').disabled = true;
        }
      };
      break;

    case (e.target.classList.contains('remove-row')):
      if (tbody.childElementCount <= MIN_COUNT) {
        return;
      };

      tbody.children[tbody.childElementCount - 1].remove();
      document.querySelector('.append-row').disabled = false;

      if (tbody.childElementCount === MIN_COUNT) {
        document.querySelector('.remove-row').disabled = true;
      }
      break;

    case (e.target.classList.contains('append-column')):
      if (tbody.firstElementChild.childElementCount < MAX_COUNT) {
        for (const row of rows) {
          row.append(document.createElement('td'));
        };

        document.querySelector('.remove-column').disabled = false;

        if (tbody.firstElementChild.childElementCount === MAX_COUNT) {
          document.querySelector('.append-column').disabled = true;
        }
      };

      break;

    case (e.target.classList.contains('remove-column')):
      if (tbody.firstElementChild.childElementCount <= MIN_COUNT) {
        return;
      }

      for (const row of rows) {
        row.lastElementChild.remove();
      }
      document.querySelector('.append-column').disabled = false;

      if (tbody.firstElementChild.childElementCount === MIN_COUNT) {
        document.querySelector('.remove-column').disabled = true;
      }
      break;

    default:

      break;
  }
}
