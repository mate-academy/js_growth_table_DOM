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

      for (let i = 0; i < table.rows[0].cells.length; i++) {
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
    if (table.rows[0].cells.length < maxColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        const newCell = table.rows[i].insertCell();

        newCell.textContent = '';
      }

      updateButtonStates();
    }
  }

  function removeColumn() {
    if (table.rows[0].cells.length > minColumns) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }

      updateButtonStates();
    }
  }

  function updateButtonStates() {
    const numRows = table.rows.length;
    const numColumns = table.rows[0].cells.length;

    if (numRows >= maxRows) {
      appendRowBtn.disabled = true;
    } else {
      appendRowBtn.disabled = false;
    }

    if (numRows <= minRows) {
      removeRowBtn.disabled = true;
    } else {
      removeRowBtn.disabled = false;
    }

    if (numColumns >= maxColumns) {
      appendColumnBtn.disabled = true;
    } else {
      appendColumnBtn.disabled = false;
    }

    if (numColumns <= minColumns) {
      removeColumnBtn.disabled = true;
    } else {
      removeColumnBtn.disabled = false;
    }
  }
});
