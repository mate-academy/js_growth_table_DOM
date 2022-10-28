'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');

appendRow.addEventListener('click', (e) => {
  changeCondition(removeRow);
  maxLength(field.children.length, appendRow);

  const cloneElement = field.lastElementChild.cloneNode(true);

  field.append(cloneElement);
});

removeRow.addEventListener('click', (e) => {
  changeCondition(appendRow);
  minLength(field.children.length, removeRow);

  field.lastElementChild.remove();
});

appendColumn.addEventListener('click', (e) => {
  changeCondition(removeColumn);
  maxLength(field.lastElementChild.children.length, appendColumn);

  for (const item of field.children) {
    item.insertAdjacentHTML('beforeend', `
    <tr>
    <td></td>
    </tr>
    `);
  }
});

removeColumn.addEventListener('click', (e) => {
  changeCondition(appendColumn);
  minLength(field.lastElementChild.children.length, removeColumn);

  for (const item of field.children) {
    item.lastElementChild.remove();
  }
});

function changeCondition(variable) {
  if (variable.disabled === true) {
    variable.disabled = false;
  }
}

function minLength(long, state) {
  if (long === 3) {
    state.disabled = true;
  }
}

function maxLength(long, state) {
  if (long === 9) {
    state.disabled = true;
  }
}
