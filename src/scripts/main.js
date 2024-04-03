'use strict';

const MAX_SIZE = 10;
const MIN_SIZE = 2;

function refreshButtons(size, appendButton, removeButton) {
  if (size >= MAX_SIZE) {
    appendButton.disabled = true;
  } else if (size <= MIN_SIZE) {
    removeButton.disabled = true;
  } else {
    appendButton.disabled = false;
    removeButton.disabled = false;
  }
}

function resizeTable(tableEvent) {
  const buttonClass = tableEvent.target.className.replace('button', '').trim();

  switch (buttonClass) {
    case 'append-row':
      tBody.append(tBody.lastElementChild.cloneNode(true));
      break;

    case 'remove-row':
      tBody.lastElementChild.remove();
      break;

    case 'append-column':
      for (const row of tBody.children) {
        row.append(row.lastElementChild.cloneNode());
      }
      break;

    case 'remove-column':
      for (const row of tBody.children) {
        row.lastElementChild.remove();
      }
  }

  refreshButtons(tBody.children.length, appendRow, removeRow);

  refreshButtons(
    tBody.lastElementChild.children.length,
    appendColumn,
    removeColumn,
  );
}

const tBody = document.querySelector('tbody');
const buttons = document.querySelectorAll('.button');
const [appendRow, removeRow, appendColumn, removeColumn] = buttons;

buttons.forEach((button) => {
  button.addEventListener('click', resizeTable);
});
