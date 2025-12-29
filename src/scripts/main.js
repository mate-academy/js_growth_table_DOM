'use strict';

const tbody = document.querySelector('tbody');

addEventListener('click', (e) => {
  const columns = tbody.querySelectorAll('td');
  const rows = tbody.querySelectorAll('tr');
  let rowCount = rows.length;
  let columnCount = columns.length / rowCount;
  const addRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const addColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  switch (e.target) {
    case addRow: {
      if (rowCount < 10) {
        if (removeRow.hasAttribute('disabled')) {
          removeRow.removeAttribute('disabled');
        }

        const newRow = document.createElement('tr');

        for (let i = 0; i < columnCount; i++) {
          const newColumn = document.createElement('td');

          newRow.append(newColumn);
        }

        tbody.append(newRow);
        rowCount += 1;
      }

      if (rowCount === 10) {
        addRow.setAttribute('disabled', '');
      }
      break;
    }

    case addColumn: {
      if (columnCount < 10) {
        if (removeColumn.hasAttribute('disabled')) {
          removeColumn.removeAttribute('disabled');
        }

        for (let i = 0; i < rowCount; i++) {
          const newColumn = document.createElement('td');

          rows[i].append(newColumn);
        }
        columnCount += 1;
      }

      if (columnCount === 10) {
        addColumn.setAttribute('disabled', '');
      }
      break;
    }

    case removeRow: {
      if (rowCount > 2) {
        if (addRow.hasAttribute('disabled')) {
          addRow.removeAttribute('disabled');
        }
        tbody.removeChild(rows[rows.length - 1]);
        rowCount -= 1;
      }

      if (rowCount === 2) {
        removeRow.setAttribute('disabled', '');
      }
      break;
    }

    case removeColumn: {
      if (columnCount > 2) {
        if (addColumn.hasAttribute('disabled')) {
          addColumn.removeAttribute('disabled');
        }

        for (let i = 0; i < rowCount; i++) {
          const tempColumns = rows[i].querySelectorAll('td');

          rows[i].removeChild(tempColumns[tempColumns.length - 1]);
        }
        columnCount -= 1;
      }

      if (columnCount === 2) {
        removeColumn.setAttribute('disabled', '');
      }
      break;
    }
  }
});
