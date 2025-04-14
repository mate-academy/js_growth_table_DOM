'use strict';

addEventListener('click', e => {
  const data = document.querySelector('tbody');
  const buttonRowAppend = document.querySelector('.append-row');
  const buttonRowRemove = document.querySelector('.remove-row');
  const buttonColumnAppend = document.querySelector('.append-column');
  const buttonColumnRemove = document.querySelector('.remove-column');

  if (e.target.className === 'append-row button') {
    const newRow = document.querySelector('tr').cloneNode(true);

    data.append(newRow);

    if (data.children.length === 10) {
      buttonRowAppend.disabled = true;
    }

    if (data.children.length > 2) {
      buttonRowRemove.disabled = false;
    }
  }

  if (e.target.className === 'append-column button') {
    for (const element of [...data.children]) {
      const newColumn = document.createElement('td');

      element.append(newColumn);

      if (element.children.length === 10) {
        buttonColumnAppend.disabled = true;
      }

      if (element.children.length > 2) {
        buttonColumnRemove.disabled = false;
      }
    }
  }

  if (e.target.className === 'remove-row button') {
    const row = document.querySelector('tr');

    row.remove();

    if (data.children.length < 10) {
      buttonRowAppend.disabled = false;
    }

    if (data.children.length === 2) {
      buttonRowRemove.disabled = true;
    }
  }

  if (e.target.className === 'remove-column button') {
    for (const element of [...data.children]) {
      const column = element.children[0];

      column.remove();

      if (element.children.length < 10) {
        buttonColumnAppend.disabled = false;
      }

      if (element.children.length === 2) {
        buttonColumnRemove.disabled = true;
      }
    }
  }
});
