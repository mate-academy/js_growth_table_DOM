'use strict';

// write code here

const addRow = document.querySelector('.append-row');
const rmRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const rmColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
let field = table.querySelector('tbody');

if (!field) {
  field = document.createElement('tbody');

  while (table.firstElementChild && table.firstElementChild.tagName === 'TR') {
    field.appendChild(table.firstElementChild);
  }
  table.appendChild(field);
}

const rows = () => field.querySelectorAll('tr').length;
const columns = () => {
  const f = field.querySelector('tr');

  return f ? f.children.length : 0;
};
const min = 2;
const max = 10;

function updateButtons() {
  addRow.disabled = rows() >= max;
  rmRow.disabled = rows() <= min;
  addColumn.disabled = columns() >= max;
  rmColumn.disabled = columns() <= min;
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.append-row')) {
    if (rows() < max) {
      const tr = document.createElement('tr');

      for (let i = 0; i < columns(); i++) {
        const td = document.createElement('td');

        tr.appendChild(td);
      }
      field.appendChild(tr);
    }
    updateButtons();
  } else if (e.target.closest('.remove-row')) {
    if (rows() > min) {
      const trs = field.querySelectorAll('tr');

      if (trs.length > min) {
        trs[trs.length - 1].remove();
      }
    }
    updateButtons();
  } else if (e.target.closest('.append-column')) {
    if (columns() < max) {
      for (const tr of field.querySelectorAll('tr')) {
        const td = document.createElement('td');

        tr.appendChild(td);
      }
    }
    updateButtons();
  } else if (e.target.closest('.remove-column')) {
    if (columns() > min) {
      for (const tr of field.querySelectorAll('tr')) {
        tr.lastElementChild.remove();
      }
    }
    updateButtons();
  }
});
