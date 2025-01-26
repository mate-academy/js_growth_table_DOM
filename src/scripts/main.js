const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tbody = document.querySelector('tbody');

function updateButtonState() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  appendRowButton.disabled = rows >= 10;
  removeRowButton.disabled = rows <= 2;

  appendColumnButton.disabled = cols >= 10;
  removeColumnButton.disabled = cols <= 2;
}

appendRowButton.addEventListener('click', () => {
  const rows = table.rows.length;

  if (rows >= 10) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];
  const newRow = lastRow.cloneNode(true);

  tbody.appendChild(newRow);
  updateButtonState();
});

removeRowButton.addEventListener('click', () => {
  const rows = table.rows.length;

  if (rows <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);
  updateButtonState();
});

appendColumnButton.addEventListener('click', () => {
  const cols = table.rows[0].cells.length;

  if (cols >= 10) {
    return;
  }

  for (const row of table.rows) {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  }
  updateButtonState();
});

removeColumnButton.addEventListener('click', () => {
  const cols = table.rows[0].cells.length;

  if (cols <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }
  updateButtonState();
});

updateButtonState();
