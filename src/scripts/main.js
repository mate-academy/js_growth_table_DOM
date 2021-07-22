'use strict';

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');
const tr = document.querySelectorAll('tr');

addRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  const trLength = document.querySelectorAll('tr').length;

  tbody.insertAdjacentHTML('beforeend', ` ${tr[0].innerHTML}`);

  if (trLength === 9) {
    addRow.setAttribute('disabled', 'disabled');
  };

  if (trLength === 2) {
    deleteRow.removeAttribute('disabled');
  };
});

deleteRow.addEventListener('click', () => {
  const trLength = document.querySelectorAll('tr').length;

  document.querySelector('tbody').lastChild.remove();
  document.querySelector('tbody').lastChild.remove();

  if (trLength === 3) {
    deleteRow.setAttribute('disabled', 'disabled');
  };

  if (trLength === 10) {
    addRow.removeAttribute('disabled');
  };
});

addColumn.addEventListener('click', () => {
  const getTr = document.querySelectorAll('tr');
  const trLength = getTr[0].querySelectorAll('td').length;

  for (const coll of getTr) {
    coll.insertAdjacentHTML('beforeend', '<td>');

    if (trLength === 9) {
      addColumn.setAttribute('disabled', 'disabled');
    };

    if (trLength === 2) {
      delColumn.removeAttribute('disabled');
    };
  };
});

delColumn.addEventListener('click', () => {
  const getTr = document.querySelectorAll('tr');
  const trLength = getTr[0].querySelectorAll('td').length;

  for (const coll of getTr) {
    coll.children[0].remove();
  };

  if (trLength <= 3) {
    delColumn.setAttribute('disabled', 'disabled');
  };

  if (trLength === 10) {
    addColumn.removeAttribute('disabled');
  };
});
