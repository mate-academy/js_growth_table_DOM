'use strict';

const tbody = document.querySelector('tbody');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const updateButtons = () => {
  appendColumnButton.disabled = (tbody.children[0].childElementCount === 10);
  removeColumnButton.disabled = (tbody.children[0].childElementCount === 2);
  appendRowButton.disabled = (tbody.childElementCount === 10);
  removeRowButton.disabled = (tbody.childElementCount === 2);
};

document.querySelector('body')
  .addEventListener('click', ev => {
    const classList = ev.target.classList;

    if (classList.contains('append-column')) {
      for (const child of tbody.children) {
        child.appendChild(document.createElement('td'));
      }
    }

    if (classList.contains('remove-column')) {
      for (const child of tbody.children) {
        child.lastElementChild.remove();
      }
    }

    if (classList.contains('append-row')) {
      const trClone = tbody.lastElementChild.cloneNode(true);

      tbody.appendChild(trClone);
    }

    if (classList.contains('remove-row')) {
      tbody.lastElementChild.remove();
    }

    updateButtons();
  });
