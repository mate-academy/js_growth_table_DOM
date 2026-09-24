'use strict';

const wrapper = document.querySelector('.container');

const addRowBtn = wrapper.querySelector('.append-row');
const deleteRowBtn = wrapper.querySelector('.remove-row');

const addColBtn = wrapper.querySelector('.append-column');
const deleteColBtn = wrapper.querySelector('.remove-column');

const table = wrapper.querySelector('.field');

const MAX = 10;
const MIN = 2;

const activateBtn = () => {
  const rowCount = table.rows.length;
  const count = table.rows[0].cells.length;

  deleteRowBtn.disabled = rowCount <= MIN;
  addRowBtn.disabled = rowCount >= MAX;

  deleteColBtn.disabled = count <= MIN;
  addColBtn.disabled = count >= MAX;
};

activateBtn();

wrapper.addEventListener('click', (e) => {
  e.preventDefault();

  const btn = e.target.closest('.button');

  if (!btn || btn.disabled) {
    return;
  }

  if (btn.classList.contains('append-row') && table.rows.length < MAX) {
    const tr = document.createElement('tr');
    const colCount = table.rows[0].cells.length;
    const tbody = table.querySelector('tbody') || table;

    for (let i = 0; i < colCount; i++) {
      const td = document.createElement('td');

      tr.append(td);
    }
    tbody.append(tr);
  }

  if (btn.classList.contains('remove-row') && table.rows.length > MIN) {
    table.deleteRow(-1);
  }

  if (
    btn.classList.contains('append-column') &&
    table.rows[0].cells.length < MAX
  ) {
    Array.from(table.rows).forEach((tr) => {
      const td = document.createElement('td');

      tr.append(td);
    });
  }

  if (
    btn.classList.contains('remove-column') &&
    table.rows[0].cells.length > MIN
  ) {
    table.querySelectorAll('tr').forEach((tr) => tr.lastElementChild?.remove());
  }
  activateBtn();
});
