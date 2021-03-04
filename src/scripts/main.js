'use strict';

// write code here

const body = document.querySelector('body');
const table = document.querySelector('tbody');
const tr = document.querySelector('tr');
let tdLength = tr.querySelectorAll('td').length;
let trLength = table.querySelectorAll('tr').length;

body.addEventListener('click', (e) => {
  const target = e.target;

  if (trLength === 10 || tdLength === 10) {
    return;
  }

  if (target.classList.contains('append-row')) {
    table.append(tr.cloneNode(true));
    trLength += 1;

    if (trLength === 10) {
      document.querySelector('.append-row').disabled = true;
    }
    document.querySelector('.remove-row').disabled = false;
  }

  if (target.classList.contains('remove-row')) {
    table.lastElementChild.remove();
    trLength -= 1;

    if (trLength === 2) {
      document.querySelector('.remove-row').disabled = true;
    }
    document.querySelector('.append-row').disabled = false;
  }

  if (target.classList.contains('append-column')) {
    for (const elem of table.querySelectorAll('tr')) {
      const td = document.createElement('td');

      elem.append(td);
    }
    tdLength += 1;

    if (tdLength === 10) {
      document.querySelector('.append-column').disabled = true;
    }
    document.querySelector('.remove-column').disabled = false;
  }

  if (target.classList.contains('remove-column')) {
    for (const elem of table.querySelectorAll('tr')) {
      elem.firstElementChild.remove();
    }
    tdLength -= 1;

    if (tdLength === 2) {
      document.querySelector('.remove-column').disabled = true;
    }
    document.querySelector('.append-column').disabled = false;
  }
});
