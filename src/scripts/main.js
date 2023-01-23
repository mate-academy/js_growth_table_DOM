'use strict';

const container = document.querySelector('.container');
const [ addRow, removeRow, addCell, removeCell ] = document
  .querySelectorAll('button');

container.addEventListener('click', e => {
  const item = e.target;
  const min = 2;
  const max = 10;

  const rows = document.querySelectorAll('tr');
  const row = rows[rows.length - 1];

  const cells = row.cells;

  switch (item) {
    case addRow:
      removeRow.removeAttribute('disabled');

      rows.length === max
        ? addRow.setAttribute('disabled', true)
        : row.after(row.cloneNode(true));
      break;

    case removeRow:
      addRow.removeAttribute('disabled');

      rows.length === min
        ? removeRow.setAttribute('disabled', true)
        : row.remove();
      break;

    case addCell:
      removeCell.removeAttribute('disabled');

      cells.length === max
        ? addCell.setAttribute('disabled', true)
        : rows.forEach(person => {
          const cell = document.createElement('td');

          person.append(cell);
        });
      break;

    case removeCell:
      addCell.removeAttribute('disabled');

      cells.length === 2
        ? removeCell.setAttribute('disabled', true)
        : rows.forEach(person => person.lastElementChild.remove());
      break;

    default:
      return 'Hey, check where you clicked';
  };
});
