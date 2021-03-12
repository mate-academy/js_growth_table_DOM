'use strict';

// write code here
const container = document.querySelector('.container');
const field = document.querySelector('tbody');

const itemTd = document.createElement('td');

container.addEventListener('click', (tap) => {
  const element = document.getElementsByTagName('tr');

  if (tap.target.matches('.append-row')
  && field.childElementCount !== 10) {
    document.querySelector('.remove-row').disabled = false;
    field.append(field.children[0].cloneNode(true));
  } else if (tap.target.matches('.remove-row')) {
    document.querySelector('.append-row').disabled = false;
    field.lastElementChild.remove();

    if (field.childElementCount === 2) {
      document.querySelector('.remove-row').disabled = true;
    }
  } else if (tap.target.matches('.append-column')
  && element[0].childElementCount !== 10) {
    document.querySelector('.remove-column').disabled = false;
    [...element].forEach(tag => tag.append(itemTd.cloneNode()));
  } else if (tap.target.matches('.remove-column')) {
    document.querySelector('.append-column').disabled = false;
    [...element].forEach(tag => tag.lastElementChild.remove());

    if (element[0].childElementCount === 2) {
      document.querySelector('.remove-column').disabled = true;
    }
  }

  if (field.childElementCount === 10) {
    document.querySelector('.append-row').disabled = true;
  }

  if (element[0].childElementCount === 10) {
    document.querySelector('.append-column').disabled = true;
  }
});
