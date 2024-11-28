document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  updateButtonStates();

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  function appendRow() {
    if (table.rows.length < maxRows) {
      const newRow = table.insertRow();
      const numColumns = table.rows.length > 0 ? table.rows[0].cells.length : 0;

      for (let i = 0; i < numColumns; i++) {
        const newCell = newRow.insertCell();

        newCell.textContent = '';
      }

      updateButtonStates();
    }
  }

  function removeRow() {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  }

  function appendColumn() {
    if (table.rows.length > 0 && table.rows[0].cells.length < maxColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        const newCell = table.rows[i].insertCell();

        newCell.textContent = '';
      }
      updateButtonStates();
    }
  }

  function removeColumn() {
    if (table.rows.length > 0 && table.rows[0].cells.length > minColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtonStates();
    }
  }

  function updateButtonStates() {
    const numRows = table.rows.length;
    const numColumns = numRows > 0 ? table.rows[0].cells.length : 0;

    appendRowBtn.disabled = numRows >= maxRows;
    removeRowBtn.disabled = numRows <= minRows;
    appendColumnBtn.disabled = numColumns >= maxColumns;
    removeColumnBtn.disabled = numColumns <= minColumns;
  }
});
