'use strict';

// write code here
const container = document.querySelector('.container');
const field = document.querySelector('.field');
const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');
const minCells = 2;
const maxCells = 10;

container.addEventListener('click', manageTable);

function manageTable(e) {
  const target = e.target;

  if (!target.classList.contains('button').disabled) {
    if (target.classList.contains('append-row')) {
      if (field.rows.length < maxCells) {
        appendRow(field);

        if (field.rows.length === maxCells) {
          if (!btnAppendRow.disabled) {
            btnAppendRow.disabled = true;
          }
        }

        if (btnRemoveRow.disabled) {
          btnRemoveRow.disabled = false;
        }
      }
    }

    if (target.classList.contains('remove-row')) {
      if (field.rows.length > minCells) {
        removeRow(field);

        if (field.rows.length === minCells) {
          if (!btnRemoveRow.disabled) {
            btnRemoveRow.disabled = true;
          }
        }

        if (btnAppendRow.disabled) {
          btnAppendRow.disabled = false;
        }
      }
    }

    if (target.classList.contains('append-column')) {
      if (field.rows[0].children.length < maxCells) {
        appendColumn(field);

        if (field.rows[0].children.length === maxCells) {
          if (!btnAppendCol.disabled) {
            btnAppendCol.disabled = true;
          }
        }

        if (btnRemoveCol.disabled) {
          btnRemoveCol.disabled = false;
        }
      }
    }

    if (target.classList.contains('remove-column')) {
      if (field.rows[0].children.length > minCells) {
        removeColumn(field);

        if (field.rows[0].children.length === minCells) {
          if (!btnRemoveCol.disabled) {
            btnRemoveCol.disabled = true;
          }
        }

        if (btnAppendCol.disabled) {
          btnAppendCol.disabled = false;
        }
      }
    }
  }
}

function appendRow(table) {
  const newRow = table.insertRow(-1);

  for (let i = 0; i < table.rows.item(0).children.length; i++) {
    newRow.insertCell(i);
  }
}

function removeRow(table) {
  table.deleteRow(-1);
}

function appendColumn(table) {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(-1);
  }
}

function removeColumn(table) {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }
}
