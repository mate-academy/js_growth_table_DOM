'use strict';

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

const tableBody = document.querySelector('table').tBodies[0];
const appendRowBtn = document.querySelector('.append-row');
const removedRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function handleTableAPI(action) {
  switch (action) {
    case 'append-row':
      const newRow = tableBody.firstElementChild.cloneNode(true);

      tableBody.append(newRow);
      break;

    case 'remove-row':
      tableBody.removeChild(tableBody.lastElementChild);
      break;

    case 'append-column':
      for (const row of tableBody.children) {
        const newTableData = document.createElement('td');

        row.appendChild(newTableData);
      }
      break;

    case 'remove-column':
      for (const row of tableBody.children) {
        row.removeChild(row.lastElementChild);
      }
      break;

    default:
      throw new Error('Unknown action');
  }
}

function setCurrentState() {
  const numOfRows = tableBody.childElementCount;
  const numOfColumns = tableBody.firstElementChild.childElementCount;

  appendRowBtn.disabled = numOfRows >= MAX_ROWS;
  removedRowBtn.disabled = numOfRows === MIN_ROWS;

  appendColumnBtn.disabled = numOfColumns >= MAX_COLUMNS;
  removeColumnBtn.disabled = numOfColumns === MIN_COLUMNS;
}

document.body.addEventListener(('click'), (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const button = e.target;

  handleTableAPI(button.classList[0]);
  setCurrentState();
});
