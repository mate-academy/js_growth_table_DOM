'use strict';

const fieldBody = document.querySelector('.field').querySelector('tbody');

let rowsCounter = 4;
let columnsCounter = 4;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function checkDisabledColumns() {
  if (columnsCounter <= 2) {
    removeColumnButton.setAttribute('disabled', '');
  }

  if (columnsCounter > 2) {
    removeColumnButton.removeAttribute('disabled', '');
  }

  if (columnsCounter >= 10) {
    appendColumnButton.setAttribute('disabled', '');
  }

  if (columnsCounter < 10) {
    appendColumnButton.removeAttribute('disabled', '');
  }
}

function checkDisabledRows() {
  if (rowsCounter <= 2) {
    removeRowButton.setAttribute('disabled', '');
  }

  if (rowsCounter > 2) {
    removeRowButton.removeAttribute('disabled', '');
  }

  if (rowsCounter >= 10) {
    appendRowButton.setAttribute('disabled', '');
  }

  if (rowsCounter < 10) {
    appendRowButton.removeAttribute('disabled', '');
  }
}

appendRowButton.addEventListener('click', (e) => {
  if (rowsCounter < 10) {
    rowsCounter++;

    const row = document.createElement('tr');

    for (let i = 0; i < columnsCounter; i++) {
      const col = document.createElement('td');

      row.append(col);
    }

    fieldBody.append(row);
    checkDisabledRows();
  }
});

removeRowButton.addEventListener('click', (e) => {
  if (rowsCounter > 2) {
    fieldBody.lastElementChild.remove();
    rowsCounter--;

    checkDisabledRows();
  }
});

appendColumnButton.addEventListener('click', (e) => {
  if (columnsCounter < 10) {
    columnsCounter++;

    const columns = fieldBody.querySelectorAll('tr');

    for (let i = 0; i < columns.length; i++) {
      const row = document.createElement('td');

      columns[i].append(row);
    }
    checkDisabledColumns();
  }
});

removeColumnButton.addEventListener('click', (e) => {
  if (columnsCounter > 2) {
    columnsCounter--;

    const columns = fieldBody.querySelectorAll('tr');

    for (let i = 0; i < columns.length; i++) {
      columns[i].lastElementChild.remove();
    }
    checkDisabledColumns();
  }
});
