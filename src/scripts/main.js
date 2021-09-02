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

      if ([...field.children].length > 9) {
        appendRow.setAttribute('disabled', '');
      };

      if ([...field.children].length >= 3) {
        removeRow.removeAttribute('disabled');
      };
      break;
    case removeRow:
      [...field.children][0].remove();

      if ([...field.children].length <= 9) {
        appendRow.removeAttribute('disabled');
      };

      if ([...field.children].length < 3) {
        removeRow.setAttribute('disabled', '');
      };
      break;
    case appendColumn:
      [...field.children].forEach(items => {
        items.append([...field.children][0].children[0].cloneNode(true));

        if ([...items.children].length > 9) {
          appendColumn.setAttribute('disabled', '');
        };

        if ([...items.children].length >= 3) {
          removeColumn.removeAttribute('disabled');
        };
      });
      break;
    case removeColumn:
      [...field.children].forEach(items => {
        [...items.children][0].remove();

        if ([...items.children].length <= 9) {
          appendColumn.removeAttribute('disabled');
        };

        if ([...items.children].length < 3) {
          removeColumn.setAttribute('disabled', '');
        };
      });
      break;
  };
});
