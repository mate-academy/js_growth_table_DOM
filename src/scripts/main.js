'use strict';

const buttons = document.querySelectorAll('button');

const table = document.querySelector('tbody');

buttons[0].addEventListener('click', (event) => {
  const row = table.children[0].cloneNode(true);

  table.append(row);
  setAttribute(10, table.children, event.target);
  removeAttribute(buttons[1]);
});

buttons[1].addEventListener('click', (event) => {
  table.children[table.children.length - 1].remove();
  setAttribute(2, table.children, event.target);
  removeAttribute(buttons[0]);
});

buttons[2].addEventListener('click', (event) => {
  for (const cell of table.children) {
    const newCell = cell.children[0].cloneNode(true);

    cell.append(newCell);
  };

  setAttribute(10, table.children[0].children, event.target);
  removeAttribute(buttons[3]);
});

buttons[3].addEventListener('click', (event) => {
  for (const cell of table.children) {
    cell.children[cell.children.length - 1].remove();
  };

  setAttribute(2, table.children[0].children, event.target);
  removeAttribute(buttons[2]);
});

function setAttribute(value, element, button) {
  if (element.length === value) {
    button.setAttribute('disabled', 'disabled');
  };
}

function removeAttribute(button) {
  if (button.hasAttribute('disabled')) {
    button.removeAttribute('disabled');
  };
}
