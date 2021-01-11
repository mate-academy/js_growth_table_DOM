'use strict';

const field = document.querySelector('.field tbody');
const appR = document.querySelector('.append-row');
const remR = document.querySelector('.remove-row');
const appC = document.querySelector('.append-column');
const remC = document.querySelector('.remove-column');
const tr = document.querySelector('tr');
const td = document.querySelector('td');
const maxAdd = 10;
const minRem = 2;

appR.addEventListener('click', () => {
  field.append(tr.cloneNode(true));

  if (field.children.length === maxAdd) {
    appR.disabled = true;
  }

  remR.disabled = false;
});

remR.addEventListener('click', () => {
  field.lastElementChild.remove();

  if (field.children.length === minRem) {
    remR.disabled = true;
  }
  appR.disabled = false;
});

appC.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(el => {
    el.append(td.cloneNode(true));
  });

  if (tr.childElementCount === maxAdd) {
    appC.disabled = true;
  }

  remC.disabled = false;
});

remC.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(el => {
    el.lastElementChild.remove();
  });

  if (tr.childElementCount === minRem) {
    remC.disabled = true;
  }
  appC.disabled = false;
});
