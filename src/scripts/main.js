'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tBody = document.querySelector('tbody');
const min = 2;
const max = 10;

appendRow.addEventListener('click', () => {
  const oldRow = tBody.children[0];
  const newRow = document.createElement('tr');

  for (let i = 0; i < oldRow.children.length; i += 1) {
    const cell = document.createElement('td');

    newRow.append(cell);
  }

  tBody.append(newRow);

  if (tBody.children.length >= max) {
    appendRow.disabled = true;
  }

  removeDisabled(removeRow);
});

removeRow.addEventListener('click', () => {
  tBody.lastElementChild.remove();

  if (tBody.children.length <= min) {
    removeRow.disabled = true;
  }

  removeDisabled(appendRow);
});

appendColumn.addEventListener('click', () => {
  [...tBody.children].forEach(el => {
    const cell = document.createElement('td');

    el.append(cell);

    if (el.children.length >= max) {
      appendColumn.disabled = true;
    }

    removeDisabled(removeColumn);
  });
});

removeColumn.addEventListener('click', () => {
  [...tBody.children].forEach(el => {
    el.lastElementChild.remove();

    if (el.children.length <= min) {
      removeColumn.disabled = true;
    }
  });

  removeDisabled(appendColumn);
});

function removeDisabled(btn) {
  if (btn.hasAttribute('disabled')) {
    btn.removeAttribute('disabled');
  }
}
