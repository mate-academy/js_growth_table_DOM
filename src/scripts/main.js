'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const minCells = 2;
const maxCells = 10;

container.addEventListener('click', e => {
  const btn = e.target.closest('button');

  if (!btn || !container.contains(btn)) {
    return;
  };

  const btnClassName = e.target.className;

  if (btnClassName.includes('append-row')) {
    table.children[0].append(table.rows[0].cloneNode(true));

    if (table.rows.length >= maxCells) {
      btn.disabled = true;
    }
    removeRow.disabled = false;
  }

  if (btnClassName.includes('remove-row')) {
    table.rows[0].remove();

    if (table.rows.length <= minCells) {
      btn.disabled = true;
    }
    appendRow.disabled = false;
  }

  if (btnClassName.includes('append-column')) {
    for (const el of table.rows) {
      const colls = Array.from(el.children);

      el.append(colls[0].cloneNode(true));

      if (el.children.length >= maxCells) {
        btn.disabled = true;
      }
      removeColumn.disabled = false;
    }
  }

  if (btnClassName.includes('remove-column')) {
    for (const el of table.rows) {
      const colls = Array.from(el.children);

      colls[0].remove();

      if (el.children.length <= minCells) {
        btn.disabled = true;
      };
      appendColumn.disabled = false;
    }
  }
});
