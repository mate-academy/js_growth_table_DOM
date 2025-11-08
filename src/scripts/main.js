'use strict';

const maxCount = 10;
const minCount = 2;
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const button = e.target.closest('button');
  const className = button.className
    .split(' ')
    .find((str) => str.includes('-'));

  const disabledButton = (colection, count) => {
    if (colection.length === count) {
      e.target.setAttribute('disabled', true);
    }
  };

  const enabledButton = (buttonEl) => {
    if (buttonEl.hasAttribute('disabled')) {
      buttonEl.removeAttribute('disabled');
    }
  };

  const addRow = (parentEl) => {
    if (e.target.hasAttribute('disabled')) {
      return;
    }

    const cloneTRow = parentEl.querySelector('tr').cloneNode(true);
    const tBody = parentEl.querySelector('tbody');

    tBody.insertAdjacentElement('beforeend', cloneTRow);

    const clollectionRow = parentEl.querySelectorAll('tr');

    const removeRowButton = parentEl.querySelector('.remove-row');

    enabledButton(removeRowButton);

    disabledButton(clollectionRow, maxCount);
  };

  const removeRow = (parentEl) => {
    const clollectionRow = parentEl.querySelectorAll('tr');
    const rowArr = Array.from(clollectionRow);
    const addRowbutton = document.querySelector('.append-row');

    rowArr.at(-1).remove();
    rowArr.pop();

    disabledButton(rowArr, minCount);
    enabledButton(addRowbutton);
  };

  const addColumn = (parentEl) => {
    if (e.target.hasAttribute('disabled')) {
      return;
    }

    const clollectionRow = parentEl.querySelectorAll('tr');

    clollectionRow.forEach((row, i) => {
      const cloneTdCell = parentEl.querySelector('td').cloneNode();

      row.insertAdjacentElement('beforeend', cloneTdCell);
    });

    const collectionTdFromOnRow = clollectionRow[0].querySelectorAll('td');
    const aremoveColumnButton = document.querySelector('.remove-column');

    disabledButton(collectionTdFromOnRow, maxCount);
    enabledButton(aremoveColumnButton);
  };

  const removeColumn = (parentEl) => {
    const clollectionRow = parentEl.querySelectorAll('tr');

    clollectionRow.forEach((row, i) => {
      const tdArr = Array.from(row.querySelectorAll('td'));

      tdArr.at(-1).remove();
      tdArr.pop();

      if (i === clollectionRow.length - 1) {
        disabledButton(tdArr, minCount);
      }
    });

    const addColumnButton = document.querySelector('.append-column');

    enabledButton(addColumnButton);
  };

  switch (className) {
    case 'append-row':
      addRow(container);
      break;
    case 'remove-row':
      removeRow(container);
      break;
    case 'append-column':
      addColumn(container);
      break;
    case 'remove-column':
      removeColumn(container);
      break;
    default:
      throw new Error('Incorrect button class');
  }
});
