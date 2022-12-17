'use strict';

const field = document.querySelector('.container');
const tBody = document.querySelector('tbody');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

function addRow(table) {
  table.lastElementChild.after(table.lastElementChild.cloneNode(true));
}

function removeRow(table) {
  table.lastElementChild.remove();
}

function addColumn(table) {
  Array.from(table.rows).forEach(row => row
    .lastElementChild
    .after(row.lastElementChild.cloneNode(true))
  );
}

function removeColumn(table) {
  Array.from(table.rows).forEach(row => row
    .lastElementChild.remove()
  );
}

function setAttrDisabled(el) {
  el.setAttribute('disabled', '');
}

function removeAttrDisabled(el) {
  el.removeAttribute('disabled');
}

field.addEventListener('click', (ev) => {
  const buttons = ev.target.closest('.button');
  const lengthRows = tBody.rows.length;
  const lengthCells = tBody.rows[0].cells.length;

  if (!buttons) {
    return;
  }

  const maxLengthRows = 9;
  const minLengthRows = 3;
  const maxLengthCol = 9;
  const minLengthCol = 3;

  switch (buttons) {
    case addRowBtn:
      if (lengthRows <= maxLengthRows) {
        addRow(tBody);
        removeAttrDisabled(removeRowBtn);
      }

      if (lengthRows === maxLengthRows) {
        setAttrDisabled(addRowBtn);
      }
      break;

    case removeRowBtn:
      if (lengthRows >= minLengthRows) {
        removeRow(tBody);
        removeAttrDisabled(addRowBtn);
      }

      if (lengthRows <= minLengthRows) {
        setAttrDisabled(removeRowBtn);
      }
      break;

    case addColBtn:
      if (lengthCells <= maxLengthCol) {
        addColumn(tBody);
        removeAttrDisabled(removeColBtn);
      }

      if (lengthCells >= maxLengthCol) {
        setAttrDisabled(addColBtn);
      }
      break;

    case removeColBtn:
      if (lengthCells >= minLengthCol) {
        removeColumn(tBody);
        removeAttrDisabled(addColBtn);
      }

      if (lengthCells <= minLengthCol) {
        setAttrDisabled(removeColBtn);
      }
      break;
  }
});
