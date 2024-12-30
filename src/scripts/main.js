'use strict';

const table = document.querySelector('table.field');
const buttons = document.querySelectorAll('button.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const tbody = table.querySelector('tbody') || table;

    if (button.classList.contains('append-row')) {
      if (table.rows.length >= 10) {
        return;
      }

      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }

      document.querySelector('.remove-row').disabled = false;

      if (table.rows.length >= 10) {
        button.disabled = true;
      }
    } else if (button.classList.contains('remove-row')) {
      tbody.deleteRow(-1);
      document.querySelector('.append-row').disabled = false;

      if (table.rows.length <= 2) {
        button.disabled = true;
      }
    } else if (button.classList.contains('append-column')) {
      if (table.rows[0].cells.length >= 10) {
        return;
      }

      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }

      document.querySelector('.remove-column').disabled = false;

      if (table.rows[0].cells.length >= 10) {
        button.disabled = true;
      }
    } else if (button.classList.contains('remove-column')) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }

      document.querySelector('.append-column').disabled = false;

      if (table.rows[0].cells.length <= 2) {
        button.disabled = true;
      }
    }
  });
});
