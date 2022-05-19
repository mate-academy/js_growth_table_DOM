'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');

container.addEventListener('click', (e) => action(e));

function action(e) {
  const typeActionButton = e.target.closest('button');
  const list = tbody.querySelectorAll('tr');

  if (!typeActionButton) {
    return;
  }

  if (typeActionButton.matches('.append-row')) {
    const tr = document.createElement('tr');
    const trLength = tbody.lastElementChild.querySelectorAll('td').length;

    for (let i = 0; i < trLength; i++) {
      const td = document.createElement('td');

      tr.insertAdjacentElement('beforeend', td);
    }

    tbody.insertAdjacentElement('beforeend', tr);
  };

  if (typeActionButton.matches('.remove-row')) {
    tbody.lastElementChild.remove();
  };

  if (typeActionButton.matches('.append-column')) {
    const td = document.createElement('td');

    list.forEach(el => el.append(td.cloneNode()));
  };

  if (typeActionButton.matches('.remove-column')) {
    list.forEach(el => el.lastElementChild.remove());
  };

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

  if (columnLength >= 10) {
    addRowButton.disabled = 'true';
  }

  if (columnLength <= 2) {
    removeRowButton.disabled = 'true';
  }

  if (rowLength >= 10) {
    addColumnButton.disabled = 'true';
  }

  if (rowLength <= 2) {
    removeColumnButton.disabled = 'true';
  }
}
