'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');

container.addEventListener('click', e => {
  let onClick;

  if (e.target.closest('.append-row')) {
    onClick = 'append-row';
  } else if (e.target.closest('.remove-row')) {
    onClick = 'remove-row';
  } else if (e.target.closest('.append-column')) {
    onClick = 'append-column';
  } else if (e.target.closest('.remove-column')) {
    onClick = 'remove-column';
  } else {
    return;
  }

  getGrowthTable(onClick);
  getCheckedButton();
});

function getGrowthTable(action) {
  const rowsArray = [...table.rows];

  switch (action) {
    case 'append-row':
      const copyRows = rowsArray[rowsArray.length - 1].cloneNode(true);

      table.insertAdjacentElement('beforeend', copyRows);
      break;
    case 'remove-row':
      rowsArray[rowsArray.length - 1].remove();
      break;
    case 'append-column':
      rowsArray.map(row => row.insertAdjacentHTML('beforeend', '<td></td>'));
      break;
    case 'remove-column':
      rowsArray.map(row => row.lastChild.remove());
      break;
  }
}

function getCheckedButton() {
  const rowsArray = [...table.rows];
  const buttonAppendRow = container.querySelector('.append-row');
  const buttonRemoveRow = container.querySelector('.remove-row');
  const buttonAppendColumn = container.querySelector('.append-column');
  const buttonRemoveColumn = container.querySelector('.remove-column');

  buttonAppendRow.toggleAttribute('disabled',
    rowsArray.length === 10);

  buttonRemoveRow.toggleAttribute('disabled',
    rowsArray.length === 2);

  buttonAppendColumn.toggleAttribute('disabled',
    rowsArray[0].cells.length === 10);

  buttonRemoveColumn.toggleAttribute('disabled',
    rowsArray[0].cells.length === 2);
}
