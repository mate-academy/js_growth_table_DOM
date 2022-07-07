'use strict';

const container = document.querySelector('.container');

const table = container.querySelector('.field');

const body = table.querySelector('tbody');

container.addEventListener('click', (e) => {
  switch (e.target) {
    case container.querySelector('.append-row'):
      const row = table.querySelector('tr');

      const rowAdd = document.createElement('tr');

      const cellAdd = document.createElement('td');

      for (let i = 0; i < row.cells.length; i++) {
        rowAdd.append(cellAdd.cloneNode());
      };

      body.append(rowAdd);

      table.rows.length === 10
        ? container.querySelector('.append-row').disabled = true
        : container.querySelector('.append-row').disabled = false;

      break;

    case container.querySelector('.remove-row'):
      const rowDel = table.querySelector('tr');

      rowDel.remove();

      table.rows.length === 2
        ? container.querySelector('.remove-row').disabled = true
        : container.querySelector('.remove-row').disabled = false;

      break;

    case container.querySelector('.append-column'):
      const colAdd = document.createElement('td');

      for (const item of table.rows) {
        item.append(colAdd.cloneNode());
      };

      const rowApp = table.querySelector('tr');

      rowApp.cells.length === 10
        ? container.querySelector('.append-column').disabled = true
        : container.querySelector('.append-column').disabled = false;

      break;

    case container.querySelector('.remove-column'):
      for (const item of table.rows) {
        const td = item.querySelector('td');

        td.remove();
      };

      const rowRem = table.querySelector('tr');

      rowRem.cells.length === 2
        ? container.querySelector('.remove-column').disabled = true
        : container.querySelector('.remove-column').disabled = false;

      break;
  }
});
