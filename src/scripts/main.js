'use strict';

const table = document.querySelector('table');
const tableBody = document.createElement('tbody');

table.innerHTML = '';
table.append(tableBody);

const tbody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tableSize = {
  width: 4,
  height: 4,
};

const buttonsState = {
  appendRowButton: true,
  removeRowButton: true,
  appendColumnButton: true,
  removeColumnButton: true,
};

appendRow.addEventListener('click', () => {
  if (!buttonsState.appendRowButton) {
    return;
  }

  tableSize.height++;

  const trClone = tbody.lastElementChild.cloneNode(true);

  tbody.append(trClone);

  if (!buttonsState.removeRowButton) {
    buttonsState.removeRowButton = true;
    removeRow.disabled = false;
  }

  if (tableSize.height >= 10) {
    appendRow.disabled = true;
    buttonsState.appendRowButton = false;
  }
});

removeRow.addEventListener('click', () => {
  if (!buttonsState.removeRowButton) {
    return;
  }

  tableSize.height--;

  const trLast = tbody.lastElementChild;

  if (trLast) {
    tbody.removeChild(trLast);
  }

  if (!buttonsState.appendRowButton) {
    buttonsState.appendRowButton = true;
    appendRow.disabled = false;
  }

  if (tableSize.height <= 2) {
    removeRow.disabled = true;
    buttonsState.removeRowButton = false;
  }
});

appendColumn.addEventListener('click', () => {
  if (!buttonsState.appendColumnButton) {
    return;
  }

  tableSize.width++;

  [...tbody.children].forEach((child) => {
    const td = document.createElement('td');

    child.append(td);
  });

  if (!buttonsState.removeColumnButton) {
    buttonsState.removeColumnButton = true;
    removeColumn.disabled = false;
  }

  if (tableSize.width >= 10) {
    appendColumn.disabled = true;
    buttonsState.appendColumnButton = false;
  }
});

removeColumn.addEventListener('click', () => {
  if (!buttonsState.removeColumnButton) {
    return;
  }

  tableSize.width--;

  [...tbody.children].forEach((child) => {
    const tdLast = child.lastElementChild;

    if (tdLast) {
      child.removeChild(tdLast);
    }
  });

  if (!buttonsState.appendColumnButton) {
    buttonsState.appendColumnButton = true;
    appendColumn.disabled = false;
  }

  if (tableSize.width <= 2) {
    removeColumn.disabled = true;
    buttonsState.removeColumnButton = false;
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
