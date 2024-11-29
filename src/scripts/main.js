'use strict';

const butApRow = document.querySelector('.append-row');
const butRemRow = document.querySelector('.remove-row');
const butApCol = document.querySelector('.append-column');
const butRemCol = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function update() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  butApRow.disabled = rows >= 10;
  butRemRow.disabled = rows <= 2;
  butApCol.disabled = cols >= 10;
  butRemCol.disabled = cols <= 2;
}

butApRow.addEventListener('click', (e) => {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
  }

  update();
});

butApCol.addEventListener('click', (e) => {
  if (table.rows[0].cells.length < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }

  update();
});

butRemRow.addEventListener('click', (e) => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
  update();
});

butRemCol.addEventListener('click', (e) => {
  if (table.rows[0].cells.length > 2) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }
  update();
});

update();
