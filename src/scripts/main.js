'use strict';

// write code here

const body = document.querySelector('body');
const tBody = document.querySelector('tbody');
const tRow = document.querySelector('tr');
const trs = document.querySelectorAll('tr');
const remRow = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');
const addCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');

body.addEventListener('click', (ent) => {
  const target = ent.target;

  switch (target) {
    case remRow:
      tBody.lastElementChild.remove();
      break;
    case addRow:
      if (tBody.children.length === 10) {
        return;
      }
      tBody.append(tRow.cloneNode(true));
      break;

    case addCol:
      // const trs = document.querySelectorAll('tr');

      if (tBody.firstElementChild.children.length === 10) {
        return;
      }

      for (const tr of trs) {
        const td = document.createElement('td');

        tr.append(td);
      }
      break;

    default:
      // const trs = document.querySelectorAll('tr');

      for (const tr of trs) {
        tr.firstElementChild.remove();
      }
  }

  const tcLength = tBody.firstElementChild.children.length;
  const trLength = tBody.children.length;

  addCol.disabled = tcLength === 10;
  remCol.disabled = tcLength === 2;

  remRow.disabled = trLength === 2;
  addRow.disabled = trLength === 10;
});
