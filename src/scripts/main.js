'use strict';

const tbody = document.querySelector('.field tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

if (
  typeof tbody === 'undefined' ||
  tbody === null ||
  typeof appendRowButton === 'undefined' ||
  appendRowButton === null ||
  typeof removeRowButton === 'undefined' ||
  removeRowButton === null ||
  typeof appendColumnButton === 'undefined' ||
  appendColumnButton === null ||
  typeof removeColumnButton === 'undefined' ||
  removeColumnButton === null
) {
  const buttons = document.querySelectorAll('.button');

  for (const button of buttons) {
    button.setAttribute('disabled', '');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateButtonsState();
});

function getTrs() {
  return document.querySelectorAll('.container .field tbody tr');
}

function updateButtonsState(element) {
  if (tbody.children.length < 10 && appendRowButton.hasAttribute('disabled')) {
    appendRowButton.removeAttribute('disabled');
  } else if (
    tbody.children.length === 10 &&
    !appendRowButton.hasAttribute('disabled')
  ) {
    appendRowButton.setAttribute('disabled', '');
  }

  if (tbody.children.length > 2 && removeRowButton.hasAttribute('disabled')) {
    removeRowButton.removeAttribute('disabled');
  } else if (
    tbody.children.length === 2 &&
    !removeRowButton.hasAttribute('disabled')
  ) {
    removeRowButton.setAttribute('disabled', '');
  }

  if (
    tbody.firstElementChild.children.length === 10 &&
    !appendColumnButton.hasAttribute('disabled')
  ) {
    appendColumnButton.setAttribute('disabled', '');
  } else if (
    tbody.firstElementChild.children.length < 10 &&
    appendColumnButton.hasAttribute('disabled')
  ) {
    appendColumnButton.removeAttribute('disabled');
  }

  if (
    tbody.firstElementChild.children.length === 2 &&
    !removeColumnButton.hasAttribute('disabled')
  ) {
    removeColumnButton.setAttribute('disabled', '');
  } else if (
    tbody.firstElementChild.children.length > 2 &&
    removeColumnButton.hasAttribute('disabled')
  ) {
    removeColumnButton.removeAttribute('disabled');
  }
}

appendRowButton.addEventListener('click', (e) => {
  tbody.appendChild(tbody.lastElementChild.cloneNode(true));
  updateButtonsState();
});

removeRowButton.addEventListener('click', (e) => {
  tbody.lastElementChild.remove();
  updateButtonsState();
});

appendColumnButton.addEventListener('click', (e) => {
  const trs = getTrs();

  for (const tr of trs) {
    tr.appendChild(document.createElement('td'));
  }

  updateButtonsState();
});

removeColumnButton.addEventListener('click', (e) => {
  const trs = getTrs();

  for (const tr of trs) {
    tr.lastElementChild.remove();
  }
  updateButtonsState();
});
