'use strict';

const appendRowButton = document.querySelector('.append-row');
const removedRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removedColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

const max = 10;
const min = 2;
const getRows = () => table.children.length;
const getColumns = () => table.children[0].children.length;

function updateState() {
  appendRowButton.disabled = getRows() >= max;
  appendColumnButton.disabled = getColumns() >= max;

  removedRowButton.disabled = getRows() <= min;
  removedColumnButton.disabled = getColumns() <= min;
}

appendRowButton.addEventListener('click', () => {
  if (getRows() >= max) {
    return;
  }

  const cloneNode = table.lastElementChild.cloneNode(true);

  table.append(cloneNode);
  updateState();
});

removedRowButton.addEventListener('click', () => {
  if (getRows() <= min) {
    return;
  }

  table.lastElementChild.remove();

  updateState();
});

appendColumnButton.addEventListener('click', () => {
  if (getColumns() >= max) {
    return;
  }

  Array.from(table.children).forEach((el) => {
    const cloneNode = el.lastElementChild.cloneNode(true);

    el.append(cloneNode);
  });

  updateState();
});

removedColumnButton.addEventListener('click', () => {
  if (getColumns() <= min) {
    return;
  }

  Array.from(table.children).forEach((el) => {
    el.lastElementChild.remove();
  });

  updateState();
});
