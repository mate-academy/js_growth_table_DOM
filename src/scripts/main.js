'use strict';

// write code here
const container = document.querySelector('.container');
const field = document.querySelector('.field');
const btnAddRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAddColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');
const fieldSize = {
  min: 2,
  max: 10,
};

function checkSize(rows) {
  const rowsLength = rows.length;
  const rowChildrenLength = rows[0].children.length;

  btnRemoveRow.disabled = rowsLength === fieldSize.min;
  btnAddRow.disabled = rowsLength === fieldSize.max;
  btnAddColumn.disabled = rowChildrenLength === fieldSize.max;
  btnRemoveColumn.disabled = rowChildrenLength === fieldSize.min;
}

container.addEventListener('click', (e) => {
  const elem = e.target;

  if (!elem.classList.contains('button')) {
    return;
  }

  const [method, rowOrColumn] = elem.classList[0].split('-');
  const rows = field.rows;

  switch (method) {
    case 'append':
      switch (rowOrColumn) {
        case 'column':
          for (const el of rows) {
            const td = document.createElement('td');

            el.append(td);
          }
          break;

        case 'row':
          field.append(field.rows[0].cloneNode(true));
      }
      break;

    case 'remove':
      switch (rowOrColumn) {
        case 'column':
          for (const el of rows) {
            el.children[el.children.length - 1].remove();
          }
          break;

        case 'row':
          field.rows[rows.length - 1].remove();
      }
  }

  checkSize(rows);
});
