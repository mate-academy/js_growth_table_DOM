'use strict';

function appendRow(button) {
  const table = document.querySelector('.field > tbody');
  const existRow = table.querySelector('tr');
  const newRow = document.createElement('tr');

  if (table.querySelectorAll('tr').length >= 10) {
    button.disabled = true;

    return 0;
  }

  newRow.innerHTML = existRow.innerHTML;

  table.appendChild(newRow);

  toggleButtons();
}

function removeRow(button) {
  const table = document.querySelector('.field > tbody');
  const rowToDel = table.querySelector('tr');

  if (table.querySelectorAll('tr').length <= 2) {
    button.disabled = true;

    return 0;
  }

  rowToDel.remove();

  toggleButtons();
}

function appendCol(button) {
  const table = document.querySelector('.field > tbody');
  const rows = [...table.querySelectorAll('tr')];

  if (rows[0].querySelectorAll('td').length >= 10) {
    button.disabled = true;

    return 0;
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });

  toggleButtons();
}

function removeCol(button) {
  const table = document.querySelector('.field > tbody');
  const rows = [...table.querySelectorAll('tr')];

  if (rows[0].querySelectorAll('td').length <= 2) {
    button.disabled = true;

    return 0;
  }

  rows.forEach((row) => {
    const cellToDel = row.querySelector('td');

    cellToDel.remove();
  });

  toggleButtons();
}

function toggleButtons() {
  const table = document.querySelector('.field > tbody');
  const rows = table.querySelectorAll('tr');
  const rowCount = rows.length;
  const cols = rows[0] ? rows[0].querySelectorAll('td') : [];
  const colCount = cols.length;

  const appendRowButton = document.querySelector('.append-row');

  if (rowCount >= 10) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }

  const removeRowButton = document.querySelector('.remove-row');

  if (rowCount <= 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  const appendColButton = document.querySelector('.append-column');

  if (colCount >= 10) {
    appendColButton.disabled = true;
  } else {
    appendColButton.disabled = false;
  }

  const removeColButton = document.querySelector('.remove-column');

  if (colCount <= 2) {
    removeColButton.disabled = true;
  } else {
    removeColButton.disabled = false;
  }
}

document.addEventListener('click', (ev) => {
  const elClicked = ev.target;

  if (elClicked.tagName === 'BUTTON') {
    if (elClicked.classList.contains('append-row')) {
      appendRow(elClicked);
    }

    if (elClicked.classList.contains('append-column')) {
      appendCol(elClicked);
    }

    if (elClicked.classList.contains('remove-row')) {
      removeRow(elClicked);
    }

    if (elClicked.classList.contains('remove-column')) {
      removeCol(elClicked);
    }
  }
});
