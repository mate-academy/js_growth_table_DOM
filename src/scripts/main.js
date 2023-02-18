'use strict';

const tableBody = document
  .querySelector('table')
  .querySelector('tbody');

const removeRow = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const addColumn = document.querySelector('.append-column');

const maxSize = 10;
const minSize = 2;

  removeRow.addEventListener('click', e => {
    if (tableBody.childElementCount > minSize) {
      tableBody.lastElementChild.remove();

      if (tableBody.childElementCount === minSize) {
        removeRow.setAttribute("disabled", "on");
      } 
      else if (tableBody.childElementCount < maxSize)
        addRow.removeAttribute("disabled");
    }
  });
  
  addRow.addEventListener('click', e => {
    if (tableBody.childElementCount < maxSize) {
      tableBody.append(tableBody.lastElementChild.cloneNode(true))

      if (tableBody.childElementCount === maxSize) {
        addRow.setAttribute("disabled", "on")
      }
      else if (tableBody.childElementCount > minSize) {
        removeRow.removeAttribute("disabled")
      }
    }
  });
  
  removeColumn.addEventListener('click', e => {
    for (const row of tableBody.children) {
      if (row.childElementCount > minSize) {
        row.lastElementChild.remove();

        if (row.childElementCount === minSize) {
          removeColumn.setAttribute("disabled", "on");
        }
        else if (row.childElementCount < maxSize) {
          addColumn.removeAttribute("disabled");
        } 
      }
    }
  });
  
addColumn.addEventListener('click', e => {
  for (const row of tableBody.children) {
    if (row.childElementCount < maxSize) {
      row.append(row.lastElementChild.cloneNode(true));

      if (row.childElementCount === maxSize) {
        addColumn.setAttribute("disabled", "on");
      }
      else if (row.childElementCount > minSize) {
        removeColumn.removeAttribute("disabled");
      }
    } 
  }
});
