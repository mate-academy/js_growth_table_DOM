'use strict';

const itemOfRows = document.querySelector('tr');
const table = document.querySelector('tbody');
const rows = table.children;
const rowAppenderButton = document.querySelector('.append-row');
const rowRemoverButton = document.querySelector('.remove-row');
const columnAppenderButton = document.querySelector('.append-column');
const columnRemoverButton = document.querySelector('.remove-column');

function toDisableButton(item, limit, button) {
  if (item.length === limit) {
    button.setAttribute('disabled', 'true');
  }
}

function toAddRow() {
  rowAppenderButton.addEventListener('click', () => {
    if (rows.length < 10) {
      const copyRow = itemOfRows.cloneNode(true);

      table.append(copyRow);
    }

    toDisableButton(rows, 10, rowAppenderButton);
    rowRemoverButton.removeAttribute('disabled');
  });
}

function toRemoveRow() {
  rowRemoverButton.addEventListener('click', () => {
    if (rows.length > 2) {
      rows[rows.length - 1].remove();
    }

    toDisableButton(rows, 2, rowRemoverButton);
    rowAppenderButton.removeAttribute('disabled');
  });
}

function toAddColumn() {
  columnAppenderButton.addEventListener('click', () => {
    [...rows].forEach(item => {
      if (item.children.length < 10) {
        const copyDate = item.lastElementChild.cloneNode();

        item.append(copyDate);
      }

      toDisableButton(item.children, 10, columnAppenderButton);
      columnRemoverButton.removeAttribute('disabled');
    });
  });
}

function toRemoveColumn() {
  columnRemoverButton.addEventListener('click', () => {
    [...rows].forEach(item => {
      if (item.children.length > 2) {
        item.lastElementChild.remove();
      }

      toDisableButton(item.children, 2, columnRemoverButton);
      columnAppenderButton.removeAttribute('disabled');
    });
  });
}

toAddRow();
toRemoveRow();
toAddColumn();
toRemoveColumn();
