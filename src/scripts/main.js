'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  const fieldRow = document.querySelector('tbody tr');
  const currentRow = tbody.children.length;

  if (currentRow >= 10) {
    appendRow.disabled = true;

    return;
  }

  if (fieldRow) {
    const newRow = document.createElement('tr');

    newRow.innerHTML = fieldRow.innerHTML;
    tbody.appendChild(newRow);

    if (currentRow + 1 >= 10) {
      appendRow.disabled = true;
    }
  }

  if (currentRow > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  const allRows = tbody.querySelectorAll('tr');

  if (allRows.length > 2) {
    allRows[allRows.length - 1].remove();

    const newRowCount = tbody.children.length;

    if (newRowCount === 2) {
      removeRow.disabled = true;
    }

    if (newRowCount < 10) {
      appendRow.disabled = false;
    }
  }
});

appendColumn.addEventListener('click', () => {
  const fieldAllRows = [...document.querySelectorAll('tbody tr')];
  const currentColumnCount = fieldAllRows[0]
    ? fieldAllRows[0].children.length
    : 0;

  if (currentColumnCount >= 10) {
    appendColumn.disabled = true;

    return;
  }

  fieldAllRows.forEach((row) => {
    const newColumn = document.createElement('td');

    if (row.children.length > 0) {
      newColumn.innerHTML = row.children[0].innerHTML;
    } else {
      newColumn.innerHTML = '';
    }
    row.appendChild(newColumn);
  });

  const newColumnCount = fieldAllRows[0].children.length;

  if (newColumnCount >= 10) {
    appendColumn.disabled = true;
  }

  if (newColumnCount > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const fieldAllRows = [...document.querySelectorAll('tbody tr')];
  const currentColumnCount = fieldAllRows[0]
    ? fieldAllRows[0].children.length
    : 0;

  if (currentColumnCount > 2) {
    fieldAllRows.forEach((row) => {
      row.children[currentColumnCount - 1].remove();
    });
  }

  const newColumnCount = fieldAllRows[0].children.length;

  if (newColumnCount === 2) {
    removeColumn.disabled = true;
  }

  if (newColumnCount < 10) {
    appendColumn.disabled = false;
  }
});
