'use strict';

const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');
const maxCount = 10;
const minCount = 2;

container.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button || !container.contains(button)) {
    return;
  };

  switch (button) {
    case appendRow:
      tbody.append(tbody.lastElementChild.cloneNode(true));
      break;
    case removeRow:
      tbody.lastElementChild.remove();
      break;
    case appendColumn:
      [ ...tbody.querySelectorAll('tr') ].forEach(tr => {
        tr.append(tr.lastElementChild.cloneNode(true));
      });
      break;
    case removeColumn:
      [ ...tbody.querySelectorAll('tr') ].forEach(tr => {
        tr.lastElementChild.remove();
      });
      break;
    default:
      break;
  }

  tbody.querySelectorAll('tr').length < maxCount
    ? appendRow.disabled = false
    : appendRow.disabled = true;

  tbody.querySelectorAll('tr').length > minCount
    ? removeRow.disabled = false
    : removeRow.disabled = true;

  [ ...tbody.querySelectorAll('tr') ][0].querySelectorAll('td')
    .length < maxCount
    ? appendColumn.disabled = false
    : appendColumn.disabled = true;

  [ ...tbody.querySelectorAll('tr') ][0].querySelectorAll('td')
    .length > minCount
    ? removeColumn.disabled = false
    : removeColumn.disabled = true;
});
