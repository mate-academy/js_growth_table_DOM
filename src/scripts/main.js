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
      buttonRowRemove.style.background = null;
    }

    if (currentRows === 10) {
      buttonRowAppend.style.background = 'grey';
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
      buttonRowRemove.style.background = 'grey';
    }

    if (currentRows < 10) {
      buttonRowAppend.style.background = null;
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
      buttonColumnRemove.style.background = null;
    }

    if (currentCol === 10) {
      buttonColumnAppend.style.background = 'grey';
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
      buttonColumnRemove.style.background = 'grey';
    }

    if (currentCol < 10) {
      buttonColumnAppend.style.background = null;
    }
  }
});
