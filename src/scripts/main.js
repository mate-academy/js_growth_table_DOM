'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const field = document.querySelector('.field tbody');

function tableSetup(action) {
  [...field.children].forEach(e => {
    if (action === 'append') {
      e.insertBefore(e.lastElementChild.cloneNode(true), e.lastElementChild);
    } else if (action === 'remove' && [...e.children].length > 2) {
      e.lastElementChild.remove();
    }

    [...e.children].length < 10
      ? appendColumn.disabled = false : appendColumn.disabled = true;

    [...e.children].length <= 2
      ? removeColumn.disabled = true : removeColumn.disabled = false;
  });

  [...field.children].length < 10
    ? appendRow.disabled = false : appendRow.disabled = true;

  [...field.children].length <= 2
    ? removeRow.disabled = true : removeRow.disabled = false;
};

container.addEventListener('click', (e) => {
  switch (e.target) {
    case appendRow:
      if (appendRow.disabled  === false) {
        field.insertBefore(field.lastElementChild.cloneNode(true),
          field.lastElementChild);
      }
      tableSetup();
      break;
    case removeRow:
      field.lastElementChild.remove();
      tableSetup();
      break;
    case appendColumn:
      if (appendColumn.disabled === false) {
        tableSetup('append');
      }
      break;
    case removeColumn:
      tableSetup('remove');
      break;
  }
});
