'use strict';

const tbody = document.querySelector('tbody');
const row = document.getElementsByTagName('tr');

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const td = document.createElement('td');

addRowBtn.onclick = (btn) => {
  const rowClone = tbody.firstChild.cloneNode(true);

  tbody.appendChild(rowClone);

  btn.target.disabled = (row.length === 10);
  removeRowBtn.disabled = false;
};

removeRowBtn.onclick = (btn) => {
  tbody.lastElementChild.remove();

  btn.target.disabled = (row.length === 2);
  addRowBtn.disabled = false;
};

addColumnBtn.onclick = (btn) => {
  [...row].forEach(e => {
    e.append(td.cloneNode());
  });

  btn.target.disabled = ([...row][0].childElementCount === 10);
  removeColumnBtn.disabled = false;
};

removeColumnBtn.onclick = (btn) => {
  [...row].forEach(e => {
    e.children[0].remove();
  });

  btn.target.disabled = ([...row][0].childElementCount === 2);
  addColumnBtn.disabled = false;
};
