'use strict';

const table = document.querySelector('.field');
const buttons = document.querySelectorAll('button');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const updateButtons = () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_COUNT;
  appendColBtn.disabled = colCount >= MAX_COUNT;
  removeRowBtn.disabled = rowCount <= MIN_COUNT;
  removeColBtn.disabled = colCount <= MIN_COUNT;

  return {
    canAppendRow: rowCount < MAX_COUNT,
    canRemoveRow: rowCount > MIN_COUNT,
    canAppendCol: colCount < MAX_COUNT,
    canRemoveCol: colCount > MIN_COUNT
  };
};

const appendRow = () => {
  const { canAppendRow } = updateButtons();
  if (!canAppendRow) return;

  const colCount = table.rows[0].cells.length;
  const newRow = table.insertRow();
  for (let i = 0; i < colCount; i++) newRow.insertCell();

  updateButtons();
};

const removeRow = () => {
  const { canRemoveRow } = updateButtons();
  if (!canRemoveRow) return;

  table.deleteRow(table.rows.length - 1);
  updateButtons();
};

const appendColumn = () => {
  const { canAppendCol } = updateButtons();
  if (!canAppendCol) return;

  const rowCount = table.rows.length;
  for (let i = 0; i < rowCount; i++) table.rows[i].insertCell();

  updateButtons();
};

const removeColumn = () => {
  const { canRemoveCol } = updateButtons();
  if (!canRemoveCol) return;

  const rowCount = table.rows.length;
  for (let i = 0; i < rowCount; i++) table.rows[i].deleteCell(table.rows[i].cells.length - 1);

  updateButtons();
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.className.split(" ")[0];
    switch (action) {
      case "append-row": appendRow(); break;
      case "remove-row": removeRow(); break;
      case "append-column": appendColumn(); break;
      case "remove-column": removeColumn(); break;
    }
  });
});

updateButtons();
