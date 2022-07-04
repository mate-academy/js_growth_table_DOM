'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const rows = field.rows;
let rowCount = 4;
let colCount = 4;

container.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('append-row')) {
    const row = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      row.insertAdjacentHTML('beforeend', `
          <td></td>
      `);

      field.append(row);
    }

    rowCount++;
  }

  if (target.classList.contains('remove-row')) {
    const row = field.querySelector('tr');

    row.remove();
    rowCount--;
  }

  if (target.classList.contains('append-column')) {
    for (const row of rows) {
      const column = document.createElement('td');

      row.append(column);
    }

    colCount++;
  }

  if (target.classList.contains('remove-column')) {
    [...field.rows].map(
      item => item.firstElementChild.remove()
    );
    colCount--;
  }

  document.querySelector('.append-row').disabled = rowCount === 10;
  document.querySelector('.remove-row').disabled = rowCount === 2;
  document.querySelector('.append-column').disabled = colCount === 10;
  document.querySelector('.remove-column').disabled = colCount === 2;
});
