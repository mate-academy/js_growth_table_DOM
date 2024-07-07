'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtonsState() {
  if (tbody.rows[0].cells.length <= 2) {
    removeColumn.setAttribute('disabled', true);
  } else {
    removeColumn.removeAttribute('disabled');
  }

  if (tbody.rows[0].cells.length >= 10) {
    appendColumn.setAttribute('disabled', true);
  } else {
    appendColumn.removeAttribute('disabled');
  }

  if (tbody.rows.length <= 2) {
    removeRow.setAttribute('disabled', true);
  } else {
    removeRow.removeAttribute('disabled');
  }

  if (tbody.rows.length >= 10) {
    appendRow.setAttribute('disabled', true);
  } else {
    appendRow.removeAttribute('disabled');
  }
}

appendColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length < 10) {
    [...tbody.rows].forEach((row) => {
      const newTdElement = document.createElement('td');

      row.append(newTdElement);
    });
  }
  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length > 2) {
    [...tbody.rows].forEach((row) => {
      row.lastElementChild.remove();
    });
  }
  updateButtonsState();
});

appendRow.addEventListener('click', () => {
  if (tbody.rows.length < 10) {
    tbody.append(tbody.rows[0].cloneNode(true));
  }
  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  if (tbody.rows.length > 2) {
    tbody.lastElementChild.remove();
  }
  updateButtonsState();
});

updateButtonsState();
