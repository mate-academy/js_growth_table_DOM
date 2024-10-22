'use strict';

const button = document.querySelectorAll('button');
const tBody = document.querySelector('tbody');

button.forEach((item) => {
  // eslint-disable-next-line no-shadow
  item.addEventListener('click', function (event) {
    const catchTheButtonRemove = event.target.closest('.remove-row');
    const catchTheButtonAppend = event.target.closest('.append-row');
    const catchTheButtonRemoveColumn = event.target.closest('.remove-column');
    const catchTheButtonAppendColumn = event.target.closest('.append-column');

    function updateButtonState() {
      button.forEach((btn) => {
        const rowCount = tBody.rows.length;
        const columnCount = tBody.rows[0] ? tBody.rows[0].cells.length : 0;

        if (btn.classList.contains('remove-row')) {
          btn.disabled = rowCount <= 2;
        }

        if (btn.classList.contains('append-row')) {
          btn.disabled = rowCount >= 10;
        }

        if (btn.classList.contains('remove-column')) {
          btn.disabled = columnCount <= 2;
        }

        if (btn.classList.contains('append-column')) {
          btn.disabled = columnCount >= 10;
        }
      });
    }

    if (catchTheButtonRemove) {
      if (tBody.rows.length > 0) {
        tBody.deleteRow(tBody.rows.length - 1);
      }
      updateButtonState();
    }

    if (catchTheButtonAppend) {
      const lastElement = tBody.rows[tBody.rows.length - 1];

      if (lastElement) {
        const copiedRow = lastElement.cloneNode(true);

        tBody.append(copiedRow);
      }
      updateButtonState();
    }

    if (catchTheButtonRemoveColumn) {
      const columnIndex = tBody.rows[0].cells.length - 1;

      for (let i = 0; i < tBody.rows.length; i++) {
        const row = tBody.rows[i];

        row.deleteCell(columnIndex);
      }
      updateButtonState();
    }

    if (catchTheButtonAppendColumn) {
      for (let i = 0; i < tBody.rows.length; i++) {
        const row = tBody.rows[i];

        row.insertCell();
      }
      updateButtonState();
    }
  });
});
