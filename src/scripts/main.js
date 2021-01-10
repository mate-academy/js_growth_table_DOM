'use strict';

const tbody = document.querySelector('tbody');
const cell = document.querySelector('td');

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

addRowButton.onclick = () => {
  if (removeRowButton.disabled) {
    removeRowButton.disabled = false;
  }

  if (tbody.rows.length < maxCount) {
    tbody.append(tbody.rows[0].cloneNode(true));

    if (tbody.rows.length === maxCount) {
      addRowButton.disabled = true;
    }
  }
};

removeRowButton.onclick = () => {
  if (addRowButton.disabled) {
    addRowButton.disabled = false;
  }

  if (tbody.rows.length > minCount) {
    tbody.rows[0].remove();

    if (tbody.rows.length === minCount) {
      removeRowButton.setAttribute('disabled', 'true');
    }
  }
};

addColumnButton.onclick = () => {
  for (const row of tbody.rows) {
    if (removeColumnButton.disabled) {
      removeColumnButton.disabled = false;
    }

    if (row.children.length < maxCount) {
      row.append(cell.cloneNode(true));

      if (row.children.length === maxCount) {
        addColumnButton.setAttribute('disabled', 'true');
      }
    }
  }
};

removeColumnButton.onclick = () => {
  for (const row of tbody.rows) {
    if (addColumnButton.disabled) {
      addColumnButton.disabled = false;
    }

    if (row.children.length > minCount) {
      row.children[0].remove();

      if (row.children.length === minCount) {
        removeColumnButton.setAttribute('disabled', 'true');
      }
    }
  }
};
