'use strict';

const container = document.querySelector('.container');

container?.addEventListener('click', (ev) => {
  const table = document.querySelector('tbody');
  const btAppendRow = container.querySelector('.append-row');
  const btDelRow = container.querySelector('.remove-row');
  const btAppendCol = container.querySelector('.append-column');
  const btDelCol = container.querySelector('.remove-column');

  if (ev.target.classList.contains('append-row') && table?.rows?.length < 10) {
    table.append(table.rows[0].cloneNode(true));
  }

  if (ev.target.classList.contains('remove-row') && table.rows.length > 2) {
    table.rows[0].remove();
  }

  if (
    ev.target.classList.contains('append-column') &&
    table?.rows[0]?.cells.length < 10
  ) {
    for (let col = 0; col < table.rows.length; col++) {
      table.rows[col].append(table.rows[col].cells[0].cloneNode(true));
    }
  }

  if (
    ev.target.classList.contains('remove-column') &&
    table?.rows[0]?.cells.length > 2
  ) {
    for (let col = 0; col < table.rows.length; col++) {
      table.rows[col].cells[0].remove();
    }
  }

  btAppendRow.disabled = table?.rows?.length >= 10;
  btDelRow.disabled = table.rows.length <= 2;
  btAppendCol.disabled = table?.rows[0]?.cells.length >= 10;
  btDelCol.disabled = table?.rows[0]?.cells.length <= 2;
});
