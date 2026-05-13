'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');

function updateButtonsState() {
  const rows = field.querySelectorAll('tr');

  const columnsCount = rows.length > 0 ? rows[0].cells.length : 0;

  const appendRowBtn = container.querySelector('.append-row');
  const removeRowBtn = container.querySelector('.remove-row');
  const appendColumnBtn = container.querySelector('.append-column');
  const removeColumnBtn = container.querySelector('.remove-column');

  appendRowBtn.disabled = rows.length >= 10;
  appendRowBtn.classList.toggle('disabled', rows.length >= 10);

  removeRowBtn.disabled = rows.length <= 2;
  removeRowBtn.classList.toggle('disabled', rows.length <= 2);

  appendColumnBtn.disabled = columnsCount >= 10;
  appendColumnBtn.classList.toggle('disabled', columnsCount >= 10);

  removeColumnBtn.disabled = columnsCount <= 2;
  removeColumnBtn.classList.toggle('disabled', columnsCount <= 2);
}

updateButtonsState();

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const rows = field.querySelectorAll('tr');
  const currentColumnsCount = rows.length > 0 ? rows[0].cells.length : 4;
  const targetContainer = field.querySelector('tbody') || field;

  if (e.target.classList.contains('append-row') && rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < currentColumnsCount; i++) {
      newRow.appendChild(document.createElement('td'));
    }
    targetContainer.appendChild(newRow);
  }

  if (e.target.classList.contains('remove-row') && rows.length > 2) {
    rows[rows.length - 1].remove();
  }

  if (
    e.target.classList.contains('append-column') &&
    currentColumnsCount < 10
  ) {
    rows.forEach((row) => {
      row.appendChild(document.createElement('td'));
    });
  }

  if (e.target.classList.contains('remove-column') && currentColumnsCount > 2) {
    rows.forEach((row) => {
      const lastTd = row.lastElementChild;

      if (lastTd) {
        lastTd.remove();
      }
    });
  }

  updateButtonsState();
});
