'use strict';

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

appendRow.addEventListener('click', () => {
  table.append(table.children[0].cloneNode(true));
  checkLength();
});

appendCol.addEventListener('click', () => {
  [...table.children].forEach(cell => {
    cell.append(cell.lastElementChild.cloneNode(true));
  });

  checkLength();
});

removeCol.addEventListener('click', () => {
  [...table.children].forEach(cell => {
    cell.lastElementChild.remove();
  });

  checkLength();
});

removeRow.addEventListener('click', () => {
  table.children[0].remove();

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
