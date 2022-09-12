'use strict';

const tbody = document.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendColumnButton.addEventListener('click', () => {
  removeColumnButton.removeAttribute('disabled');

  const list = document.querySelectorAll('tr');

  for (const tr of list) {
    const td = document.createElement('td');

    tr.append(td);

    if (tr.children.length >= 10) {
      appendColumnButton.setAttribute('disabled', '');
    }
  }
});

removeColumnButton.addEventListener('click', () => {
  appendColumnButton.removeAttribute('disabled');

  const list = document.querySelectorAll('tr');

  for (const tr of list) {
    tr.querySelector('td').remove();

    if (tr.children.length <= 2) {
      removeColumnButton.setAttribute('disabled', '');
    }
  }
}
);

appendRowButton.addEventListener('click', () => {
  removeRowButton.removeAttribute('disabled');

  const tr = document.querySelector('tr');
  const newRow = tr.cloneNode(true);

  tbody.append(newRow);

  if (tbody.children.length >= 10) {
    appendRowButton.setAttribute('disabled', '');
  }
});

removeRowButton.addEventListener('click', () => {
  appendRowButton.removeAttribute('disabled');

  document.querySelector('tr').remove();

  if (tbody.children.length <= 2) {
    removeRowButton.setAttribute('disabled', '');
  }
});
