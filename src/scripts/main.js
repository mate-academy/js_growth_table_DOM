'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');

const maximum = 10;
const minimum = 2;

function updButtonState() {
  const rows = table.querySelectorAll('tr');
  const rowsCount = rows.length;
  let colCount;

  if (rows.length > 0) {
    colCount = rows[0].cells.length;
  }

  appendRow.disabled = rowsCount >= maximum;
  removeRow.disabled = rowsCount <= minimum;
  appendColumn.disabled = colCount >= maximum;
  removeColumn.disabled = colCount <= minimum;
}

container.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  const rows = table.querySelectorAll('tr');

  if (!button || !container.contains(button) || button.disabled) {
    return;
  }

  switch (button) {
    case appendRow: {
      const newRow = table.insertRow(-1);

      for (let i = 0; i < rows[0].cells.length; i++) {
        newRow.insertCell(-1);
      }
      break;
    }

    case removeRow:
      rows[rows.length - 1].remove();
      break;

    case appendColumn:
      [...rows].forEach((n) => {
        n.insertCell(-1);
      });

      break;

    case removeColumn:
      [...rows].forEach((n) => {
        n.deleteCell(-1);
      });

      break;
  }
  updButtonState();
});

updButtonState();
