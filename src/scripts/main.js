'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field').children[0];

document.body.addEventListener('click', (e) => {
  const item = e.target.closest('button');

  switch (item) {
    case appendRow:
      field.append([...field.children][0].cloneNode(true));
      break;
    case removeRow:
      [...field.children][0].remove();
      break;
    case appendColumn:
      [...field.children].forEach(items => {
        items.append([...field.children][0].children[0].cloneNode(true));
      });
      break;
    case removeColumn:
      [...field.children].forEach(items => {
        [...items.children][0].remove();
      });
      break;
  };

  appendRow.disabled = [...field.children].length > 9;
  removeRow.disabled = [...field.children].length < 3;
  appendColumn.disabled = [...field.children[0].children].length > 9;
  removeColumn.disabled = [...field.children[0].children].length < 3;
});
