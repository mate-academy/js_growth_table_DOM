'use strict';

// write code here

const body = document.querySelector('body');
const tBody = document.querySelector('tbody');
const tRow = document.querySelector('tr');
let tdLength = tRow.querySelectorAll('td').length;
let trLength = tBody.querySelectorAll('tr').length;

body.addEventListener('click', (ent) => {
  const target = ent.target;

  if (trLength === 10) {
    return;
  }

  if (target.classList.contains('remove-row')) {
    tBody.lastElementChild.remove();
    trLength -= 1;

    if (trLength < 3) {
      document.querySelector('.remove-row').disabled = true;
    }
    document.querySelector('.append-row').disabled = false;
  }

  if (target.classList.contains('append-row')) {
    tBody.append(tRow.cloneNode(true));

    trLength += 1;

    if (trLength > 9) {
      document.querySelector('.append-row').disabled = true;
    }
    document.querySelector('.remove-row').disabled = false;
  }

  if (tdLength === 10) {
    return;
  }

  if ((target.classList.contains('append-column'))) {
    const trs = document.querySelectorAll('tr');

    for (const tr of trs) {
      const td = document.createElement('td');

      tr.append(td);
    }

    tdLength += 1;

    if (tdLength > 9) {
      document.querySelector('.append-column').disabled = true;
    }
    document.querySelector('.remove-column').disabled = false;
  }

  if ((target.classList.contains('remove-column'))) {
    const trs = document.querySelectorAll('tr');

    for (const tr of trs) {
      tr.firstElementChild.remove();
    }
    tdLength -= 1;

    if (tdLength < 3) {
      document.querySelector('.remove-column').disabled = true;
    }

    document.querySelector('.append-column').disabled = false;
  }
});
