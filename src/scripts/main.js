'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('.field').tBodies[0];

appendRow.addEventListener('click', (e) => {
  if ([...table.rows].length < 10) {
    const copy = [...table.rows].at(-1).cloneNode(true);

    table.appendChild(copy);
    removeRow.removeAttribute('disabled');
  }

  if ([...table.rows].length === 10) {
    e.target.setAttribute('disabled', 'true');
  }

  // console.log('adding row');
});

removeRow.addEventListener('click', (e) => {
  if ([...table.rows].length > 2) {
    table.deleteRow([...table.rows].length - 1);
    appendRow.removeAttribute('disabled');
  }

  if ([...table.rows].length === 2) {
    e.target.setAttribute('disabled', 'true');
  }
  // console.log('removing row');
});

appendCol.addEventListener('click', (e) => {
  if (table.rows[0].cells.length < 10) {
    for (const item of table.rows) {
      item.insertCell();
      removeCol.removeAttribute('disabled');
    }
    // console.log('adding col');
  }

  if (table.rows[0].cells.length === 10) {
    e.target.setAttribute('disabled', 'true');
  }
});

removeCol.addEventListener('click', (e) => {
  if (table.rows[0].cells.length > 2) {
    for (const item of table.rows) {
      item.deleteCell(-1);
      appendCol.removeAttribute('disabled');
    }
    // console.log('removing col');
  }

  if (table.rows[0].cells.length === 2) {
    e.target.setAttribute('disabled', 'true');
  }
});
