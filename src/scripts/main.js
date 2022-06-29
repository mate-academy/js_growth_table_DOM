'use strict';

const buttons = document.querySelectorAll('.button');

for (const btn of buttons) {
  if (btn.classList.contains('append-row')) {
    btn.addEventListener('click', addRow);
  } else if (btn.classList.contains('append-column')) {
    btn.addEventListener('click', addCol);
  } else if (btn.classList.contains('remove-row')) {
    btn.addEventListener('click', remRow);
  } else if (btn.classList.contains('remove-column')) {
    btn.addEventListener('click', remCol);
  }
}

function addRow() {
  const table = document.querySelector('tbody');
  const rows = document.querySelectorAll('tr');
  const addBtn = document.querySelector('.append-row');
  const remBtn = document.querySelector('.remove-row');
  const rowLength = table.rows.length;
  const row = rows[0].cloneNode(true);

  if (rowLength === 10) {
    addBtn.setAttribute('disabled', true);
  };

  if (rowLength >= 2 && rowLength < 10) {
    table.appendChild(row);
    remBtn.removeAttribute('disabled');
  }
}

function remRow() {
  const table = document.querySelector('tbody');
  const remBtn = document.querySelector('.remove-row');
  const addBtn = document.querySelector('.append-row');
  const rowLength = table.rows.length - 1;

  if (rowLength === 2) {
    remBtn.setAttribute('disabled', true);
  }

  if (rowLength >= 2 && rowLength < 10) {
    table.deleteRow(-1);
    addBtn.removeAttribute('disabled');
  }
}

function addCol() {
  const rows = document.querySelectorAll('tr');
  const cols = document.querySelectorAll('td');
  const addBtnCol = document.querySelector('.append-column');
  const remBtnCol = document.querySelector('.remove-column');

  for (let i = 0; i < rows.length; i++) {
    const col = cols[i].cloneNode(true);

    rows[i].appendChild(col);

    if (rows[i].children.length === 10) {
      addBtnCol.setAttribute('disabled', true);
    }

    if (rows[i].children.length < 10) {
      addBtnCol.removeAttribute('disabled');
    }

    if (rows[i].children.length >= 2 && rows[i].children.length <= 10) {
      remBtnCol.removeAttribute('disabled');
    }
  }
}

function remCol() {
  const rows = document.querySelectorAll('tr');
  const remBtnCol = document.querySelector('.remove-column');
  const addBtnCol = document.querySelector('.append-column');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    row.deleteCell(-1);

    if (rows[i].children.length > 2 && rows[i].children.length < 10) {
      remBtnCol.removeAttribute('disabled');
    }

    if (rows[i].children.length === 2) {
      remBtnCol.setAttribute('disabled', true);
    }

    if (rows[i].children.length >= 2 && rows[i].children.length <= 10) {
      addBtnCol.removeAttribute('disabled');
    }
  }
}
