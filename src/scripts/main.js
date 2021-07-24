'use strict';

document.querySelector('.append-row').addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  (trs.length < 10)
  && (trs[trs.length - 1].parentElement
    .append(trs[trs.length - 1].cloneNode(true)));
});

document.querySelector('.remove-row').addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  (trs.length > 2) && (trs[trs.length - 1].remove());
});

document.querySelector('.append-column').addEventListener('click', () => {
  (document.querySelector('tr').children.length < 10)
  && (document.querySelectorAll('tr').forEach((row) => {
    row.append(row.lastElementChild.cloneNode(true));
  }));
});

document.querySelector('.remove-column').addEventListener('click', () => {
  (document.querySelector('tr').children.length > 2)
  && (document.querySelectorAll('tr').forEach((row) => {
    row.lastElementChild.remove();
  }));
});
