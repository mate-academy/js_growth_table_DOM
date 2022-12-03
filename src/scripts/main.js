'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.getElementsByClassName('field');
const allTr = document.getElementsByTagName('tr');
const td = document.querySelector('td');

appendColumn.addEventListener('click', () => {
  [...allTr].forEach(x => x.append(td.cloneNode(true)));

  if ([...allTr][0].children.length === 10) {
    appendColumn.disabled = true;
  }

  if ([...allTr][0].children.length !== 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  [...allTr].forEach(x => {
    x.removeChild(x.lastElementChild);
  });

  if ([...allTr][0].children.length === 2) {
    removeRow.disabled = true;
  }

  if ([...allTr][0].children.length !== 10) {
    appendColumn.disabled = false;
  }
});

appendRow.addEventListener('click', () => {
  field[0].lastChild.append(allTr[0].cloneNode(true));

  if ([...allTr].length === 10) {
    appendRow.disabled = true;
  };

  if ([...allTr].length !== 2) {
    removeColumn.disabled = false;
  };
});

removeColumn.addEventListener('click', () => {
  field[0].lastChild.children[0].remove();

  if ([...allTr].length !== 10) {
    appendRow.disabled = false;
  };

  if ([...allTr].length === 2) {
    removeColumn.disabled = true;
  };
});
