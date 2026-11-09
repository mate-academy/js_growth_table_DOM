'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const field = document.querySelector('.field');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

appendRow.addEventListener('click', () => {
  const tr = document.createElement('tr');

  for (let i = 0; i < field.rows[0].cells.length; i++) {
    tr.innerHTML += '<td></td>';
  }

  field.tBodies[0].append(tr);

  disabledButton(field.rows.length, maxRows, appendRow, removeRow);
});

removeRow.addEventListener('click', () => {
  field.rows[field.rows.length - 1].remove();

  disabledButton(field.rows.length, minRows, removeRow, appendRow);
});

appendColumn.addEventListener('click', () => {
  [...field.rows].forEach((row) => {
    row.innerHTML += '<td></td>';
  });

  const cells = field.rows[0].cells.length;

  disabledButton(cells, maxColumns, appendColumn, removeColumn);
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < field.rows.length; i++) {
    field.rows[i].cells[field.rows[i].cells.length - 1].remove();
  }

  const cells = field.rows[0].cells.length;

  disabledButton(cells, minColumns, removeColumn, appendColumn);
});

function disabledButton(lengthRows, whatItShouldBe, offButton, powerButton) {
  if (lengthRows === whatItShouldBe) {
    offButton.disabled = true;
  }
  powerButton.disabled = false;
}
