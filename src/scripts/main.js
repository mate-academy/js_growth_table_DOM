'use strict';

function resizingTable(e) {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  const table = document.querySelector('.field');
  const rows = table.rows;
  const arrayRows = [...rows];

  if (button.classList.contains('append-row')) {
    rows[rows.length - 1].after(rows[rows.length - 1].cloneNode(true));

    if (rows.length === 10) {
      button.disabled = true;
    }

    if (rows.length === 3) {
      document.querySelector('.remove-row').disabled = false;
    }
  } else if (button.classList.contains('remove-row')) {
    rows[rows.length - 1].remove();

    if (rows.length === 2) {
      button.disabled = true;
    }

    if (rows.length === 9) {
      document.querySelector('.append-row').disabled = false;
    }
  } else if (button.classList.contains('append-column')) {
    arrayRows.forEach(row =>
      row.lastElementChild.after(row.lastElementChild.cloneNode(true)));

    if (rows[0].cells.length === 10) {
      button.disabled = true;
    }

    if (rows[0].cells.length === 3) {
      document.querySelector('.remove-column').disabled = false;
    }
  } else {
    arrayRows.forEach(row => row.lastElementChild.remove());

    if (rows[0].cells.length === 2) {
      button.disabled = true;
    }

    if (rows[0].cells.length === 9) {
      document.querySelector('.append-column').disabled = false;
    }
  }
}

document.body.addEventListener('click', resizingTable);
