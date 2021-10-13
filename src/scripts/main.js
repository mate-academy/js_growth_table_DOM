'use strict';

const minCell = 2;
const maxCell = 10;
const table = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (events) => {
  const trTegs = document.querySelectorAll('tr');

  switch (events.target.classList[0]) {
    case 'append-row':
      if (table.children.length < maxCell) {
        const trNew = document.createElement('tr');
        let row = '';

        for (let i = 0; i < table.children[0].children.length; i++) {
          row += `<td></td>\n`;
        };

        trNew.innerHTML = row;
        table.append(trNew);
      }

      break;

    case 'remove-row':
      table.lastElementChild.remove();
      break;

    case 'append-column':
      if (trTegs[0].children.length < maxCell) {
        trTegs.forEach((teTeg) => {
          const newTeg = document.createElement('td');

          teTeg.append(newTeg);
        });
      }

      break;

    case 'remove-column':
      trTegs.forEach((trTeg) => {
        trTeg.lastElementChild.remove();
      });
  }
  appendColumn.disabled = trTegs[0].children.length === maxCell;
  removeColumn.disabled = trTegs[0].children.length === minCell;
  appendRow.disabled = table.children.length === maxCell;
  removeRow.disabled = table.children.length === minCell;
});
