'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field').children[0];

appendRow.addEventListener('click', () => {
  const element = [...field.children].find(item => item);

  field.append(element.cloneNode(true));

  if ([...field.children].length > 9) {
    appendRow.setAttribute('disabled', '');
  };

  if ([...field.children].length >= 3) {
    removeRow.removeAttribute('disabled');
  };
});

removeRow.addEventListener('click', () => {
  const element = [...field.children].find(item => item);

  element.remove();

  if ([...field.children].length <= 9) {
    appendRow.removeAttribute('disabled');
  };

  if ([...field.children].length < 3) {
    removeRow.setAttribute('disabled', '');
  };
});

appendColumn.addEventListener('click', () => {
  const elements = [...field.children];

  elements.forEach(items => {
    const element = [...items.children].find(item => item);

    items.append(element.cloneNode(true));

    if ([...items.children].length > 9) {
      appendColumn.setAttribute('disabled', '');
    };

    if ([...items.children].length >= 3) {
      removeColumn.removeAttribute('disabled');
    };
  });
});

removeColumn.addEventListener('click', () => {
  const elements = [...field.children];

  elements.forEach(items => {
    const element = [...items.children].find(item => item);

    element.remove();

    if ([...items.children].length <= 9) {
      appendColumn.removeAttribute('disabled');
    };

    if ([...items.children].length < 3) {
      removeColumn.setAttribute('disabled', '');
    };
  });
});
