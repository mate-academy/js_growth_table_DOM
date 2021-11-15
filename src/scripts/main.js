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

    appendColumn.disabled = [...e.children].length >= 10;
    removeColumn.disabled = [...e.children].length <= 2;
  });

  appendRow.disabled = [...field.children].length >= 10;
  removeRow.disabled = [...field.children].length <= 2;
};

container.addEventListener('click', (e) => {
  switch (e.target) {
    case appendRow:
      if (appendRow.disabled === false) {
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
