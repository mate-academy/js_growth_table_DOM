'use strict';

const tbody = document.querySelector('tbody');
const row = document.getElementsByTagName('tr');

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const td = document.createElement('td');
const maxLength = 10;
const minLength = 2;

addRowBtn.onclick = (btn) => {
  const rowClone = tbody.firstChild.cloneNode(true);

  tbody.appendChild(rowClone);

  btn.target.disabled = (row.length === maxLength);
  removeRowBtn.disabled = false;
};

removeRowBtn.onclick = (btn) => {
  tbody.lastElementChild.remove();

  btn.target.disabled = (row.length === minLength);
  addRowBtn.disabled = false;
};

addColumnBtn.onclick = (btn) => {
  [...row].forEach(e => {
    e.append(td.cloneNode());
  });

  btn.target.disabled = ([...row][0].childElementCount === maxLength);
  removeColumnBtn.disabled = false;
};

removeColumnBtn.onclick = (btn) => {
  [...row].forEach(e => {
    e.children[0].remove();
  });

  btn.target.disabled = ([...row][0].childElementCount === minLength);
  addColumnBtn.disabled = false;
};
