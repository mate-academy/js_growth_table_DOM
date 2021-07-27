'use strict';

const addRow = document.querySelector('.append-row');
const deleteRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');

document.addEventListener('click', (e) => {
  const choice = e.target;

  switch (choice) {
    case addRow:
      addRows();
      break;

    case deleteRow:
      delRow();
      break;

    case addColumn:
      addCol();
      break;

    case delColumn:
      delCol();
      break;
  };

  const trLength = document.querySelectorAll('tr').length;
  const tdLength = document.querySelectorAll('tr')[0]
    .querySelectorAll('td').length;

  switch (trLength) {
    case 2:
      deleteRow.setAttribute('disabled', 'disabled');
      break;

    case 3:
      deleteRow.removeAttribute('disabled');
      break;

    case 9:
      addRow.removeAttribute('disabled');
      break;

    case 10:
      addRow.setAttribute('disabled', 'disabled');
      break;
  };

  switch (tdLength) {
    case 2:
      delColumn.setAttribute('disabled', 'disabled');
      break;

    case 3:
      delColumn.removeAttribute('disabled');
      break;

    case 9:
      addColumn.removeAttribute('disabled');
      break;

    case 10:
      addColumn.setAttribute('disabled', 'disabled');
      break;
  };
});

function addRows() {
  const tr = document.querySelectorAll('tr');
  const tbody = document.querySelector('tbody');

  tbody.insertAdjacentHTML('beforeend', ` ${tr[0].innerHTML}`);
};

function delRow() {
  document.querySelector('tbody').lastChild.remove();
  document.querySelector('tbody').lastChild.remove();
};

function addCol() {
  const getTr = document.querySelectorAll('tr');

  for (const coll of getTr) {
    coll.insertAdjacentHTML('beforeend', '<td>');
  };
};

function delCol() {
  const getTr = document.querySelectorAll('tr');

  for (const coll of getTr) {
    coll.children[0].remove();
  };
};
