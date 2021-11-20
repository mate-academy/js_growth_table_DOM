'use strict';

// write code here
const minCount = 2;
const maxCount = 10;
const mainTabel = document.querySelector('table.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', e => addRow(mainTabel));
removeRowBtn.addEventListener('click', e => removeRow(mainTabel));
appendColBtn.addEventListener('click', e => appendCol(mainTabel));
removeColBtn.addEventListener('click', e => removeCol(mainTabel));

function addRow(tabel) {
  if (removeRowBtn.disabled) {
    removeRowBtn.disabled = false;
  }

  const row = tabel.querySelector('tr').cloneNode(true);

  tabel.querySelector('tbody').appendChild(row);

  const rows = tabel.querySelectorAll('tr');

  if (rows.length >= maxCount) {
    appendRowBtn.disabled = true;
  }
}

function removeRow(tabel) {
  if (appendRowBtn.disabled) {
    appendRowBtn.disabled = false;
  }

  tabel.querySelector('tbody').lastElementChild.remove();

  const rows = tabel.querySelectorAll('tr');

  if (rows.length <= minCount) {
    removeRowBtn.disabled = true;
  }
}

function appendCol(tabel) {
  if (removeColBtn.disabled) {
    removeColBtn.disabled = false;
  }

  const rows = tabel.querySelectorAll('tr');

  for (const item of rows) {
    const cell = item.lastElementChild.cloneNode(true);

    item.appendChild(cell);
  }

  if (rows[0].querySelectorAll('td').length >= maxCount) {
    appendColBtn.disabled = true;
  }
}

function removeCol(tabel) {
  if (appendColBtn.disabled) {
    appendColBtn.disabled = false;
  }

  const rows = tabel.querySelectorAll('tr');

  for (const item of rows) {
    item.lastElementChild.remove();
  }

  if (rows[0].querySelectorAll('td').length <= minCount) {
    removeColBtn.disabled = true;
  }
}
