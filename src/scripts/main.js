'use strict';

const table = document.querySelector('tbody');
const field = [...document.querySelectorAll('.field')];

document.querySelector('.append-row').addEventListener('click', addRows);
document.querySelector('.remove-row').addEventListener('click', delRows);
document.querySelector('.append-column').addEventListener('click', addColumns);
document.querySelector('.remove-column').addEventListener('click', delColumn);

function addRows(event) {
  let add = document.createElement('tr');

  add = field[0].children[0].children[0].cloneNode(true);
  table.append(add);

  if (table.children.length >= 10) {
    event.target.setAttribute('disabled', 'true');
  }

  if (table.children.length > 2) {
    document.querySelector('.remove-row').removeAttribute('disabled');
  }
}

function delRows(event) {
  field[0].children[0].children[0].remove();

  if (table.children.length <= 2) {
    event.target.setAttribute('disabled', 'true');
  }

  if (table.children.length < 10) {
    document.querySelector('.append-row').removeAttribute('disabled');
  }
}

function addColumns(event) {
  const add = document.createElement('td');

  for (const a of table.children) {
    a.append(add.cloneNode());
  }

  if (table.children[0].children.length >= 10) {
    event.target.setAttribute('disabled', 'true');
  }

  if (table.children[0].children.length > 2) {
    document.querySelector('.remove-column').removeAttribute('disabled');
  }
}

function delColumn(event) {
  for (let i = 0; i < table.children.length; i++) {
    table.children[i].children[0].remove();
  }

  if (table.children[0].children.length <= 2) {
    event.target.setAttribute('disabled', 'true');
  }

  if (table.children[0].children.length < 10) {
    document.querySelector('.append-column').removeAttribute('disabled');
  }
}
