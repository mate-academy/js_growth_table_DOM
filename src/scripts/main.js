'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const tbody = field.querySelector('tbody');

// check actual size
let actualRowsLength = field.querySelector('tbody').children.length;
let actualColumnsLength = field.querySelector('tr').children.length;

container.addEventListener('click', function (e) {
  const row = tbody.lastElementChild;

  if (e.target.closest('.append-row')) {
    const newRow = row.cloneNode(true);

    if (actualRowsLength < 10) {
      tbody.append(newRow);
      actualRowsLength += 1;
    }
  }

  if (e.target.closest('.remove-row')) {
    if (actualRowsLength > 2) {
      row.remove();
      actualRowsLength -= 1;
    }
  }

  if (e.target.closest('.append-column')) {
    if (actualColumnsLength < 10) {
      actualColumnsLength += 1;

      for (let i = 0; i < actualRowsLength; i++) {
        const currentRow = tbody.children[i];
        const lastColumn = currentRow.children[currentRow.children.length - 1];
        const newColumn = lastColumn.cloneNode(true);

        currentRow.append(newColumn);
      }
    }
  }

  if (e.target.closest('.remove-column')) {
    if (actualColumnsLength > 2) {
      actualColumnsLength -= 1;

      for (let i = 0; i < actualRowsLength; i++) {
        const currentRow = tbody.children[i];

        currentRow.children[currentRow.children.length - 1].remove();
      }
    }
  }
});
