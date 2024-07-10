'use strict';

const container = document.querySelector('.container');

container?.addEventListener('click', (ev) => {
  const table = document.querySelector('.field');
  const btAppendRow = container.querySelector('.append-row');
  const btDelRow = container.querySelector('.remove-row');
  const btAppendCol = container.querySelector('.append-column');
  const btDelCol = container.querySelector('.remove-column');

  switch (ev.target.classList[0]) {
    case 'append-row':
      if (table?.rows?.length < 10) {
        table.append(table.rows[0].cloneNode(true));
      }
      break;

    case 'remove-row':
      if (table.rows.length > 2) {
        table.rows[0].remove();
      }
      break;

    case 'append-column':
      if (table?.rows[0]?.cells.length < 10) {
        for (let col = 0; col < table.rows.length; col++) {
          table.rows[col].append(table.rows[col].cells[0].cloneNode(true));
        }
      }
      break;

    case 'remove-column':
      if (table?.rows[0]?.cells.length > 2) {
        for (let col = 0; col < table.rows.length; col++) {
          table.rows[col].cells[0].remove();
        }
      }
      break;
  }

  if (table?.rows?.length < 10) {
    btAppendRow.disabled = false;
  } else {
    btAppendRow.disabled = true;
  }

  if (table.rows.length > 2) {
    btDelRow.disabled = false;
  } else {
    btDelRow.disabled = true;
  }

  if (table?.rows[0]?.cells.length < 10) {
    btAppendCol.disabled = false;
  } else {
    btAppendCol.disabled = true;
  }

  if (table?.rows[0]?.cells.length > 2) {
    btDelCol.disabled = false;
  } else {
    btDelCol.disabled = true;
  }
});
