'use strict';

const table = document.querySelector('.field');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    if (table.tBodies[0].rows.length >= 10) {
      return;
    }

    const newTr = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newTd = document.createElement('td');

      newTr.append(newTd);
    }
    table.tBodies[0].append(newTr);

    if (table.rows.length === 10) {
      e.target.disabled = true;
    }

    if (table.rows.length === 3) {
      e.target.nextElementSibling.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-row')) {
    if (table.tBodies[0].rows.length <= 2) {
      return;
    }

    table.rows[table.rows.length - 1].remove();

    if (table.rows.length === 2) {
      e.target.disabled = true;
    }

    if (table.rows.length === 9) {
      e.target.previousElementSibling.disabled = false;
    }
  }

  if (e.target.classList.contains('append-column')) {
    if (table.tBodies[0].rows[0].cells.length >= 10) {
      return;
    }

    for (const element of table.rows) {
      const newCell = document.createElement('td');

      element.append(newCell);
    }

    if (table.rows[0].cells.length === 10) {
      e.target.disabled = true;
    }

    if (table.rows[0].cells.length === 3) {
      e.target.nextElementSibling.disabled = false;
    }
  }

  if (e.target.classList.contains('remove-column')) {
    if (table.tBodies[0].rows[0].cells.length <= 2) {
      return;
    }

    for (const element of table.rows) {
      element.cells[element.cells.length - 1].remove();
    }

    if (table.rows[0].cells.length === 2) {
      e.target.disabled = true;
    }

    if (table.rows[0].cells.length === 9) {
      e.target.previousElementSibling.disabled = false;
    }
  }
});
