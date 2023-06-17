'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const trElements = document.querySelector('tr');
const tbody = document.querySelector('tbody');


addRow.addEventListener('click', function () {
    const trClone = trElements.cloneNode(true)
    tbody.append(trClone)

    let rowLength = tbody.querySelectorAll('tr').length

    if (rowLength <= 2 || rowLength >= 10) {
      addRow.disabled = true
    } else if (rowLength > 2 || rowLength < 10) {
        removeRow.disabled = false
      }
});

removeRow.addEventListener('click', function () {
  tbody.lastChild.remove()

  let rowLength = tbody.querySelectorAll('tr').length

  if (rowLength <= 2 || rowLength >= 10) {
    removeRow.disabled = true
  } else if (rowLength > 2 || rowLength < 10) {
    addRow.disabled = false
  }
});

addColumn.addEventListener('click', function () {
  const elTbody = tbody.querySelectorAll('tr')

  for (const element of elTbody) {
    const newColumn = document.createElement('td');
    element.append(newColumn);
  }

  let columnLength = trElements.querySelectorAll('td').length

  if (columnLength <= 2 || columnLength >= 10) {
    addColumn.disabled = true
  } else if (columnLength > 2 || columnLength < 10) {
    removeColumn.disabled = false
  }
});

removeColumn.addEventListener('click', function () {
  const elTbody = tbody.querySelectorAll('tr')

  for (const element of elTbody) {
    element.lastChild.remove()
  }

  let columnLength = trElements.querySelectorAll('td').length

  if (columnLength <= 2 || columnLength >= 10) {
    removeColumn.disabled = true
  } else if (columnLength > 2 || columnLength < 10) {
    addColumn.disabled = false
  }
});
