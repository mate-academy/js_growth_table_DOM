'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

const addRowBtn = container.querySelector('.append-row');
const deleteRowBtn = container.querySelector('.remove-row');
const addColumnBtn = container.querySelector('.append-column');
const deleteColumnBtn = container.querySelector('.remove-column');

function updateButtonStates() {
  const currentCountRows = tbody.querySelectorAll('tr').length;
  const currentCountColumns = tbody.querySelector('tr').cells.length;

  if (addRowBtn) {
    addRowBtn.disabled = currentCountRows >= 10;
  }

  if (deleteRowBtn) {
    deleteRowBtn.disabled = currentCountRows <= 2;
  }

  if (addColumnBtn) {
    addColumnBtn.disabled = currentCountColumns >= 10;
  }

  if (deleteColumnBtn) {
    deleteColumnBtn.disabled = currentCountColumns <= 2;
  }
}

updateButtonStates();

container.addEventListener('click', (eventClick) => {
  const button = eventClick.target.closest('button');

  if (!button) {
    return;
  }

  const isAddRowBtn = button.classList.contains('append-row');
  const isDeleteRowBtn = button.classList.contains('remove-row');
  const isAddColumnBtn = button.classList.contains('append-column');
  const isDeleteColumnBtn = button.classList.contains('remove-column');

  if (isAddRowBtn) {
    const rows = [...table.querySelectorAll('tr')];

    if (rows.length >= 10 || rows.length === 0) {
      return;
    }

    const cloneRow = rows[rows.length - 1].cloneNode(true);

    tbody.append(cloneRow);

    updateButtonStates();
  }

  if (isDeleteRowBtn) {
    const rows = [...table.querySelectorAll('tr')];

    if (rows.length <= 2) {
      return;
    }

    const lastRow = rows[rows.length - 1];

    lastRow.remove();

    updateButtonStates();
  }

  if (isAddColumnBtn) {
    const rows = table.querySelectorAll('tr');

    if (rows[0].cells.length >= 10 || rows[0].cells.length === 0) {
      return;
    }

    rows.forEach((tr) => {
      tr.append(tr.cells[tr.cells.length - 1].cloneNode(true));
    });

    updateButtonStates();
  }

  if (isDeleteColumnBtn) {
    const rows = table.querySelectorAll('tr');

    if (rows[0].cells.length <= 2) {
      return;
    }

    rows.forEach((tr) => {
      const lastCell = tr.cells[tr.cells.length - 1];

      lastCell.remove();
    });

    updateButtonStates();
  }
});
