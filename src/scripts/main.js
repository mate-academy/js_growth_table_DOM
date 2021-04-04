'use strict';

const tbody = document.querySelector('tbody');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const updateColumnButtons = () => {
  appendColumnButton.disabled = (tbody.children[0].childElementCount === 10);
  removeColumnButton.disabled = (tbody.children[0].childElementCount === 2);
};

const updateRowButtons = () => {
  appendRowButton.disabled = (tbody.childElementCount === 10);
  removeRowButton.disabled = (tbody.childElementCount === 2);
};

appendColumnButton.addEventListener('click', () => {
  for (const child of tbody.children) {
    child.appendChild(document.createElement('td'));
  }

  updateColumnButtons();
});

removeColumnButton.addEventListener('click', () => {
  for (const child of tbody.children) {
    child.lastElementChild.remove();
  }

  updateColumnButtons();
});

appendRowButton.addEventListener('click', () => {
  const trClone = tbody.lastElementChild.cloneNode(true);

  tbody.appendChild(trClone);

  updateRowButtons();
});

removeRowButton.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  updateRowButtons();
});
