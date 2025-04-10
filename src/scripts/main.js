'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field tbody');

let rowAmount = table?.children.length || 0;
let columnAmount = table?.children[0].children.length || 0;

changeButtonState();

container.addEventListener('click', (e) => {
  if (e.target.closest('.append-row')) {
    if (rowAmount >= 10) {
      return;
    }

    const newTr = document.createElement('tr');

    for (let i = 0; i < columnAmount; i++) {
      const newTd = document.createElement('td');

      newTr.append(newTd);
    }

    table.append(newTr);

    rowAmount = table.children.length;

    changeButtonState();
  }

  if (e.target.closest('.remove-row')) {
    if (rowAmount > 0) {
      table.children[rowAmount - 1].remove();
    }

    rowAmount = table.children.length;

    changeButtonState();
  }

  if (e.target.closest('.append-column')) {
    if (columnAmount >= 10) {
      return;
    }

    for (let i = 0; i < rowAmount; i++) {
      const newTd = document.createElement('td');

      table.children[i].append(newTd);
    }

    columnAmount = table.children[0].children.length;

    changeButtonState();
  }

  if (e.target.closest('.remove-column')) {
    for (let i = 0; i < rowAmount; i++) {
      if (columnAmount > 0) {
        table.children[i].children[columnAmount - 1].remove();
      }
    }

    columnAmount = table.children[0].children.length;

    changeButtonState();
  }
});

function changeButtonState() {
  const maxLimit = 10;
  const minLimit = 2;

  document.querySelector('.append-row').disabled = rowAmount === maxLimit;
  document.querySelector('.remove-row').disabled = rowAmount === minLimit;
  document.querySelector('.append-column').disabled = columnAmount === maxLimit;
  document.querySelector('.remove-column').disabled = columnAmount === minLimit;
}
