'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');

container.addEventListener('click', (e) => action(e));

function action(e) {
  const list = tbody.querySelectorAll('tr');

  if (!e.target.closest('button')) {
    return;
  }

  switch (e.target) {
    case container.querySelector('.append-row'):
      const tr = document.createElement('tr');
      const trLength = tbody.lastElementChild.querySelectorAll('td').length;

      for (let i = 0; i < trLength; i++) {
        tr.insertAdjacentElement('beforeend', document.createElement('td'));
      }

      tbody.insertAdjacentElement('beforeend', tr);
      break;

    case container.querySelector('.remove-row'):
      tbody.lastElementChild.remove();
      break;

    case container.querySelector('.append-column'):
      const td = document.createElement('td');

      list.forEach(el => el.append(td.cloneNode()));
      break;

    case container.querySelector('.remove-column'):
      list.forEach(el => el.lastElementChild.remove());
      break;
  }

  buttonDisabler();
}

function buttonDisabler() {
  const columnLength = tbody.querySelectorAll('tr').length;
  const rowLength = tbody.firstElementChild.querySelectorAll('td').length;

  const addRowButton = container.querySelector('.append-row');
  const removeRowButton = container.querySelector('.remove-row');
  const addColumnButton = container.querySelector('.append-column');
  const removeColumnButton = container.querySelector('.remove-column');

  addRowButton.disabled = '';
  removeRowButton.disabled = '';
  addColumnButton.disabled = '';
  removeColumnButton.disabled = '';

  addRowButton.disabled = columnLength >= 10;
  removeRowButton.disabled = columnLength <= 2;
  addColumnButton.disabled = rowLength >= 10;
  removeColumnButton.disabled = rowLength <= 2;
}
