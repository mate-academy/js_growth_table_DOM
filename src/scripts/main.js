'use strict';

function growthTable() {
  const tbody = document.querySelector('table').querySelector('tbody');
  const buttons = document.querySelectorAll('button');

  const controls = {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
  };

  checkButtonsState(tbody, controls);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('append-row')) {
        appendRow(tbody);
      }

      if (button.classList.contains('remove-row')) {
        removeRow(tbody);
      }

      if (button.classList.contains('append-column')) {
        appendColumn(tbody);
      }

      if (button.classList.contains('remove-column')) {
        removeColumn(tbody);
      }

      checkButtonsState(tbody, controls);
    });
  });
}

const checkButtonsState = (tbody, controls) => {
  const rowCount = tbody.children.length;
  const firstRow = tbody.querySelector('tr');
  const columnCount = firstRow ? firstRow.children.length : 0;

  controls.appendRow.disabled = rowCount >= 10;
  controls.removeRow.disabled = rowCount <= 2;
  controls.appendColumn.disabled = columnCount >= 10;
  controls.removeColumn.disabled = columnCount <= 2;
};

const appendRow = (tbody) => {
  if (tbody.children.length >= 10) {
    return;
  }

  const lastRow = tbody.lastElementChild;

  if (lastRow) {
    const cloneLastRowNode = lastRow.cloneNode(true);

    tbody.append(cloneLastRowNode);
  }
};

const removeRow = (tbody) => {
  if (tbody.children.length <= 2) {
    return;
  }

  const lastRow = tbody.lastElementChild;

  if (lastRow) {
    lastRow.remove();
  }
};

const appendColumn = (tbody) => {
  const firstRow = tbody.querySelector('tr');
  const columnCount = firstRow ? firstRow.children.length : 0;

  if (columnCount >= 10) {
    return;
  }

  const listTr = tbody.querySelectorAll('tr');

  listTr.forEach((item) => {
    const createTd = document.createElement('td');

    item.append(createTd);
  });
};

const removeColumn = (tbody) => {
  const firstRow = tbody.querySelector('tr');
  const columnCount = firstRow ? firstRow.children.length : 0;

  if (columnCount <= 2) {
    return;
  }

  const listTr = tbody.querySelectorAll('tr');

  listTr.forEach((item) => {
    const lastTd = item.lastElementChild;

    if (lastTd) {
      lastTd.remove();
    }
  });
};

growthTable();
