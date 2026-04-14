'use strict';

const table = document.querySelector('.field');
const tBody = table.tBodies[0];

const addColumnBtn = document.querySelector('.append-column');
const addRowBtn = document.querySelector('.append-row');
const removeColumnBtn = document.querySelector('.remove-column');
const removeRowBtn = document.querySelector('.remove-row');

function checkTableSize() {
  const cols = table.rows[0] ? table.rows[0].cells.length : 0;
  if (cols <= 2) {
    removeColumnBtn.disabled = true;
  } else {
    removeColumnBtn.disabled = false;
  }

  if (table.rows.length <= 2) {
    removeRowBtn.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }

  if (cols >= 10) {
    addColumnBtn.disabled = true;
  } else {
    addColumnBtn.disabled = false;
  }

  if (table.rows.length >= 10) {
    addRowBtn.disabled = true;
  } else {
    addRowBtn.disabled = false;
  }
}

checkTableSize();

addColumnBtn.addEventListener('click', () => {
  const cols = table.rows[0] ? table.rows[0].cells.length : 0;
  if (cols < 10) {
    const trows = table.rows;

    for (let i = 0; i < trows.length; i++) {
      trows[i].insertCell(-1);
    }
  }

  checkTableSize();
});

addRowBtn.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = tBody.insertRow(-1);

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell(i);
    }
  }

  checkTableSize();
});

removeColumnBtn.addEventListener('click', () => {
  const cols = table.rows[0] ? table.rows[0].cells.length : 0;
  if (cols > 2) {
    const trows = table.rows;

    for (let i = 0; i < trows.length; i++) {
      trows[i].deleteCell(trows[i].cells.length - 1);
    }
  }

  checkTableSize();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > 2) {
    tBody.deleteRow(tBody.rows.length - 1);
  }

  checkTableSize();
});
