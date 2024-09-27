'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');
const tBody = table.tBodies[0];
const rows = tBody.rows;

table.minAmount = 2;
table.rowAmount = rows.length;
table.columnAmount = rows[0].cells.length;
table.maxAmount = 10;

container.addEventListener('click', function(e) {
  const button = e.target;

  if (button.tagName !== 'BUTTON') {
    return;
  }

  switch (true) {
    case button.classList.contains('append-row'):
      appendRow();
      blockButtonIfEqual(table.rowAmount, table.maxAmount);
      unblockOppositeIfBlocked('remove-row');

      break;

    case button.classList.contains('remove-row'):
      removeRow();
      blockButtonIfEqual(table.rowAmount, table.minAmount);
      unblockOppositeIfBlocked('append-row');

      break;

    case button.classList.contains('append-column'):
      appendColumn();
      blockButtonIfEqual(table.columnAmount, table.maxAmount);
      unblockOppositeIfBlocked('remove-column');

      break;

    case button.classList.contains('remove-column'):
      removeColumn();
      blockButtonIfEqual(table.columnAmount, table.minAmount);
      unblockOppositeIfBlocked('append-column');

      break;
  }

  function blockButtonIfEqual(amount, boundaryAmount) {
    if (amount === boundaryAmount) {
      button.disabled = true;
    }
  }

  function unblockOppositeIfBlocked(buttonClass) {
    const oppositeButton = container.querySelector(`.${buttonClass}`);

    if (oppositeButton.disabled) {
      oppositeButton.disabled = false;
    }
  }

  function appendRow() {
    const newRow = document.createElement('tr');
    const cellsAmount = rows[0].cells.length;

    for (let i = 0; i < cellsAmount; i++) {
      const cell = document.createElement('td');

      newRow.append(cell);
    }

    tBody.append(newRow);
    table.rowAmount++;
  }

  function removeRow() {
    const lastRow = tBody.lastElementChild;

    lastRow.remove();
    table.rowAmount--;
  }

  function appendColumn() {
    for (const row of rows) {
      const cell = document.createElement('td');

      row.append(cell);
    }

    table.columnAmount++;
  }

  function removeColumn() {
    for (const row of rows) {
      const lastCell = row.lastElementChild;

      lastCell.remove();
    }

    table.columnAmount--;
  }
});
