'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');

const addRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const addColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');

container.addEventListener('click', (e) => action(e));

function action(e) {
  const list = tbody.querySelectorAll('tr');

  if (!e.target.closest('button')) {
    return;
  }

  switch (e.target) {
    case addRowButton:
      const tr = document.createElement('tr');
      const trLength = tbody.lastElementChild.querySelectorAll('td').length;

      for (let i = 0; i < trLength; i++) {
        tr.insertAdjacentElement('beforeend', document.createElement('td'));
      }

      tbody.insertAdjacentElement('beforeend', tr);
      break;

    case removeRowButton:
      tbody.lastElementChild.remove();
      break;

    case addColumnButton:
      const td = document.createElement('td');

      list.forEach(el => el.append(td.cloneNode()));
      break;

    case removeColumnButton:
      list.forEach(el => el.lastElementChild.remove());
      break;
  }

  processButtonStatuses();
}

function processButtonStatuses() {
  const columnLength = tbody.querySelectorAll('tr').length;
  const rowLength = tbody.firstElementChild.querySelectorAll('td').length;

  addRowButton.disabled = columnLength >= 10;
  removeRowButton.disabled = columnLength <= 2;
  addColumnButton.disabled = rowLength >= 10;
  removeColumnButton.disabled = rowLength <= 2;
}
