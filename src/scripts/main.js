'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tBody = document.querySelector('tbody');

const fnAppendRow = function() {
  if (tBody.children.length <= 10) {
    const row = document.querySelector('tr');
    const rowCopy = row.cloneNode(true);

    tBody.append(rowCopy);

    if (tBody.children.length > 2) {
      removeRow.removeAttribute('disabled');
    }
  } else {
    appendRow.setAttribute('disabled', true);
  }
};

const fnRemoveRow = function() {
  if (tBody.children.length > 2) {
    tBody.lastElementChild.remove();

    if (tBody.children.length <= 10) {
      appendRow.removeAttribute('disabled');
    }
  } else {
    removeRow.setAttribute('disabled', true);
  }
};

const fnAppendColumn = function() {
  const rows = document.querySelectorAll('tr');

  for (const row of Array.from(rows)) {
    if (row.children.length <= 10) {
      const td = document.createElement('td');

      row.append(td);

      if (row.children.length > 2) {
        removeColumn.removeAttribute('disabled');
      }
    }

    if (row.children.length > 10) {
      appendColumn.setAttribute('disabled', true);
    }
  }
};

const fnRemoveColumn = function() {
  const rows = document.querySelectorAll('tr');

  for (const row of Array.from(rows)) {
    if (row.children.length > 2) {
      row.lastElementChild.remove();

      if (row.children.length <= 10) {
        appendColumn.removeAttribute('disabled');
      }
    }

    if (row.children.length <= 2) {
      removeColumn.setAttribute('disabled', true);
    }
  }
};

appendRow.addEventListener('click', fnAppendRow);

removeRow.addEventListener('click', fnRemoveRow);

appendColumn.addEventListener('click', fnAppendColumn);

removeColumn.addEventListener('click', fnRemoveColumn);
