'use strict';

const container = document.querySelector('.container');
const field = container.querySelector('.field');
const firstRow = field.children[0].children[0];
const firstRowLong = firstRow.children.length;

const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');

const newData = {
  row: field.children[0].children.length,
  collum: firstRowLong,
};

container.addEventListener('click', e => {
  const item = e.target.closest('.button');

  if (!item) {
    return;
  }

  switch (item.classList[0]) {
    case 'append-row':
      if (newData.row === 10) {
        break;
      }
      newData.row++;
      removeRow.removeAttribute('disabled');

      if (newData.row === 10) {
        item.setAttribute('disabled', 'true');
      }
      break;

    case 'remove-row':
      if (newData.row === 2) {
        break;
      }
      newData.row--;
      appendRow.removeAttribute('disabled');

      if (newData.row === 2) {
        item.setAttribute('disabled', 'true');
      }
      break;

    case 'append-column':
      if (newData.collum === 10) {
        break;
      }
      newData.collum++;
      removeColumn.removeAttribute('disabled');

      if (newData.collum === 10) {
        item.setAttribute('disabled', 'true');
      }
      break;

    case 'remove-column':
      if (newData.collum === 2) {
        break;
      }
      newData.collum--;
      appendColumn.removeAttribute('disabled');

      if (newData.collum === 2) {
        item.setAttribute('disabled', 'true');
      }
      break;
  }

  field.innerHTML = '';

  const tr = document.createElement('tr');

  for (let i = 0; i < newData.collum; i++) {
    tr.insertAdjacentHTML('beforeend', `
    <td></td>
    `);
  }

  for (let i = 0; i < newData.row; i++) {
    field.insertAdjacentElement('beforeend', tr.cloneNode(true));
  }
});
