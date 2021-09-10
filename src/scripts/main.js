'use strict';

// write code here
const container = document.querySelector('.container');

const tableBody = container.querySelector('tbody');

const tableItems = tableBody.rows;

const appendRowButton = document.querySelector('.append-row');

const appendColumnButton = document.querySelector('.append-column');

const removeRowButton = document.querySelector('.remove-row');

const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const buttonName = e.target.classList[0];

  switch (buttonName) {
    case 'append-row':
      tableBody.append(tableItems[0].cloneNode(true));
      break;

    case 'remove-row':
      tableBody.lastElementChild.remove();
      break;

    case 'append-column':
      for (const row of tableItems) {
        const copy = row.lastElementChild.cloneNode(true);

        row.append(copy);
      }
      break;

    case 'remove-column':
      for (const row of tableItems) {
        row.lastElementChild.remove();
      }
  }

  appendColumnButton.disabled = tableItems[0].children.length >= 10;

  removeColumnButton.disabled = tableItems[0].children.length <= 2;

  appendRowButton.disabled = tableItems.length >= 10;

  removeRowButton.disabled = tableItems.length <= 2;
});
