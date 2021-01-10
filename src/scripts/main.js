'use strict';

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const list = document.querySelectorAll('tr');
  const table = document.querySelector('tbody');

  table.append(list[0].cloneNode(true));
  checkLength();
});

appendCol.addEventListener('click', () => {
  const list = document.querySelectorAll('tr');

  list.forEach(row => {
    row.children[0].before(row.children[0].cloneNode(true));
  });

  checkLength();
});

removeCol.addEventListener('click', () => {
  const list = document.querySelectorAll('tr');

  list.forEach(row => {
    row.children[0].remove();
  });

  checkLength();
});

removeRow.addEventListener('click', () => {
  const list = document.querySelectorAll('tr');

  list[list.length - 1].remove();

  checkLength();
});

function checkLength() {
  const rowLength = document.querySelectorAll('tr').length;
  const colLength = document.querySelector('tr').children.length;

  switch (true) {
    case (rowLength >= 10):
      appendRow.disabled = true;
      break;

    case (rowLength <= 2):
      removeRow.disabled = true;
      break;

    default:
      appendRow.disabled = false;
      removeRow.disabled = false;
  }

  switch (true) {
    case (colLength >= 10):
      appendCol.disabled = true;
      break;

    case (colLength <= 2):
      removeCol.disabled = true;
      break;

    default:
      appendCol.disabled = false;
      removeCol.disabled = false;
  }
}
