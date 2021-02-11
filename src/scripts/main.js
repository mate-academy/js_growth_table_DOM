'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');

document.addEventListener('click', (event) => {
  switch (event.target.classList.value) {
    case ('append-row button'):
      field.append(field.lastElementChild.cloneNode(true));
      break;
    case ('remove-row button'):
      field.lastElementChild.remove();
      break;
    case ('append-column button'):
      [...field.children].forEach(element => {
        element.append(element.lastElementChild.cloneNode());
      });
      break;
    case ('remove-column button'):
      [...field.children].forEach(element => {
        element.lastElementChild.remove();
      });
      break;
  }

  addRow.disabled = (field.children.length === 10);
  removeRow.disabled = (field.children.length === 2);
  removeColumn.disabled = (field.firstElementChild.children.length === 2);
  addColumn.disabled = (field.firstElementChild.children.length === 10);
});
