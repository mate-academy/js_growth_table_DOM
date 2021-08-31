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

container.addEventListener('click', (e) => {
  const targetClassList = e.target.classList;

  switch (true) {
    case e.target.classList.contains('append-row'):
      return addRow();

    case targetClassList.contains('remove-row'):
      return removeRow();

    case targetClassList.contains('append-column'):
      return addColumn();

    case targetClassList.contains('remove-column'):
      return removeColumn();
  }
});
