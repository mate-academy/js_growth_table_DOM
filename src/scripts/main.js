'use strict';

const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row button');
const removeRowBtn = document.querySelector('.remove-row button');
const appendColBtn = document.querySelector('.append-column button');
const removeColBtn = document.querySelector('.remove-column button');

let rows = table.rows.length;
let cols = table.rows[0].cells.length;

const max = 10;
const min = 2;

function createCell() {
  const td = document.createElement('td');

  return td;
}

function updateButtons() {
  appendRowBtn.disabled = rows >= max;
  removeRowBtn.disabled = rows <= min;
  appendColBtn.disabled = cols >= max;
  removeColBtn.disabled = cols <= min;
}

appendRowBtn.addEventListener('click', () => {
  if (rows < max) {
    const tr = document.createElement('tr');

    for (let i = 0; i < cols; i++) {
      tr.append(createCell());
    }

    table.append(tr);
    rows++;
    updateButtons();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (rows > min) {
    table.deleteRow(-1);
    rows--;
    updateButtons();
  }
});

appendColBtn.addEventListener('click', () => {
  if (cols < max) {
    Array.from(table.rows).forEach((row) => {
      row.append(createCell());
    });
    cols++;
    updateButtons();
  }
});

removeColBtn.addEventListener('click', () => {
  if (cols > min) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
    cols--;
    updateButtons();
  }
});

updateButtons();
