'use strict';

const itemOfRows = document.querySelector('tr');
const table = document.querySelector('tbody');
const rows = table.children;
const rowAppenderButton = document.querySelector('.append-row');
const rowRemoverButton = document.querySelector('.remove-row');
const columnAppenderButton = document.querySelector('.append-column');
const columnRemoverButton = document.querySelector('.remove-column');

function toAddRow() {
  rowAppenderButton.addEventListener('click', () => {
    if (table.children.length < 10) {
      const copyRow = itemOfRows.cloneNode(true);

      table.append(copyRow);
    }

    if (table.children.length === 10) {
      rowAppenderButton.setAttribute('disabled', 'true');
    }

    if (table.children.length > 2) {
      rowRemoverButton.removeAttribute('disabled');
    }
  });
}

function toRemoveRow() {
  rowRemoverButton.addEventListener('click', () => {
    if (rows.length > 2) {
      rows[rows.length - 1].remove();
    }

    if (table.children.length === 2) {
      rowRemoverButton.setAttribute('disabled', 'true');
    }

    if (rows.length < 10) {
      rowAppenderButton.removeAttribute('disabled');
    }
  });
}

function toAddColumn() {
  columnAppenderButton.addEventListener('click', () => {
    [...rows].forEach(item => {
      if (item.children.length < 10) {
        const copyDate = item.lastElementChild.cloneNode();

        item.append(copyDate);
      }

      if (item.children.length === 10) {
        columnAppenderButton.setAttribute('disabled', 'true');
      }

      if (item.children.length > 2) {
        columnRemoverButton.removeAttribute('disabled');
      }
    });
  });
}

function toRemoveColumn() {
  columnRemoverButton.addEventListener('click', () => {
    [...rows].forEach(item => {
      if (item.children.length > 2) {
        item.lastElementChild.remove();
      }

      if (item.children.length === 2) {
        columnRemoverButton.setAttribute('disabled', 'true');
      }

      if (item.children.length < 10) {
        columnAppenderButton.removeAttribute('disabled');
      }
    });
  });
}

toAddRow();
toRemoveRow();
toAddColumn();
toRemoveColumn();
