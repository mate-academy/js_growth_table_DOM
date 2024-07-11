'use strict';

const buttons = [...document.querySelectorAll('.button')];
const container = document.querySelector('.container');
const table = document.querySelector('table');

const buttonUpdate = () => {
  const rowsLength = table.rows.length;
  const columnsLength = table.rows[0].cells.length;

  buttons[0].disabled = rowsLength >= 10;
  buttons[1].disabled = rowsLength <= 2;
  buttons[2].disabled = columnsLength >= 10;
  buttons[3].disabled = columnsLength <= 2;
};

container.addEventListener('click', (e) => {
  const button = buttons.indexOf(e.target);

  switch (button) {
    case 0:
      const tr = document.createElement('tr');
      const tdLength = table.rows[0].cells.length;

      for (let i = 0; i < tdLength; i++) {
        const td = document.createElement('td');

        tr.appendChild(td);
      }
      table.appendChild(tr);
      buttonUpdate();
      break;

    case 1:
      table.deleteRow(-1);
      buttonUpdate();
      break;

    case 2:
      for (const row of table.rows) {
        const td = document.createElement('td');

        row.appendChild(td);
      }
      buttonUpdate();
      break;

    case 3:
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      buttonUpdate();
      break;

    default:
      break;
  }
});
