'use strict';

const table = document.querySelector('.field');
const buttons = document.querySelectorAll('.button');

const appendRowButt = document.querySelector('.append-row');
const removeRowButt = document.querySelector('.remove-row');
const appendColumnButt = document.querySelector('.append-column');
const removeColumnButt = document.querySelector('.remove-column');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const tBody = table.querySelector('tbody');
    const rows = table.querySelectorAll('tr');

    if (e.target === appendRowButt) {
      if (tBody.children.length < 10) {
        const newRow = tBody.insertRow();

        for (let i = 0; i < rows[0].cells.length; i++) {
          newRow.insertCell();
        }

        if (tBody.children.length === 10) {
          e.target.setAttribute('disabled', '');
        }

        if (
          tBody.children.length === 3 &&
          removeRowButt.hasAttribute('disabled')
        ) {
          removeRowButt.removeAttribute('disabled');
        }
      }
    } else if (e.target === removeRowButt) {
      if (tBody.children.length > 2) {
        tBody.deleteRow(0);

        if (tBody.children.length === 2) {
          e.target.setAttribute('disabled', '');
        }

        if (
          tBody.children.length === 9 &&
          appendRowButt.hasAttribute('disabled')
        ) {
          appendRowButt.removeAttribute('disabled');
        }
      }
    } else if (e.target === appendColumnButt) {
      if (rows[0].cells.length < 10) {
        rows.forEach((row) => {
          row.insertCell();
        });

        if (rows[0].cells.length === 10) {
          appendColumnButt.setAttribute('disabled', '');
        }

        if (
          rows[0].cells.length === 3 &&
          removeColumnButt.hasAttribute('disabled')
        ) {
          removeColumnButt.removeAttribute('disabled');
        }
      }
    } else if (e.target.classList.contains('remove-column')) {
      if (rows[0].cells.length > 2) {
        rows.forEach((row) => {
          row.deleteCell(0);
        });
      }

      if (rows[0].cells.length === 2) {
        removeColumnButt.setAttribute('disabled', '');
      }

      if (
        rows[0].cells.length === 9 &&
        appendColumnButt.hasAttribute('disabled')
      ) {
        appendColumnButt.removeAttribute('disabled');
      }
    }
  });
});
