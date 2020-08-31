'use strict';

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function growthTable() {
  addRowBtn.addEventListener('click', (event) => {
    if (event.target === addRowBtn) {
      table.tBodies[0].append(table.rows[0].cloneNode(true));
    }

    addRowBtn.disabled = (table.rows.length === 10);
    removeRowBtn.disabled = (table.rows.length === 2);
  });

  removeRowBtn.addEventListener('click', (event) => {
    if (event.target === removeRowBtn) {
      table.tBodies[0].lastElementChild.remove();
    }

    addRowBtn.disabled = (table.rows.length === 10);
    removeRowBtn.disabled = (table.rows.length === 2);
  });

  addColumnBtn.addEventListener('click', (event) => {
    if (event.target === addColumnBtn) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].append(document.createElement('td'));
      }
    }

    addColumnBtn.disabled = (table.rows[0].cells.length === 10);
    removeColumnBtn.disabled = (table.rows[0].cells.length === 2);
  });

  removeColumnBtn.addEventListener('click', (event) => {
    if (event.target === removeColumnBtn) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].lastElementChild.remove();
      }
    }

    addColumnBtn.disabled = (table.rows[0].cells.length === 10);
    removeColumnBtn.disabled = (table.rows[0].cells.length === 2);
  });
}

growthTable();
