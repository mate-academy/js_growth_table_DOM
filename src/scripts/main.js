'use strict';

const tbody = document.querySelector('tbody');

const buttons = document.querySelectorAll('button');

const appendRowButton = document.querySelector('.append-row');

const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');

const removeColumnButton = document.querySelector('.remove-column');

const rows = tbody.getElementsByTagName('tr');
const columns = rows[0].getElementsByTagName('td');

function addRow() {
  const row = tbody.querySelector('tr').cloneNode(true);

  tbody.append(row);

  if (rows.length >= 10) {
    appendRowButton.setAttribute('disabled', 'disabled');
  }

  if (removeRowButton.hasAttribute('disabled')) {
    removeRowButton.removeAttribute('disabled');
  }
}

function removeRow() {
  tbody.lastElementChild.remove();

  if (rows.length <= 2) {
    removeRowButton.setAttribute('disabled', 'disabled');
  }

  if (appendRowButton.hasAttribute('disabled')) {
    appendRowButton.removeAttribute('disabled');
  }
}

function addColumn() {
  for (const tr of rows) {
    const td = document.createElement('td');

    tr.append(td);
  }

  if (removeColumnButton.hasAttribute('disabled')) {
    removeColumnButton.removeAttribute('disabled');
  }

  if (columns.length >= 10) {
    appendColumnButton.setAttribute('disabled', 'disabled');
  }
}

function removeColumn() {
  for (const tr of rows) {
    tr.lastElementChild.remove();
  }

  if (appendColumnButton.hasAttribute('disabled')) {
    appendColumnButton.removeAttribute('disabled');
  }

  if (columns.length <= 2) {
    removeColumnButton.setAttribute('disabled', 'disabled');
  }
}

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('append-row')) {
      addRow();
    }

    if (e.target.classList.contains('remove-row')) {
      removeRow();
    }

    if (e.target.classList.contains('append-column')) {
      addColumn();
    }

    if (e.target.classList.contains('remove-column')) {
      removeColumn();
    }
  });
}
