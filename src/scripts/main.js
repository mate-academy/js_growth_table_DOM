'use strict';

const MAX_COLUMNS = 10;
const MIN_ROWS = 2;

const element = {
  add: (item) =>
    item.children.length < 10 &&
    item.appendChild(item.lastElementChild.cloneNode(true)),
  remove: (item) => item.lastElementChild.remove(),
  set: (add, item) => (add ? element.add(item) : element.remove(item)),
};

const isButton = (lengths, item) => {
  const remove = item.className.includes('remove');
  const append = item.className.includes('append');

  switch (true) {
    case lengths >= MAX_COLUMNS && append:
      item.disabled = true;
      break;

    case lengths === MIN_ROWS && remove:
      item.disabled = true;
      break;

    default:
      item.disabled = false;
  }
};

const container = document.querySelector('.container');
const table = document.querySelector('tbody');

container.onclick = (e) => {
  const button = e.target.className;
  const add = button.includes('append');

  if (button.includes('column')) {
    [...table.children].forEach((tr) => element.set(add, tr));

    const lengthColumn = table.lastElementChild.children.length;

    container
      .querySelectorAll('.append-column, .remove-column')
      .forEach((buttonForOption) => isButton(lengthColumn, buttonForOption));
  } else if (button.includes('row')) {
    element.set(add, table);

    const lengthRow = table.children.length;

    container
      .querySelectorAll('.append-row, .remove-row')
      .forEach((buttonForOption) => isButton(lengthRow, buttonForOption));
  }
};
