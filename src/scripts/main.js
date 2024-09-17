'use strict';

const appendRowPlus = document.querySelector('.append-row');
const appendColumPlus = document.querySelector('.append-column');
const removeColum = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const tbody = document.querySelector('tbody');

document.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const trRow = document.querySelectorAll('tr');
    const tdsInRow = trRow[0].querySelectorAll('td').length;

    if (tdsInRow === 3) {
      removeColum.setAttribute('disabled', true);
    }

    if (tdsInRow === 9) {
      appendColumPlus.setAttribute('disabled', true);
    }

    if (trRow.length === 9) {
      appendRowPlus.setAttribute('disabled', true);
    }

    if (trRow.length === 3) {
      removeRow.setAttribute('disabled', true);
    }

    switch (e.target.classList[0]) {
      case 'append-row':
        removeRow.removeAttribute('disabled');
        tbody.append(trRow[trRow.length - 1].cloneNode(true));
        break;

      case 'remove-row':
        appendRowPlus.removeAttribute('disabled');
        trRow[0].remove();
        break;

      case 'append-column':
        removeColum.removeAttribute('disabled');

        trRow.forEach(el => {
          const td = document.createElement('td');

          el.append(td);
        });
        break;

      case 'remove-column':
        appendColumPlus.removeAttribute('disabled');

        trRow.forEach(el => {
          const td = el.querySelector('td');

          td.remove();
        });
        break;
    }
  }
});
