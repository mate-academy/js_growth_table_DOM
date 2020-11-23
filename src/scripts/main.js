'use strict';

const button = document.querySelectorAll('button');
const tableBody = document.querySelector('tbody');
const rows = tableBody.rows;

const maximum = 10;
const minimum = 2;

button.forEach(btn => btn.addEventListener('click', e => {
  if (e.target.classList.contains('append-column')
   && rows[0].cells.length < maximum) {
    [...rows].forEach(row => {
      row.insertCell(-1);
    });
  }

  if (e.target.classList.contains('append-row') && rows.length < maximum) {
    rows[rows.length - 1].after(rows[rows.length - 1].cloneNode(true));
  }

  if (e.target.classList.contains('remove-row') && rows.length > minimum) {
    tableBody.deleteRow(-1);
  }

  if (e.target.classList.contains('remove-column')
   && rows[0].cells.length > minimum) {
    [...rows].forEach(row => {
      row.deleteCell(-1);
    });
  }
}));
