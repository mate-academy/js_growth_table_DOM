'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
  const button = e.target.closest('button');

  if (!button) {
    return;
  }

  modifyTable(button);
});

function modifyTable(currentBtn) {
  const tBody = document.querySelector('tbody');
  const buttons = document.querySelectorAll('.container > button');

  const buttonType = currentBtn.classList[0];

  const maxCount = 10;
  const minCount = 2;

  const indices = {
    appendRow: 0,
    removeRow: 1,
    appendColumn: 2,
    removeColumn: 3,
  };

  let rowsCount = tBody.rows.length;
  let columnCount = tBody.rows[0].cells.length;

  switch (buttonType) {
    case 'append-row':
      if (rowsCount < maxCount) {
        buttons[indices['removeRow']].disabled = false;

        const tr = document.createElement('tr');

        for (let i = 0; i < columnCount; i++) {
          const td = document.createElement('td');

          tr.append(td);
        }

        tBody.append(tr);
      }

      rowsCount++;

      if (rowsCount === maxCount) {
        currentBtn.disabled = true;
      }

      break;

    case 'remove-row':
      if (rowsCount > minCount) {
        buttons[indices['appendRow']].disabled = false;

        tBody.rows[rowsCount - 1].remove();
      }

      rowsCount--;

      if (rowsCount === minCount) {
        currentBtn.disabled = true;
      }

      break;

    case 'append-column':
      if (columnCount < maxCount) {
        buttons[indices['removeColumn']].disabled = false;

        for (const row of tBody.rows) {
          const td = document.createElement('td');

          row.append(td);
        }
      }

      columnCount++;

      if (columnCount === maxCount) {
        currentBtn.disabled = true;
      }

      break;

    case 'remove-column':
      if (columnCount > minCount) {
        buttons[indices['appendColumn']].disabled = false;

        for (const row of tBody.rows) {
          row.cells[columnCount - 1].remove();
        }
      }

      columnCount--;

      if (columnCount === minCount) {
        currentBtn.disabled = true;
      }

      break;

    default:
      break;
  }
}
