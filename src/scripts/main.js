'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');

appendRow.addEventListener('click', (e) => {
  if (field.children.length === 10) {
    return;
  }

  const cloneElement = field.lastElementChild.cloneNode(true);

  field.append(cloneElement);
});

appendColumn.addEventListener('click', (e) => {
  if (field.lastElementChild.children.length === 10) {
    return;
  }

  for (const item of field.children) {
    item.insertAdjacentHTML('beforeend', `
    <tr>
    <td></td>
    </tr>
    `);
  }
});

removeRow.addEventListener('click', (e) => {
  if (field.children.length === 2) {
    return;
  }
  field.lastElementChild.remove();
});

removeColumn.addEventListener('click', (e) => {
  if (field.lastElementChild.children.length === 2) {
    return;
  }

  for (const item of field.children) {
    item.lastElementChild.remove();
  }
});
