'use strict';

const buttonAppendRow = document.querySelector('.append-row');

buttonAppendRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');

  if (tbody.children.length < 10) {
    const trFirst = document.querySelector('tr');
    const tr = document.createElement('tr');

    for (let i = 0; i < trFirst.children.length; i++) { 
      const column = document.createElement('td');

      tr.append(column);
    }
    tbody.append(tr);
  }
});

const buttonRemoveRow = document.querySelector('.remove-row');

buttonRemoveRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');

  if (tbody.children.length > 2) {
    tbody.lastElementChild.remove();
  }
});

const buttonAppendColumn = document.querySelector('.append-column');

buttonAppendColumn.addEventListener('click', () => {
  const trFirst = document.querySelector('tr');

  if (trFirst.children.length < 10) {
    const trList = document.querySelectorAll('tr');

    for (const tr of trList) {
      const td = document.createElement('td');

      tr.append(td);
    }
  }
});

const buttonRemoveColumn = document.querySelector('.remove-column');

buttonRemoveColumn.addEventListener('click', () => {
  const trFirst = document.querySelector('tr');

  if (trFirst.children.length > 2) {
    const trList = document.querySelectorAll('tr');

    for (const tr of trList) {
      tr.lastElementChild.remove();
    }
  }
});
