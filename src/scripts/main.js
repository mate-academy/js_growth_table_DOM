'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

appendRow.addEventListener('click', (e) => {
  table.append(table.lastElementChild.cloneNode(true));

  if ([...table.children].length === 10) {
    appendRow.setAttribute('disabled', 'true');
  }

  if ([...table.children].length > 2) {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', (e) => {
  table.lastElementChild.remove();

  if ([...table.children].length === 2) {
    removeRow.setAttribute('disabled', 'true');
  }

  if ([...table.children].length < 10) {
    appendRow.removeAttribute('disabled');
  }
});

appendColumn.addEventListener('click', (e) => {
  for (const item of [...table.children]) {
    item.append(item.lastElementChild.cloneNode(true));
  }

  if ([...table.children][0].children.length === 10) {
    appendColumn.setAttribute('disabled', 'true');
  }

  if ([...table.children][0].children.length > 2) {
    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', (e) => {
  for (const item of [...table.children]) {
    item.lastElementChild.remove();
  }

  if ([...table.children][0].children.length === 2) {
    removeColumn.setAttribute('disabled', 'true');
  }

  if ([...table.children][0].children.length < 10) {
    appendColumn.removeAttribute('disabled');
  }
});
