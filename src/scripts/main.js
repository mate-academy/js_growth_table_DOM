const table = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const maxLimit = 10;
const minLimit = 2;

function updateButtonStates() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  addRowBtn.disabled = rowCount >= maxLimit;
  removeRowBtn.disabled = rowCount <= minLimit;
  addColBtn.disabled = colCount >= maxLimit;
  removeColBtn.disabled = colCount <= minLimit;
}

function removeRow() {
  if (table.rows.length > minLimit) {
    table.deleteRow(-1);
  }
  updateButtonStates();
}

function removeColumn() {
  if (table.rows[0].cells.length > minLimit) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }
  updateButtonStates();
}

function addRow() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (rowCount < maxLimit) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      const newCell = newRow.insertCell();

      newCell.classList.add('cell');
    }
  }
  updateButtonStates();
}

function addColumn() {
  const colCount = table.rows[0].cells.length;

  if (colCount < maxLimit) {
    for (const row of table.rows) {
      const newCell = row.insertCell();

      newCell.classList.add('cell');
    }
  }
  updateButtonStates();
}

addRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
addColBtn.addEventListener('click', addColumn);
removeColBtn.addEventListener('click', removeColumn);

updateButtonStates();
