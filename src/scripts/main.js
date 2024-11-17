'use strict';

// write code here

const table = document.querySelector('table');
const button = document.querySelector('.container');

button.addEventListener('click', (e) => {
  const classEvent = e.target.classList;
  const row = table.rows[0].cloneNode(true);
  const action = classEvent[0].toString().slice(0, 6);
  const position = classEvent[0].toString().slice(7);

  function disable() {
    document.querySelector('.append-row').disabled = table.rows.length > 9;

    document.querySelector('.append-column').disabled =
      table.rows[0].cells.length > 9;
  }

  if (action === 'append') {
    if (position === 'row') {
      table.append(row);
    } else {
      for (const item of table.rows) {
        item.insertCell();
      }
    }
  } else if (position === 'row') {
    table.rows[2].remove();
  } else {
    for (const item of table.rows) {
      item.cells[2].remove();
    }
  }

  disable(classEvent);
});
