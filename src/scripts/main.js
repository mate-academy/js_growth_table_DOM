'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');

// додаємо рядки!
function addRows() {
  const newTr = document.createElement('tr');
  const tdCount = document.querySelectorAll('tr:first-child td').length;
  const rowLengthForAdd = tbody.querySelectorAll('tr').length;

  if (rowLengthForAdd >= 10) {
    appendRow.disabled = true;

    return;
  }

  for (let index = 0; index < tdCount; index++) {
    const newTd = document.createElement('td');

    newTr.append(newTd);
  }
  tbody.append(newTr);

  if (rowLengthForAdd + 1 >= 10) {
    appendRow.disabled = true;
  }
  removeRow.disabled = false;
}

// видаляємо рядки!
function removeRows() {
  const rowLengthFroRemove = tbody.querySelectorAll('tr').length;

  if (rowLengthFroRemove <= 2) {
    removeRow.disabled = true;

    return;
  }
  tbody.querySelector('tr').remove();

  if (rowLengthFroRemove - 1 <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
}

// додаємо колонки!
function appendColumns() {
  const tdCountForAdd = document.querySelectorAll('tr:first-child td').length;

  if (tdCountForAdd >= 10) {
    appendColumn.disabled = true;

    return;
  }

  const tr = document.querySelectorAll('tr');

  tr.forEach((t) => {
    const newTd1 = document.createElement('td');

    t.append(newTd1);
  });

  if (tdCountForAdd + 1 >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
}

// видаляємо колонки!
function removeColumns() {
  const tdCountForRemove =
    document.querySelectorAll('tr:first-child td').length;

  if (tdCountForRemove <= 2) {
    removeColumn.disabled = true;

    return;
  }

  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const td = row.querySelector('td');

    td.remove();
  });

  if (tdCountForRemove - 1 <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
}

// ----------------запуск кнопок------------------
appendRow.addEventListener('click', (e) => {
  if (e.target) {
    addRows();
  }
});

removeRow.addEventListener('click', (e) => {
  if (e.target) {
    removeRows();
  }
});

appendColumn.addEventListener('click', (e) => {
  if (e.target) {
    appendColumns();
  }
});

removeColumn.addEventListener('click', (e) => {
  if (e.target) {
    removeColumns();
  }
});
