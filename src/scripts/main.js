'use strict';

const appendrow = document.querySelector('.append-row');
const removerow = document.querySelector('.remove-row');
const appendcolumn = document.querySelector('.append-column');
const removecolumn = document.querySelector('.remove-column');

let trs = document.querySelectorAll('tr');
let tr = document.querySelector('tr');
const table = document.querySelector('tbody');
const td = document.querySelector('td');

appendrow.addEventListener('click', (e) => {
  const newtr = tr.cloneNode(true);

  table.append(newtr);
  trs = document.querySelectorAll('tr');

  if (trs.length >= 10) {
    appendrow.disabled = true;
  }

  if (trs.length > 2) {
    removerow.disabled = false;
  }
});

removerow.addEventListener('click', (e) => {
  tr = document.querySelector('tr');
  tr.remove();
  trs = document.querySelectorAll('tr');

  if (trs.length < 10) {
    appendrow.disabled = false;
  }

  if (trs.length <= 2) {
    removerow.disabled = true;
  } else {
    removerow.disabled = false;
  }
});

appendcolumn.addEventListener('click', (e) => {
  for (const trforcolum of trs) {
    const newtd = td.cloneNode(true);

    trforcolum.append(newtd);

    if (trforcolum.children.length >= 10) {
      appendcolumn.disabled = true;
    }

    if (trforcolum.children.length > 2) {
      removecolumn.disabled = false;
    }
  }
});

removecolumn.addEventListener('click', (e) => {
  for (const trforcolum of trs) {
    trforcolum.lastElementChild.remove();

    if (trforcolum.children.length < 10) {
      appendcolumn.disabled = false;
    }

    if (trforcolum.children.length <= 2) {
      removecolumn.disabled = true;
    } else {
      removecolumn.disabled = false;
    }
  }
});
