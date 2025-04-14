'use strict';

document.addEventListener('click', (e) => {
  const table = document.querySelector('.field');
  const appendRow = document.querySelector('.append-column');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-row');
  const removeColumn = document.querySelector('.remove-column');
  let trs = document.querySelectorAll('tr');

  if (removeRow === e.target && trs.length > 2) {
    table.firstElementChild.children[0].remove();
    trs = document.querySelectorAll('tr');
    removeRow.disabled = trs.length === 2;
    appendRow.disabled = false;
  }

  if (appendColumn === e.target && trs[0].children.length < 10) {
    trs.forEach((tr) => tr.append(tr.firstElementChild.cloneNode(true)));
    trs = document.querySelectorAll('tr');
    appendColumn.disabled = trs[0].children.length === 10;
    removeColumn.disabled = false;
  }

  if (removeColumn === e.target && trs[0].children.length > 2) {
    trs.forEach((tr) => tr.children[0].remove());
    trs = document.querySelectorAll('tr');
    removeColumn.disabled = trs[0].children.length === 2;
    appendColumn.disabled = false;
  }

  if (appendRow === e.target && trs.length < 10) {
    table.firstElementChild.append(
      table.firstElementChild.children[0].cloneNode(true),
    );
    trs = document.querySelectorAll('tr');
    appendRow.disabled = trs.length === 10;
    removeRow.disabled = false;
  }
});
