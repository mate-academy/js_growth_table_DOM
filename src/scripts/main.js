'use strict';

const tbody = document.querySelector('tbody');

const buttons = document.querySelectorAll('.button');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const rows = tbody.querySelectorAll('tr');
  const countRow = rows.length;

  let countColumn = 0;

  if (countRow > 0) {
    countColumn = rows[0].querySelectorAll('td').length;
  }

  appendRowButton.disabled = countRow >= 10;
  removeRowButton.disabled = countRow <= 2;
  appendColumnButton.disabled = countColumn >= 10;
  removeColumnButton.disabled = countColumn <= 2;
}

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    const targetButton = e.target;

    if (targetButton.classList.contains('append-row')) {
      const tr = document.createElement('tr');

      const trOnTable = document.querySelector('tr');

      if (trOnTable) {
        const countOfTd = trOnTable.cells.length;

        for (let i = 0; i < countOfTd; i++) {
          const td = document.createElement('td');

          tr.append(td);
        }

        tbody.appendChild(tr);

        updateButtons();
      }
    }

    if (targetButton.classList.contains('remove-row')) {
      if (tbody.rows.length > 2) {
        tbody.removeChild(tbody.lastElementChild);
      }

      updateButtons();
    }

    if (targetButton.classList.contains('append-column')) {
      const alltrOnTable = tbody.querySelectorAll('tr');

      for (const tr of alltrOnTable) {
        const td = document.createElement('td');

        tr.append(td);
      }

      updateButtons();
    }

    if (targetButton.classList.contains('remove-column')) {
      const allRows = tbody.querySelectorAll('tr');

      for (const row of allRows) {
        if (row.cells.length > 0) {
          row.deleteCell(-1);
        }
      }

      updateButtons();
    }
  });
}
