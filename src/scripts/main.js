'use strict';

const table = document.querySelector('table');
const tableBody = document.createElement('tbody');
table.innerHTML = '';
table.append(tableBody);

const tbody = document.querySelector('tbody');

const apppendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tableSize = {
  width: 4,
  height: 4,
};

const buttonsState = {
  apppendRowButton: 'enabled',
  removeRowButton: 'enabled',
  appendColumnButton: 'enabled',
  removeColumnButton: 'enabled',
};

apppendRow.addEventListener('click', () => {
  if (buttonsState.apppendRowButton === 'disabled') {
    return;
  }

  tableSize.height++;

  const trClone = tbody.lastElementChild.cloneNode(true);

  tbody.append(trClone);

  if (buttonsState.removeRowButton === 'disabled') {
    buttonsState.removeRowButton = 'enabled';
    removeRow.disabled = false;
  }

  if (tableSize.height >= 10) {
    apppendRow.disabled = true;
    buttonsState.apppendRowButton = 'disabled';
  }
});

removeRow.addEventListener('click', () => {
  if (buttonsState.removeRowButton === 'disabled') {
    return;
  }

  tableSize.height--;

  const trLast = tbody.lastElementChild;

  if (trLast) {
    tbody.removeChild(trLast);
  }

  if (buttonsState.apppendRowButton === 'disabled') {
    buttonsState.apppendRowButton = 'enabled';
    apppendRow.disabled = false;
  }

  if (tableSize.height <= 2) {
    removeRow.disabled = true;
    buttonsState.removeRowButton = 'disabled';
  }
});

appendColumn.addEventListener('click', () => {
  if (buttonsState.appendColumnButton === 'disabled') {
    return;
  }

  tableSize.width++;

  [...tbody.children].forEach((child) => {
    const td = document.createElement('td');

    child.append(td);
  });

  if (buttonsState.removeColumnButton === 'disabled') {
    buttonsState.removeColumnButton = 'enabled';
    removeColumn.disabled = false;
  }

  if (tableSize.width >= 10) {
    appendColumn.disabled = true;
    buttonsState.appendColumnButton = 'disabled';
  }
});

removeColumn.addEventListener('click', () => {
  if (buttonsState.removeColumnButton === 'disabled') {
    return;
  }

  tableSize.width--;

  [...tbody.children].forEach((child) => {
    const tdLast = child.lastElementChild;

    if (tdLast) {
      child.removeChild(tdLast);
    }
  });

  if (buttonsState.appendColumnButton === 'disabled') {
    buttonsState.appendColumnButton = 'enabled';
    appendColumn.disabled = false;
  }

  if (tableSize.width <= 2) {
    removeColumn.disabled = true;
    buttonsState.removeColumnButton = 'disabled';
  }
});

// in case we need to rerender the table
// eslint-disable-next-line
function render() {
  tbody.innerHTML = '';

  for (let i = 0; i < tableSize.height; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < tableSize.width; j++) {
      const td = document.createElement('td');

      tr.append(td);
    }

    tbody.append(tr);
  }
}

render();