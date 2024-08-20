'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRowButton.addEventListener('click', (e) => {
  const rowAdd = document.querySelector('table tr');
  const rowAddCopy = rowAdd.cloneNode(true);
  const rowAll = document.querySelectorAll('table tr');

  removeRowButton.style.display = 'block';

  if (rowAll.length > 9) {
    return;
  }

  if (rowAll.length > 8) {
    appendRowButton.style.display = 'none';
  }

  table.append(rowAddCopy);
});

removeRowButton.addEventListener('click', (e) => {
  const rowRemove = document.querySelector('table tr');
  const rowAll = document.querySelectorAll('table tr');

  appendRowButton.style.display = 'block';

  if (rowAll.length < 3) {
    return;
  }

  if (rowAll.length <= 3) {
    removeRowButton.style.display = 'none';
  }

  rowRemove.remove();
});

appendColumnButton.addEventListener('click', (e) => {
  const rowAll = document.querySelectorAll('table tr');

  removeColumnButton.style.display = 'block';

  rowAll.forEach((r) => {
    const cell = document.querySelector('td');
    const cellCopy = cell.cloneNode(true);
    const row = document.querySelector('table tr');

    if (row.children.length > 10) {
      return;
    }

    if (row.children.length > 9) {
      appendColumnButton.style.display = 'none';
    }

    r.append(cellCopy);
  });
});

removeColumnButton.addEventListener('click', (e) => {
  const rowAll = document.querySelectorAll('table tr');

  rowAll.forEach((r) => {
    const cell = document.querySelectorAll('tr td');
    const row = document.querySelector('table tr');

    if (cell.length === 3) {
      return;
    }

    if (row.children.length < 3) {
      removeColumnButton.style.display = 'none';
    }

    r.lastChild.remove();
  });
});
