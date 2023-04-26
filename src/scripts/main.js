'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const tbody = field.tBodies[0];
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  if (e.target.matches('.append-row')) {
    const newTr = document.querySelector('tr').cloneNode(true);

    if (tbody.children.length >= 10) {
      e.target.disabled = true;
    }

    if (tbody.children.length >= 2) {
      removeRow.disabled = false;
    }
    tbody.append(newTr);
  }

  if (e.target.matches('.remove-row')) {
    tbody.lastChild.remove();

    if (tbody.children.length <= 2) {
      e.target.disabled = true;
    }

    if (tbody.children.length <= 10) {
      appendRow.disabled = false;
    }
  }

  if (e.target.matches('.append-column')) {
    [...field.rows].forEach(tr => {
      tr.innerHTML += `
      <tr>
        <td></td>
      </tr>`;

      if (tr.children.length >= 10) {
        e.target.disabled = true;
      }

      if (tr.children.length >= 2) {
        removeColumn.disabled = false;
      }
    });
  }

  if (e.target.matches('.remove-column')) {
    [...field.rows].forEach(td => {
      td.lastChild.remove();

      if (td.children.length <= 2) {
        e.target.disabled = true;
      }

      if (td.children.length >= 2) {
        appendColumn.disabled = false;
      }
    });
  }
});
