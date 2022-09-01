'use strict';

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const appendColumn = document.querySelector('.append-column');
const buttons = document.querySelectorAll('.button');
const trLength = document.querySelectorAll('tr').length;
const trChildren = document.querySelector('tr').children.length;

const columns = document.querySelectorAll('tr')
const maxLength = 10;
const minLength = 2;


buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;

    switch (clickedButton) {
      case appendRow: 
        const row = table.querySelector('tr').cloneNode(true);
        table.append(row);
        break;

      case removeRow:
        document.querySelector('tr:last-child').remove();
        break;

      case appendColumn:
        const column = table.querySelectorAll('tr');

        column.forEach(col => {
          col.append(document.createElement('td'));
        });
        break;

      case removeColumn:
        document.querySelectorAll('td:last-child')
          .forEach(td => td.remove());
        break;
    }

    appendRow.disabled = trLength >= maxLength;
    removeRow.disabled = trLength <= minLength;
    appendColumn.disabled = trChildren >= maxLength;
    removeColumn.disabled = trChildren <= minLength;
  });
});
