'use strict';

// write code here
const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    const rowsAmount = table.rows.length;
    const cellsAmount = table.rows[0].cells.length;
    const clickedButton = e.target;

    switch (clickedButton.classList[0]) {
      case 'append-row':
        const row = document.createElement('tr');

        row.insertAdjacentHTML(
          'afterbegin', `${'<td></td>'.repeat(cellsAmount)}`
        );
        table.append(row);

        removeRow.disabled = false;

        if (rowsAmount >= 9) {
          appendRow.disabled = true;
        }
        break;

      case 'remove-row':
        table.deleteRow(rowsAmount - 1);

        appendRow.disabled = false;

        if (rowsAmount === 3) {
          removeRow.disabled = true;
        }
        break;

      case 'append-column':
        for (let i = 0; i < rowsAmount; i++) {
          const td = document.createElement('td');

          table.rows[i].insertAdjacentElement('beforeend', td);
        }

        removeColumn.disabled = false;

        if (cellsAmount >= 9) {
          appendColumn.disabled = true;
        }
        break;

      case 'remove-column':
        for (let i = 0; i < rowsAmount; i++) {
          table.rows[i].deleteCell(cellsAmount - 1);
        }

        appendColumn.disabled = false;

        if (cellsAmount === 3) {
          removeColumn.disabled = true;
        }
        break;
    }
  });
}
