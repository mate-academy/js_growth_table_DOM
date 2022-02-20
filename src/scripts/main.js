'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const tr = document.querySelector('tr');
const table = document.querySelector('.field');

container.addEventListener('click', (e) => {
  if (e.target === removeColumn) {
    if (table.children[0].children[0].children.length >= 10) {
      appendColumn.disabled = false;
    }

    if (table.children[0].children[0].children.length > 2) {
      for (const i of table.children[0].children) {
        i.lastChild.remove();
      }
    }
    if (table.children[0].children[0].children.length === 2) {
      removeColumn.disabled = true;
    }
  }

  if (e.target === removeRow) {
    if (table.children[0].children.length >= 10) {
      appendRow.disabled = false;
    }

    if (table.children[0].children.length > 2) {
      table.children[0].lastChild.remove();
    }
    if (table.children[0].children.length === 2) {
      removeRow.disabled = true;
    }
  }

  if (e.target === appendRow) {
    const row = document.createElement('tr');

    if (table.children[0].children.length > 1) {
      removeRow.disabled = false;
    }

    for (let i = 0; i < tr.children.length; i++) {
      const td = document.createElement('td');

      row.append(td);
    }

    if (table.children[0].children.length < 10) {
      table.children[0].append(row);
    }
    if (table.children[0].children.length === 10) {
      appendRow.disabled = true;
    }
  }

  if (e.target === appendColumn) {
    if (table.children[0].children[0].children.length > 1) {
      removeColumn.disabled = false;
    }

    if (table.children[0].children[0].children.length < 10) {
      for (const i of table.children[0].children) {
        const el = document.createElement('td');

        i.append(el);
      }
    }
    if (table.children[0].children[0].children.length === 10) {
      appendColumn.disabled = true;
    }
  }
});
