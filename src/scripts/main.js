'use strict';

const container = document.querySelector('.container');
// const btn = document.querySelectorAll('button');
const table = document.querySelector('tbody');
const remColBut = document.querySelector('.remove-column');
const remRowBut = document.querySelector('.remove-row');
const appendColBut = document.querySelector('.append-column');
const appendRowBut = document.querySelector('.append-row');

container.onclick = function(ev) {
  const target = ev.target;

  if (!target.classList.contains('button')) {
    return;
  }

  if (target.classList.contains('remove-row')) {
    deleteRow();
  }

  if (target.classList.contains('append-row')) {
    appendRow();
  }

  if (target.classList.contains('append-column')) {
    appendColumn();
  }

  if (target.classList.contains('remove-column')) {
    deleteColumn();
  }

  function deleteRow() {
    appendRowBut.disabled = false;

    if (table.rows.length > 2) {
      table.deleteRow(table.rows.length - 1);
    }

    if (table.rows.length < 3) {
      remRowBut.disabled = true;
    }
  }

  function appendRow() {
    remRowBut.disabled = false;

    if (table.rows.length < 10) {
      const row = table.insertRow(table.rows.length);

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        row.insertCell(i);
      }
    }

    if (table.rows.length === 10) {
      appendRowBut.disabled = true;
    }
  }

  function appendColumn() {
    remColBut.disabled = false;

    if (table.rows[0].cells.length < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell(table.rows[i].cells.length);
      }
    }

    if (table.rows[0].cells.length === 10) {
      appendColBut.disabled = true;
    }
  }

  function deleteColumn() {
    const lastCol = table.rows[0].cells.length;

    if (lastCol > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(lastCol - 1);
      }
      appendColBut.disabled = false;
    }

    if (lastCol < 4) {
      remColBut.disabled = true;
    }
  }
};
