'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  if (!e.target.classList.contains('button')) {
    return;
  };

  const table = document.querySelector('.field');
  const rows = document.querySelectorAll('tr');
  const addRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const addColButton = document.querySelector('.append-column');
  const removeColButton = document.querySelector('.remove-column');

  let rowLength = rows.length;
  let colHeight = rows[0].children.length;

  const rowMax = 9;
  const rowMin = 3;
  const colMax = 9;
  const colMin = 3;

  function addRow () {
    const clone = rows[0].cloneNode(true);

    table.firstElementChild.append(clone);
    rowLength++;
  };

  function removeRow() {
    table.firstElementChild.lastElementChild.remove();
    rowLength--;
  };

  function addCol() {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertAdjacentHTML('afterbegin', '<td></td>');
    }
    colHeight++;
  };

  function removeCol() {
    for (let i = 0; i < rows.length; i++) {
      rows[i].lastElementChild.remove();
    }
    colHeight--;
  }

  switch (e.target.classList[0]) {
    case 'append-row':
      addRow();
      break;

    case 'remove-row':
      removeRow();
      break;

    case 'append-column':
      addCol();
      break;

    case 'remove-column':
      removeCol();
      break;
  };

  addRowButton.disabled = rowLength > rowMax;
  removeRowButton.disabled = rowLength < rowMin;
  addColButton.disabled = colHeight > colMax;
  removeColButton.disabled = colHeight < colMin;
})
