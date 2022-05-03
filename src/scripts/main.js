'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rows = table.rows;

let limitRow = rows.length;
let limitColumn = rows[0].children.length;

document.addEventListener('click', e => {
  const button = e.target.classList[0];

  if (button === 'append-row') {
    const copyRow = rows[0].cloneNode('true');

    table.append(copyRow);

    limitRow++;
  };

  if (button === 'remove-row') {
    rows[rows.length - 1].remove();

    limitRow--;
  }

  if (button === 'append-column') {
    for (const row of rows) {
      const copyColumn = row.lastElementChild.cloneNode(true);

      row.lastElementChild.after(copyColumn);
    }

    limitColumn++;
  }

  if (button === 'remove-column') {
    for (const row of rows) {
      row.lastElementChild.remove();
    }

    limitColumn--;
  }

  appendRow.disabled = limitRow >= 10;
  removeRow.disabled = limitRow < 3;
  appendColumn.disabled = limitColumn >= 10;
  removeColumn.disabled = limitColumn < 3;
});
