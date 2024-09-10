'use strict';

// write code here
const el = {
  container: document.querySelector('.container'),
  tableBody: document.querySelector('.field').children[0],
  addRowButton: document.querySelector('.append-row'),
  removeRowButton: document.querySelector('.remove-row'),
  addColumnButton: document.querySelector('.append-column'),
  removeColumnButton: document.querySelector('.remove-column'),
};

const rows = el.tableBody.children;

function handleField(className) {
  function throughCollection(collection, action) {
    switch (action) {
      case 'add':
        const cloneElement = collection[0].cloneNode(true);

        collection[0].parentNode.appendChild(cloneElement);
        break;
      case 'remove':
        collection[0].parentNode.removeChild(collection[0]);
        break;
    }
  }

  switch (className) {
    case 'append-row':
      throughCollection(rows, 'add');
      break;
    case 'remove-row':
      throughCollection(rows, 'remove');
      break;
    case 'append-column':
      for (const row of rows) {
        throughCollection(row.children, 'add');
      }
      break;
    case 'remove-column':
      for (const row of rows) {
        throughCollection(row.children, 'remove');
      }
      break;
  }
}

function handleButtonsByLimit() {
  el.addRowButton.disabled = rows.length === 10;
  el.removeRowButton.disabled = rows.length === 2;
  el.addColumnButton.disabled = rows[0].children.length === 10;
  el.removeColumnButton.disabled = rows[0].children.length === 2;
}

el.container.addEventListener(
  'click',
  (e) => {
    if (e.target.classList.contains('button')) {
      const classForAction = [...e.target.classList].filter(
        (item) => item !== 'button',
      );

      handleField(classForAction[0]);
      handleButtonsByLimit();
    }
  },
  true,
);
