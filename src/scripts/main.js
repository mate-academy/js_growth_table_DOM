'use strict';

const tbody = document.querySelector('tbody');

const container = document.querySelector('.container');

const appendRowButton = document.querySelector('.append-row');

const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');

const removeColumnButton = document.querySelector('.remove-column');

const rows = tbody.getElementsByTagName('tr');
const columns = rows[0].getElementsByTagName('td');

function addRow() {
  const row = tbody.querySelector('tr').cloneNode(true);

  tbody.append(row);
}

function removeRow() {
  tbody.lastElementChild.remove();
}

function addColumn() {
  for (const tr of rows) {
    const td = document.createElement('td');

    tr.append(td);
  }
}

function removeColumn() {
  for (const tr of rows) {
    tr.lastElementChild.remove();
  }
}

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  switch (e.target) {
    case appendRowButton:
      addRow();
      break;

    case removeRowButton:
      removeRow();
      break;

    case appendColumnButton:
      addColumn();
      break;

    case removeColumnButton:
      removeColumn();
      break;
  }

  if (rows.length >= 10) {
    appendRowButton.setAttribute('disabled', 'disabled');

    return;
  }

  if (removeRowButton.hasAttribute('disabled')) {
    removeRowButton.removeAttribute('disabled');
  }

  if (rows.length <= 2) {
    removeRowButton.setAttribute('disabled', 'disabled');
  }

  if (appendRowButton.hasAttribute('disabled')) {
    appendRowButton.removeAttribute('disabled');
  }

  if (removeColumnButton.hasAttribute('disabled')) {
    removeColumnButton.removeAttribute('disabled');
  }

  if (columns.length >= 10) {
    appendColumnButton.setAttribute('disabled', 'disabled');

    return;
  }

  if (appendColumnButton.hasAttribute('disabled')) {
    appendColumnButton.removeAttribute('disabled');
  }

  if (columns.length <= 2) {
    removeColumnButton.setAttribute('disabled', 'disabled');
  }
});
