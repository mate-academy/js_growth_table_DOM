'use strict';

const container = document.querySelector('.container');

const table = container.querySelector('.field').firstElementChild;
const cell = table.firstElementChild.firstElementChild;

const addRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const addColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

container.addEventListener('click', (event) => {
  const target = event.target;
  const targetClasses = target.classList;
  const tableChildrens = table.children;

  if (![...targetClasses].includes('button')) {
    return;
  }

  if ([...targetClasses].includes('append-row')) {
    table.append(table.firstElementChild.cloneNode(true));
  }

  if ([...targetClasses].includes('remove-row')) {
    table.lastElementChild.remove();
  }

  if ([...targetClasses].includes('append-column')) {
    [...tableChildrens].forEach(element => {
      element.append(cell.cloneNode(true));
    });
  }

  if ([...targetClasses].includes('remove-column')) {
    [...tableChildrens].forEach(element => element.lastElementChild.remove());
  }

  switch (true) {
    case tableChildrens.length === minCount :
      removeRow.disabled = true;
      break;
    case tableChildrens.length === maxCount :
      addRow.disabled = true;
      break;
    default :
      removeRow.disabled = false;
      addRow.disabled = false;
  }

  switch (true) {
    case tableChildrens[0].children.length === minCount :
      removeColumn.disabled = true;
      break;
    case tableChildrens[0].children.length === maxCount :
      addColumn.disabled = true;
      break;
    default :
      removeColumn.disabled = false;
      addColumn.disabled = false;
  }
});
