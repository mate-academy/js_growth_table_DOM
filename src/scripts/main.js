'use strict';

document.addEventListener('click', (e) => {
  const click = e.target;
  const table = document.querySelector('tbody');
  const tr = document.querySelectorAll('tr');
  const col = document.querySelector('tr');
  const td = document.createElement('td');
  const buttonMaxRow = document.querySelector('.container').children[0];
  const buttonMinRow = document.querySelector('.container').children[1];
  const buttonMaxCol = document.querySelector('.container').children[2];
  const buttonMinCol = document.querySelector('.container').children[3];

  if (click.className === 'append-row button' && table.children.length < 10) {
    table.append(table.children[0].cloneNode(true));
  };

  if (click.className === 'remove-row button' && table.children.length > 2) {
    table.children[0].remove();
  };

  if (click.className === 'append-column button') {
    if (col.children.length < 10) {
      for (const key of tr) {
        key.append(td.cloneNode(true));
      };
    };
  };

  if (click.className === 'remove-column button') {
    if (col.children.length > 2) {
      for (const key of tr) {
        key.children[0].remove();
      };
    };
  };

  if (table.children.length === 10) {
    buttonMaxRow.disabled = true;
  } else {
    buttonMaxRow.disabled = false;
  };

  if (table.children.length === 2) {
    buttonMinRow.disabled = true;
  } else {
    buttonMinRow.disabled = false;
  };

  if (col.children.length === 10) {
    buttonMaxCol.disabled = true;
  } else {
    buttonMaxCol.disabled = false;
  };

  if (col.children.length === 2) {
    buttonMinCol.disabled = true;
  } else {
    buttonMinCol.disabled = false;
  };
});
