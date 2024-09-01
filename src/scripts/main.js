'use strict';

const tBody = document.querySelector('tbody');
const tr = [...tBody.querySelectorAll('tr')];
const button = [...document.querySelectorAll('.button')];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const appendColumn = document.querySelector('.append-column');

button.forEach((el) => {
  el.addEventListener('click', (e) => {
    const clickedButt = e.target.className;

    switch (clickedButt) {
      case 'append-row button': {
        if (tBody.children.length >= 9) {
          e.target.setAttribute('disabled', true);
        }

        if (removeRow) {
          removeRow.disabled = false;
        }

        const clonedRow = tBody.firstChild.cloneNode(true);

        tBody.append(clonedRow);
        break;
      }

      case 'append-column button': {
        if (tr[0].cells.length >= 9) {
          appendColumn.setAttribute('disabled', true);
        }

        if (removeColumn) {
          removeColumn.disabled = false;
        }

        const trUpdated = [...document.querySelectorAll('tr')];

        trUpdated.forEach((element) => {
          const td = document.createElement('td');

          element.append(td);
        });

        break;
      }

      case 'remove-row button': {
        if (tBody.children.length <= 3) {
          removeRow.setAttribute('disabled', true);
        }

        if (appendRow) {
          appendRow.disabled = false;
        }

        tBody.lastElementChild.remove();

        break;
      }

      case 'remove-column button': {
        if (tr[0].cells.length <= 3) {
          removeColumn.setAttribute('disabled', true);
        }

        if (appendColumn) {
          appendColumn.disabled = false;
        }

        const trUpdated = [...document.querySelectorAll('tr')];

        trUpdated.forEach((element) => {
          element.lastElementChild.remove();
        });
        break;
      }
    }
  });
});
