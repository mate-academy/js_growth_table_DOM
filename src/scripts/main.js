'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', (evt) => {
  const appendRowButton = evt.target.classList.contains('append-row');
  const removeRowButton = evt.target.classList.contains('remove-row');
  const appendColumnButton = evt.target.classList.contains('append-column');
  const removeColumnButton = evt.target.classList.contains('remove-column');
  const tableBody = document.querySelector('tbody');

  switch (true) {
    case appendRowButton:
      appendRow(tableBody, evt);
      break;
    case removeRowButton:
      removeRow(tableBody, evt);
      break;
    case appendColumnButton:
      appendColumn(tableBody, evt);
      break;
    case removeColumnButton:
      removeColumn(tableBody, evt);
      break;
    default:
  }
});

function appendRow(tableBody, evt) {
  if (tableBody.children.length < 9) {
    tableBody.append(tableBody.children[0].cloneNode(true));
    document.getElementsByClassName('remove-row')[0].disabled = false;
  }

  if (tableBody.children.length === 9) {
    tableBody.append(tableBody.children[0].cloneNode(true));
    evt.target.disabled = true;
  }
};

function removeRow(tableBody, evt) {
  if (tableBody.children.length >= 3) {
    tableBody.children[0].remove();
    document.getElementsByClassName('append-row')[0].disabled = false;
  }

  if (document.querySelector('tbody').children.length === 2) {
    evt.target.disabled = true;
  }
};

function appendColumn(tableBody, evt) {
  if (tableBody.children[0].children.length < 9) {
    [...tableBody.children]
      .forEach(row => row.append(document.createElement('td')));

    document.getElementsByClassName('remove-column')[0]
      .disabled = false;
  }

  if (tableBody.children[0].children.length === 9) {
    [...document.querySelector('tbody').children]
      .forEach(row => row.append(document.createElement('td')));
    evt.target.disabled = true;
  }
};

function removeColumn(tableBody, evt) {
  if (tableBody.children[0].children.length >= 3) {
    [...tableBody.children]
      .forEach(row => row.children[0].remove());

    document.getElementsByClassName('append-column')[0]
      .disabled = false;
  }

  if (document.querySelector('tbody')
    .children[0].children.length === 2) {
    evt.target.disabled = true;
  }
};
