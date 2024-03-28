'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removedRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const sizeOfTable = {
  maxCountRows: 10,
  maxCountColumns: 10,
  minCountRows: 2,
  minCountColumns: 2,
};

appendRowBtn.addEventListener('click', function(e) {
  const table = document.querySelector('.field').querySelector('tbody');
  const tr = document.createElement('tr');
  const cellsInRow = table.querySelector('tr').children.length;

  if (table.rows.length >= sizeOfTable.minCountRows) {
    removedRowBtn.disabled = false;

    for (let i = 1; i <= cellsInRow; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    table.append(tr);
  }

  if (table.rows.length === sizeOfTable.maxCountRows) {
    this.disabled = true;
  }
});

removedRowBtn.addEventListener('click', function(e) {
  const table = document.querySelector('.field').querySelector('tbody');

  table.deleteRow(-1);

  if (table.rows.length === sizeOfTable.minCountRows) {
    this.disabled = true;
  }

  appendRowBtn.disabled = false;
});

appendColumnBtn.addEventListener('click', function(e) {
  const table = document.querySelector('.field').querySelector('tbody');

  [...table.rows].forEach(elem => {
    elem.insertCell(-1);
  });

  removeColumnBtn.disabled = false;

  const column = table.querySelector('tr').children.length;

  if (column === sizeOfTable.maxCountColumns) {
    this.disabled = true;
  }
});

removeColumnBtn.addEventListener('click', function(e) {
  const table = document.querySelector('.field').querySelector('tbody');

  [...table.rows].forEach(elem =>
    elem.deleteCell(-1));

  appendColumnBtn.disabled = false;

  const column = table.querySelector('tr').children.length;

  if (column === sizeOfTable.minCountColumns) {
    this.disabled = true;
  }
});
