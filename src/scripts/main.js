'use strict';

// write code here
const container = document.querySelector('.container');
const table = document.querySelector('tbody');
const rowsCount = table.rows;
const columnsCount = table.rows[0].cells;
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function addRow() {
  const count = [...table.rows[0].cells];
  const tr = document.createElement('tr');

  count.forEach(c => {
    const td = document.createElement('td');

    tr.append(td);
    table.append(tr);
  });
}

function addColumn() {
  const count = [...table.rows];

  count.forEach(row => {
    const td = document.createElement('td');

    row.append(td);
  });
}

function removeRow() {
  table.lastElementChild.remove();
}

function removeColumn() {
  const count = [...table.rows];

  count.forEach(row => {
    const lastElement = row.lastElementChild;

    return lastElement.remove();
  });
}

function addRemove(buttonClass, button) {
  switch (buttonClass) {
    case 'append-row':
      addRow();

      rowsCount.length >= 10
        ? button.setAttribute('disabled', '')
        : removeRowBtn.disabled = false;
      break;
    case 'remove-row':
      removeRow();

      rowsCount.length <= 2
        ? button.setAttribute('disabled', '')
        : appendRowBtn.disabled = false;
      break;
    case 'append-column':
      addColumn();

      columnsCount.length >= 10
        ? button.setAttribute('disabled', '')
        : removeColumnBtn.disabled = false;
      break;
    case 'remove-column':
      removeColumn();

      columnsCount.length <= 2
        ? button.setAttribute('disabled', '')
        : appendColumnBtn.disabled = false;
      break;
  }
}

container.addEventListener('click', e => {
  const button = e.target;
  const noButtonClass = button.classList.value.replace(' button', '');

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  addRemove(noButtonClass, button);
});
