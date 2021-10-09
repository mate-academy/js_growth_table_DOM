'use strict';

const minCell = 2;
const maxCell = 10;
const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (table.children.length < maxCell) {
    const trNew = document.createElement('tr');
    let row = '';

    for (let i = 0; i < table.children[0].children.length; i++) {
      row += `<td></td>\n`;
    };

    trNew.innerHTML = row;
    table.append(trNew);

    if (removeRow.disabled) {
      removeRow.disabled = false;
    };

    if (table.children.length === maxCell) {
      appendRow.disabled = true;
    };
  };
});

removeRow.addEventListener('click', () => {
  if (table.children.length > minCell) {
    table.lastElementChild.remove();

    if (appendRow.disabled) {
      appendRow.disabled = false;
    };

    if (table.children.length === minCell) {
      removeRow.disabled = true;
    };
  };
});

appendColumn.addEventListener('click', () => {
  const trTegs = document.querySelectorAll('tr');

  if (trTegs[0].children.length < maxCell) {
    trTegs.forEach((teTeg) => {
      const newTeg = document.createElement('td');

      teTeg.append(newTeg);
    });

    if (removeColumn.disabled) {
      removeColumn.disabled = false;
    };

    if (trTegs[0].children.length === maxCell) {
      appendColumn.disabled = true;
    };
  };
});

removeColumn.addEventListener('click', () => {
  const trTegs = document.querySelectorAll('tr');

  if (trTegs[0].children.length > minCell) {
    trTegs.forEach((trTeg) => {
      trTeg.lastElementChild.remove();
    });
  };

  if (appendColumn.disabled) {
    appendColumn.disabled = false;
  };

  if (trTegs[0].children.length === minCell) {
    removeColumn.disabled = true;
  };
});
