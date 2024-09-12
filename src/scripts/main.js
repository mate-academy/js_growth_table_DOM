'use strict';

const buttonContainer = document.querySelector('.container');
const maxRow = 10;
const minRow = 2;
const maxColumn = 10;
const minColumn = 2;
const removeRowButton = buttonContainer.querySelector('.remove-row');
const addRowButton = buttonContainer.querySelector('.append-row');
const removeColBut = buttonContainer.querySelector('.remove-column');
const addColButton = buttonContainer.querySelector('.append-column');

buttonContainer.addEventListener('click', (e) => {
  const { target } = e;
  const tbody = document.querySelector('.field tbody');
  const className = target.className.slice(0, -7);

  switch (className) {
    case 'append-row':
      if (tbody.children.length >= maxRow) {
        break;
      }

      const newRow = tbody.lastElementChild.cloneNode(true);

      tbody.append(newRow);

      if (tbody.children.length >= maxRow) {
        target.setAttribute('disabled', true);
      }

      if (tbody.children.length > minRow) {
        removeRowButton.removeAttribute('disabled');
      }
      break;

    case 'remove-row':
      if (tbody.children.length <= minRow) {
        break;
      }

      tbody.lastElementChild.remove();

      if (tbody.children.length <= minRow) {
        target.setAttribute('disabled', true);
      }

      if (tbody.children.length < maxRow) {
        addRowButton.removeAttribute('disabled');
      }
      break;

    case 'append-column':
      if (tbody.firstElementChild.children.length >= maxColumn) {
        break;
      }

      const allCollection = tbody.children;

      [...allCollection].forEach(tr => {
        const newCeil = tr.lastElementChild.cloneNode(true);

        tr.append(newCeil);
      });

      if (tbody.firstElementChild.children.length >= maxColumn) {
        target.setAttribute('disabled', true);
      }

      if (tbody.firstElementChild.children.length > minColumn) {
        removeColBut.removeAttribute('disabled');
      }
      break;

    case 'remove-column':
      if (tbody.firstElementChild.children.length <= minColumn) {
        break;
      }

      [...tbody.children].forEach(tr => {
        tr.lastElementChild.remove();
      });

      if (tbody.firstElementChild.children.length <= minColumn) {
        target.setAttribute('disabled', true);
      }

      if (tbody.firstElementChild.children.length < maxColumn) {
        addColButton.removeAttribute('disabled');
      }
      break;

    default:
      throw new SyntaxError('Default!');
  }
});
