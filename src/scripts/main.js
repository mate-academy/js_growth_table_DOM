'use strict';

const buttonRowAppend = document.querySelector('.append-row');
const buttonRowRemove = document.querySelector('.remove-row');
const buttonColumnAppend = document.querySelector('.append-column');
const buttonColumnRemove = document.querySelector('.remove-column');

buttonRowAppend.addEventListener('click', (e) => {
  const tableRows = [...document.querySelectorAll('tr')];
  const tableBody = document.querySelector('tbody');

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

buttonRowRemove.addEventListener('click', (e) => {
  const tableRows = [...document.querySelectorAll('tr')];
  const tableBody = document.querySelector('tbody');

  if (tableRows.length > 2) {
    tableBody.firstChild.remove();

    const currentRows = [...document.querySelectorAll('tr')].length;

    if (currentRows === 2) {
      buttonRowRemove.disabled = true;
    }

    if (currentRows < 10) {
      buttonRowAppend.disabled = false;
    }
  }
});

buttonColumnAppend.addEventListener('click', (e) => {
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

buttonColumnRemove.addEventListener('click', (e) => {
  const tableRows = [...document.querySelectorAll('tr')];

  if (tableRows[0].children.length > 2) {
    tableRows.forEach((cells) => {
      cells.firstChild.remove();
    });

    const currentCol = [...document.querySelectorAll('tr')][0].children.length;

    if (currentCol === 2) {
      buttonColumnRemove.disabled = true;
    }

    if (currentCol < 10) {
      buttonColumnAppend.disabled = false;
    }
  }
});
