'use strict';

const buttonRowAppend = document.querySelector('.append-row');
const buttonRowRemove = document.querySelector('.remove-row');
const buttonColumnAppend = document.querySelector('.append-column');
const buttonColumnRemove = document.querySelector('.remove-column');

buttonRowAppend.addEventListener('click', () => {
  const tableBody = document.querySelector('tbody');
  const tableRows = [...document.querySelectorAll('tr')];

  if (tableRows.length < 10) {
    tableBody.insertAdjacentHTML('beforeend', tableRows[0].outerHTML);

    const currentRows = [...document.querySelectorAll('tr')].length;

    if (currentRows > 2) {
      buttonRowRemove.disabled = false;
    }

    if (currentRows === 10) {
      buttonRowAppend.disabled = true;
    }
  }
});

buttonRowRemove.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('tr');

  if (tableRows.length > 2) {
    tableRows[0].remove();
  }

  const currentRows = [...document.querySelectorAll('tr')].length;

  if (currentRows === 2) {
    buttonRowRemove.disabled = true;
  }

  if (currentRows < 10) {
    buttonRowAppend.disabled = false;
  }
});

buttonColumnAppend.addEventListener('click', () => {
  const tableRows = [...document.querySelectorAll('tr')];

  if (tableRows[0].children.length < 10) {
    tableRows.forEach((cells) => {
      cells.insertAdjacentHTML('beforeend', cells.children[0].outerHTML);
    });

    const currentCol = [...document.querySelectorAll('tr')][0].children.length;

    if (currentCol > 2) {
      buttonColumnRemove.disabled = false;
    }

    if (currentCol === 10) {
      buttonColumnAppend.disabled = true;
    }
  }
});

buttonColumnRemove.addEventListener('click', () => {
  const tableRows = document.querySelectorAll('tr');

  if (tableRows[0].children.length > 2) {
    for (const [key] of tableRows.entries()) {
      tableRows[key].children[0].remove();
    }
  }

  const currentCol = [...document.querySelectorAll('tr')][0].children.length;

  if (currentCol === 2) {
    buttonColumnRemove.disabled = true;
  }

  if (currentCol < 10) {
    buttonColumnAppend.disabled = false;
  }
});
