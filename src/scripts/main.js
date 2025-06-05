'use strict';

// #region buttons
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const removeRowButton = document.querySelector('.remove-row');
// #endregion
// #region values
const tbody = document.querySelector('tbody');
let columCount = 4;
let rowsCount = 4;
const max = 10;
const min = 2;

function newButonsRull() {
  appendColumnButton.disabled = columCount >= max;
  appendRowButton.disabled = rowsCount >= max;
  removeColumnButton.disabled = columCount <= min;
  removeRowButton.disabled = rowsCount <= min;
}

// #endregion
// #region add buttons
appendRowButton.addEventListener('click', () => {
  if (rowsCount >= max) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }
  tbody.appendChild(newRow);
  rowsCount++;
  newButonsRull();
});

appendColumnButton.addEventListener('click', () => {
  if (columCount >= max) {
    return;
  }

  for (const row of tbody.children) {
    row.appendChild(document.createElement('td'));
  }
  columCount++;
  newButonsRull();
});

// #endregion
// #region remove buttons
removeRowButton.addEventListener('click', () => {
  if (rowsCount <= min) {
    return;
  }

  tbody.removeChild(tbody.lastElementChild);
  rowsCount--;
  newButonsRull();
});

removeColumnButton.addEventListener('click', () => {
  if (columCount <= min) {
    return;
  }

  if (tbody.children.length === 0) {
    columCount--;
    newButonsRull();

    return;
  }

  for (const row of tbody.children) {
    row.removeChild(row.lastElementChild);
  }
  columCount--;
  newButonsRull();
});
// #endregion
