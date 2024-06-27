'use strict';

const field = document.querySelector('.field');

document.addEventListener('click', function (e) {
  const button = e.target.closest('.button');
  const minLimit = 2;
  const maxLimit = 10;
  const lastRow = field.firstElementChild.lastElementChild;

  if (!button) {
    return;
  }

  switch (true) {
    case button.matches('.append-row'):
      if (field.rows.length < maxLimit) {
        field.firstElementChild.append(lastRow.cloneNode(true));
        button.nextElementSibling.removeAttribute('disabled', '');
      }

      if (field.rows.length === maxLimit) {
        button.setAttribute('disabled', '');
      }

      break;

    case button.matches('.remove-row'):
      if (field.rows.length > minLimit) {
        lastRow.remove();
        button.previousElementSibling.removeAttribute('disabled', '');
      }

      if (field.rows.length === minLimit) {
        button.setAttribute('disabled', '');
      }

      break;

    case button.matches('.append-column'):
      for (const row of field.rows) {
        if (row.cells.length < maxLimit) {
          row.append(row.lastElementChild.cloneNode(true));
          button.nextElementSibling.removeAttribute('disabled', '');
        }

        if (row.cells.length === maxLimit) {
          button.setAttribute('disabled', '');
        }
      }
      break;

    case button.matches('.remove-column'):
      for (const row of field.rows) {
        if (row.cells.length > minLimit) {
          row.lastElementChild.remove();
          button.previousElementSibling.removeAttribute('disabled', '');
        }

        if (row.cells.length === minLimit) {
          button.setAttribute('disabled', '');
        }
      }
      break;

    default:
      return 0;
  }
});
