'use strict';

const table = document.querySelector('.field tbody');
const tr = table.querySelector('tr');
const td = table.querySelector('td');

const btns = document.querySelectorAll('.button');
const removeRowBtn = document.querySelector('.remove-row');
const appendRowBtn = document.querySelector('.append-row');
const removeColBtn = document.querySelector('.remove-column');
const appendColBtn = document.querySelector('.append-column');

const minAmount = 2;
const maxAmount = 10;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const clsList = e.target.classList;
    const rows = table.rows;
    const rowAmount = rows.length;
    const colAmount = rows[0].cells.length;

    if (clsList.contains('append-row')) {
      table.appendChild(tr.cloneNode(true));
      removeRowBtn.removeAttribute('disabled');

      if (rowAmount + 1 === maxAmount) {
        btn.disabled = true;
      }
    } else if (clsList.contains('remove-row')) {
      table.lastElementChild.remove();
      appendRowBtn.removeAttribute('disabled');

      if (rowAmount - 1 === minAmount) {
        btn.disabled = true;
      }
    } else if (clsList.contains('append-column')) {
      for (const row of rows) {
        row.appendChild(td.cloneNode(true));
      }
      removeColBtn.removeAttribute('disabled');

      if (colAmount + 1 === maxAmount) {
        btn.disabled = true;
      }
    } else if (clsList.contains('remove-column')) {
      for (const row of rows) {
        row.lastElementChild.remove();
      }
      appendColBtn.removeAttribute('disabled');

      if (colAmount - 1 === minAmount) {
        btn.disabled = true;
      }
    }
  });
});
