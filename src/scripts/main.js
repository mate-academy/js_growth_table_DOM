'use strict';

const buttons = [...document.querySelectorAll('.button')];

buttons.forEach((button) => button.addEventListener('click', clickHandler));

function clickHandler() {
  const action = event.target.className.split(' ')[0];

  actionHandler(action);
}

function actionHandler(action) {
  const table = document.querySelector('table tbody');

  // console.log(action);

  if (action === 'append-row') {
    const row = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const cell = document.createElement('td');

      row.append(cell);
    }
    table.append(row);

    const removeRowButton = document.querySelector('.remove-row');

    if (removeRowButton) {
      removeRowButton.disabled = false;
    }

    if (table.rows.length >= 10) {
      event.target.disabled = true;
    }
  }

  if (action === 'remove-row') {
    table.lastElementChild.remove();

    const addRowButton = document.querySelector('.append-row');

    if (addRowButton) {
      addRowButton.disabled = false;
    }

    if (table.rows.length <= 2) {
      event.target.disabled = true;
    }
  }

  if (action === 'append-column') {
    for (const row of table.rows) {
      const cell = document.createElement('td');

      row.append(cell);
    }

    const removeColumnButton = document.querySelector('.remove-column');

    if (removeColumnButton) {
      removeColumnButton.disabled = false;
    }

    if (table.rows[0].cells.length >= 10) {
      event.target.disabled = true;
    }
  }

  if (action === 'remove-column') {
    for (const row of table.rows) {
      const cell = row.lastElementChild;

      cell.remove();
    }

    const addColumnButton = document.querySelector('.append-column');

    if (addColumnButton) {
      addColumnButton.disabled = false;
    }

    if (table.rows[0].cells.length <= 2) {
      event.target.disabled = true;
    }
  }
}
