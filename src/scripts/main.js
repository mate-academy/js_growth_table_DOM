'use strict';

document.querySelector('.append-row').addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  trs[trs.length - 1].parentElement
    .append(trs[trs.length - 1].cloneNode(true));

  if (trs.length === 9) {
    document.querySelector('.append-row').disabled = true;
  };
});

document.querySelector('.remove-row').addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  trs[trs.length - 1].remove();

  if (trs.length === 3) {
    document.querySelector('.remove-row').disabled = true;
  };
});

document.querySelector('.append-column').addEventListener('click', () => {
  document.querySelectorAll('tr').forEach((row) => {
    row.append(row.lastElementChild.cloneNode(true));
  });

  if (document.querySelector('tr').children.length === 10) {
    document.querySelector('.append-column.button').disabled = true;
  };
});

document.querySelector('.remove-column').addEventListener('click', () => {
  document.querySelectorAll('tr').forEach((row) => {
    row.lastElementChild.remove();
  });

  if (document.querySelector('tr').children.length === 2) {
    document.querySelector('.remove-column').disabled = true;
  }
});
