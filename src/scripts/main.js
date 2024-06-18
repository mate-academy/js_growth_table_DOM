'use strict';

window.addEventListener('DOMContentLoaded', app);

function app() {
  const container = document.querySelector('.container');
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');
  const tBody = table.tBodies[0];

  const clickHandlerAppendRow = (e) => {
    const target = e.target;
    const rows = table.tBodies[0].rows;

    if (target.contains(appendRow) && rows.length < 10) {
      if (rows.length === 2) {
        removeRow.disabled = false;
      }

      tBody.append(rows[0].cloneNode(true));

      if (rows.length === 10) {
        appendRow.disabled = true;
      }
    }

    if (target.contains(removeRow) && rows.length > 2) {
      if (rows.length === 10) {
        appendRow.disabled = false;
      }

      rows[0].remove();

      if (rows.length === 2) {
        removeRow.disabled = true;
      }
    }

    if (target.contains(appendColumn) && rows[0].children.length < 10) {
      if (rows[0].children.length === 2) {
        removeColumn.disabled = false;
      }

      [...rows].forEach((row) => {
        row.append(row.children[0].cloneNode(true));
      });

      if (rows[0].children.length === 10) {
        appendColumn.disabled = true;
      }
    }

    if (target.contains(removeColumn) && rows[0].children.length > 2) {
      if (rows[0].children.length === 10) {
        appendColumn.disabled = false;
      }

      [...rows].forEach((row) => {
        row.children[0].remove();
      });

      if (rows[0].children.length === 2) {
        removeColumn.disabled = true;
      }
    }
  };

  container.addEventListener('click', clickHandlerAppendRow);
}
