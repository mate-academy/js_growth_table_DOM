'use strict';

const table = document.querySelector('.field');
const buttons = document.querySelectorAll('.button');
const min = 2;
const max = 10;

function addRow() {
  const rows = table.querySelectorAll('tr');
  const rowsCount = rows.length;

  if (rowsCount < max) {
    const newRow = document.createElement('tr');
    const columnsCount = rows[0].children.length;

    for (let i = 0; i < columnsCount; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    table.appendChild(newRow);
  }
}

function removeRow() {
  const rows = table.querySelectorAll('tr');
  const rowsCount = rows.length;

  if (rowsCount > min) {
    rows[rows.length - 1].remove();
  }
}

function addColumn() {
  const rows = table.querySelectorAll('tr');
  const columnsCount = rows[0].children.length;

  if (columnsCount < max) {
    rows.forEach((row) => row.appendChild(document.createElement('td')));
  }
}

function removeColumn() {
  const rows = table.querySelectorAll('tr');
  const columnsCount = rows[0].children.length;

  if (columnsCount > min) {
    rows.forEach((row) => row.lastElementChild.remove());
  }
}

function updateButtons() {
  const rows = table.querySelectorAll('tr');
  const rowsCount = rows.length;
  const columnsCount = rows[0].children.length;

  buttons.forEach((btn) => {
    const btnClass = btn.classList;

    if (btnClass.contains('append-row')) {
      btn.disabled = rowsCount >= max;
    }

    if (btnClass.contains('remove-row')) {
      btn.disabled = rowsCount <= min;
    }

    if (btnClass.contains('append-column')) {
      btn.disabled = columnsCount >= max;
    }

    if (btnClass.contains('remove-column')) {
      btn.disabled = columnsCount <= min;
    }
  });
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnClass = e.target.classList;

    if (btnClass.contains('append-row')) {
      addRow();
    }

    if (btnClass.contains('remove-row')) {
      removeRow();
    }

    if (btnClass.contains('append-column')) {
      addColumn();
    }

    if (btnClass.contains('remove-column')) {
      removeColumn();
    }

    updateButtons();
  });
});

updateButtons();
