'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tbody = field.querySelector('tbody');

function updateButtons() {
  const rowCount = field.rows.length;
  const colCount = field.rows[0].cells.length;

  appendRow.disabled = rowCount >= MAX_COUNT;
  removeRow.disabled = rowCount <= MIN_COUNT;
  appendColumn.disabled = colCount >= MAX_COUNT;
  removeColumn.disabled = colCount <= MIN_COUNT;
}

const funcAppendRow = () => {
  const count = tbody.querySelector('tr').querySelectorAll('td').length;
  const countRows = tbody.querySelectorAll('tr').length;

  const tr = document.createElement('tr');

  if (countRows < MAX_COUNT) {
    for (let i = 0; i < count; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  updateButtons();
};

const funcRemoveRow = () => {
  const count = tbody.querySelectorAll('tr').length;

  if (count > MIN_COUNT) {
    tbody.removeChild(tbody.querySelector('tr'));
  }

  updateButtons();
};

const funcAppendColumn = () => {
  const trs = tbody.getElementsByTagName('tr');
  const count = tbody.querySelector('tr').querySelectorAll('td').length;

  if (count < MAX_COUNT) {
    for (let i = 0; i < trs.length; i++) {
      const tr = trs[i];

      const td = document.createElement('td');

      tr.appendChild(td);
    }
  }

  updateButtons();
};

const funcRemoveColumn = () => {
  const count = tbody.querySelector('tr').querySelectorAll('td').length;

  if (count > MIN_COUNT) {
    const trs = tbody.querySelectorAll('tr');

    for (let i = 0; i < trs.length; i++) {
      const tr = trs[i];

      tr.removeChild(tr.querySelector('td'));
    }
  }

  updateButtons();
};

appendRow.addEventListener('click', funcAppendRow);
removeRow.addEventListener('click', funcRemoveRow);
appendColumn.addEventListener('click', funcAppendColumn);
removeColumn.addEventListener('click', funcRemoveColumn);
