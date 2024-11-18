'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtonStates() {
  const trs = tbody.querySelectorAll('tr');
  const rowCount = trs.length;
  const columnCount = trs[0].children.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  const trs = tbody.querySelectorAll('tr');

  if (trs.length < 10) {
    const tdsCount = trs[0].children.length;
    const tr = document.createElement('tr');

    for (let i = 0; i < tdsCount; i++) {
      tr.append(document.createElement('td'));
    }
    tbody.append(tr);
    updateButtonStates();
  }
});

removeRow.addEventListener('click', () => {
  const trs = tbody.querySelectorAll('tr');

  if (trs.length > 2) {
    tbody.lastElementChild.remove();
    updateButtonStates();
  }
});

appendColumn.addEventListener('click', () => {
  const trs = tbody.querySelectorAll('tr');

  trs.forEach((tr) => {
    if (tr.children.length < 10) {
      tr.append(document.createElement('td'));
    }
  });
  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  const trs = tbody.querySelectorAll('tr');

  trs.forEach((tr) => {
    if (tr.children.length > 2) {
      tr.lastElementChild.remove();
    }
  });
  updateButtonStates();
});
