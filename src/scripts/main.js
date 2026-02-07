'use strict';

'use strict';

// elements
const table = document.querySelector('.field');
const bthAddRow = document.querySelector('.append-row');
const bthRemoveRow = document.querySelector('.remove-row');
const bthAddCol = document.querySelector('.append-column');
const bthRemoveCol = document.querySelector('.remove-column');

// constants
const MIN = 2;
const MAX = 10;

// helpers
function getSize() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  return { rows, cols };
}

function updateButtons() {
  const { rows, cols } = getSize();

  bthAddRow.disabled = rows >= MAX;
  bthRemoveRow.disabled = rows <= MIN;
  bthAddCol.disabled = cols >= MAX;
  bthRemoveCol.disabled = cols <= MIN;
}

// + row
bthAddRow.addEventListener('click', () => {
  const { rows, cols } = getSize();

  if (rows >= MAX) {
    return;
  }

  const tr = table.insertRow(); // ✅ correct tbody insert

  for (let i = 0; i < cols; i++) {
    tr.insertCell();
  }

  updateButtons();
});

// - row
bthRemoveRow.addEventListener('click', () => {
  const { rows } = getSize();

  if (rows <= MIN) {
    return;
  }
  table.deleteRow(-1);
  updateButtons();
});

// + column
bthAddCol.addEventListener('click', () => {
  const { cols } = getSize();

  if (cols >= MAX) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

// - column
bthRemoveCol.addEventListener('click', () => {
  const { cols } = getSize();

  if (cols <= MIN) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtons();
});

// init
updateButtons();
