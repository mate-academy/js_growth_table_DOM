'use strict';

const controls = {
  appendRow: document.querySelector('.append-row'),
  removeRow: document.querySelector('.remove-row'),
  appendColumn: document.querySelector('.append-column'),
  removeColumn: document.querySelector('.remove-column'),
};

const table = document.querySelector('.field');

const updateControls = () => {
  const countRows = table.querySelectorAll('tr').length;
  const countColumns = table.querySelector('tr').querySelectorAll('td').length;

  controls.appendRow.disabled = countRows >= 10;
  controls.removeRow.disabled = countRows <= 2;
  controls.appendColumn.disabled = countColumns >= 10;
  controls.removeColumn.disabled = countColumns <= 2;
};

addEventListener('click', (e) => {
  const countRows = table.querySelectorAll('tr');
  const row = table.querySelector('tr');
  const countColumns = row.querySelectorAll('td');

  if (e.target === controls.appendRow && countRows.length < 10) {
    table.lastElementChild.append(row.cloneNode(true));
  }

  if (e.target === controls.removeRow && countRows.length > 2) {
    row.remove();
  }

  if (e.target === controls.appendColumn && countColumns.length < 10) {
    countRows.forEach((el) => el.append(document.createElement('td')));
  }

  if (e.target === controls.removeColumn && countColumns.length > 2) {
    countRows.forEach((el) => el.querySelector('td').remove());
  }

  updateControls();
});

updateControls();
