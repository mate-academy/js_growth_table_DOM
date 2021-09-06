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

      return setDisabledButton();

    case removeRowButton:
      removeRow();

      return setDisabledButton();

    case appendColumnButton:
      addColumn();

      return setDisabledButton();

    case removeColumnButton:
      removeColumn();

      return setDisabledButton();
  }
});

function setDisabledButton() {
  appendRowButton.disabled = false;
  appendRowButton.disabled = rows.length >= 10;

  removeRowButton.disabled = false;
  removeRowButton.disabled = rows.length <= 2;

  appendColumnButton.disabled = false;
  appendColumnButton.disabled = columns.length >= 10;

  removeColumnButton.disabled = false;
  removeColumnButton.disabled = columns.length <= 2;
}
