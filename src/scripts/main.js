'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const container = document.querySelector('.container');

const table = document.querySelector('.field');

const maxSize = 10;
const minSize = 2;

container.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  let rowCounter = table.querySelectorAll('tr').length;
  let columnCounter = rows[0].querySelectorAll('td').length;

  switch (true) {
    case event.target.classList.contains('append-row'): {
      removeRow.disabled = false;

      if (rowCounter !== maxSize) {
        const row = table.querySelector('tr');
        const newRow = document.createElement('tr');

        for (let i = 0; i < row.children.length; i++) {
          newRow.append(document.createElement('td'));
        }

        table.append(newRow);
        rowCounter++;
      }

      break;
    }

    case event.target.classList.contains('remove-row'): {
      addRow.disabled = false;

      if (rowCounter !== minSize) {
        table.querySelector('tr').remove();
        rowCounter--;
      }

      break;
    }

    case event.target.classList.contains('append-column'): {
      removeColumn.disabled = false;

      if (columnCounter !== maxSize) {
        for (const row of rows) {
          row.append(document.createElement('td'));
        }
        columnCounter++;
      }

      break;
    }

    case event.target.classList.contains('remove-column'): {
      addColumn.disabled = false;

      if (columnCounter !== minSize) {
        for (const row of rows) {
          row.querySelector('td').remove();
        }

        columnCounter--;
      }

      break;
    }
  }

  if (rowCounter === maxSize) {
    addRow.disabled = true;
  }

  if (rowCounter === minSize) {
    removeRow.disabled = true;
  }

  if (columnCounter === maxSize) {
    addColumn.disabled = true;
  }

  if (columnCounter === minSize) {
    removeColumn.disabled = true;
  }
});
