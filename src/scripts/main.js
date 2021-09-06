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
  const item = e.target;

  if (item.classList.contains('append-row') && tableItems.length < 10) {
    tableBody.append(tableItems[0].cloneNode(true));
    removeRowButton.disabled = false;
  } else if (item.classList.contains('remove-row') && tableItems.length > 2) {
    tableBody.lastElementChild.remove();
    appendRowButton.disabled = false;
  } else if (item.classList.contains('append-column')
  && tableItems[0].children.length < 10) {
    for (const row of tableItems) {
      const copy = row.lastElementChild.cloneNode(true);

      row.append(copy);
    }
    removeColumnButton.disabled = false;
  } else if (item.classList.contains('append-column')
  && tableItems[0].children.length < 10) {
    for (const row of tableItems) {
      row.lastElementChild.remove();
    }
    appendColumnButton.disabled = false;
  } else if (item.classList.contains('remove-column')
  && tableItems[0].children.length > 2) {
    for (const row of tableItems) {
      row.lastElementChild.remove();
    }
    appendColumnButton.disabled = false;
  } else {
    item.setAttribute('disabled', '');
  }
});
