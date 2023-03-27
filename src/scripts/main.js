'use strict';

// write code here

const table = document.querySelector('.field');
const tbody = document.querySelector('tbody');
const tr = document.querySelector('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row ');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

appendRow.addEventListener('click', (e) => {
  const countRows = table.rows.length;

  if (countRows >= maxCount) {
    appendRow.disabled = 'true';

    return;
  };

  if (countRows === minCount) {
    removeRow.disabled = !removeRow.disabled;
  }

  const item = tbody.lastElementChild.cloneNode(true);

  tbody.append(item);
});

removeRow.addEventListener('click', e => {
  const countRows = table.rows.length;

  if (countRows <= minCount) {
    removeRow.disabled = 'true';

    return;
  }

  if (countRows === maxCount) {
    appendRow.disabled = !appendRow.disabled;
  }

  tbody.removeChild(tbody.lastChild);
});

appendColumn.addEventListener('click', (e) => {
  const tableColumns = tr.children.length;

  if (tableColumns >= maxCount) {
    appendColumn.disabled = 'true';

    return;
  }

  if (tableColumns === minCount) {
    removeColumn.disabled = !removeColumn.disabled;
  }

  const allRows = [...tbody.children];

  allRows.map(item => {
    const el = item.lastElementChild.cloneNode(true);

    item.append(el);
  });
});

removeColumn.addEventListener('click', (e) => {
  const tableColumns = tr.children.length;

  if (tableColumns <= minCount) {
    removeColumn.disabled = 'true';

    return;
  }

  if (tableColumns === maxCount) {
    appendColumn.disabled = !appendColumn.disabled;
  }

  const allRows = [...tbody.children];

  allRows.forEach(item => {
    item.removeChild(item.lastElementChild);
  });
});
