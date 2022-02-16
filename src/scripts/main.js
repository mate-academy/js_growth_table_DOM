'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRow.addEventListener('click', (e) => {
  const row = document.createElement('tr');
  const el = document.createElement('td');
  const el1 = document.createElement('td');
  const el2 = document.createElement('td');
  const el3 = document.createElement('td');
  row.append(el,el1,el2,el3);
  if (table.children[0].children.length < 12) {
    table.children[0].append(row);
  }
});

removeRow.addEventListener('click', (e) => {
  if (table.children[0].children.length > 2)
  table.children[0].lastChild.remove();
});

removeColumn.addEventListener('click', (e) => {
  if (table.children[0].children[0].children.length > 2) {
    for (let i of table.children[0].children) {
      i.lastChild.remove();
    }
  }
});

appendColumn.addEventListener('click', (e) => {
  if (table.children[0].children[0].children.length < 12) {
    for (let i of table.children[0].children) {
      const el = document.createElement('td');
      i.append(el);
    }
  }
});
