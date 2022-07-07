'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');

const table = document.querySelector('tbody');

appendRow.addEventListener('click', () => {
  if (table.children.length < 10) {
    const newRow = document.createElement('tr');

    newRow.innerHTML = table.children[0].innerHTML;
    table.append(newRow);
  }
});

appendColumn.addEventListener('click', () => {
  if (table.children[0].children.length < 10) {
    [...table.children].map((item) => {
      const newTd = document.createElement('td');

      item.append(newTd);
    });
  }
});

const removeItems = (direction) => {
  if (direction === 'column') {
    if (table.children[0].children.length < 3) {
      return;
    }

    [...table.children].map((item) => {
      item.children[0].remove();
    });

    return;
  }

  if (table.children.length < 3) {
    return;
  }
  table.children[0].remove();
};

removeColumn.addEventListener('click', () => removeItems('column'));
removeRow.addEventListener('click', () => removeItems('row'));
