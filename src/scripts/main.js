'use strict';

const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

appendRowButton.addEventListener('click', (e) => {
  const row = field.rows[0].cloneNode(true);

  field.firstElementChild.appendChild(row);

  if (field.rows.length >= 10) {
    appendRowButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows.length === 3) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', (e) => {
  field.rows[0].outerHTML = '';

  if (field.rows.length <= 2) {
    removeRowButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows.length === 9) {
    appendRowButton.removeAttribute('disabled');
  }
});
