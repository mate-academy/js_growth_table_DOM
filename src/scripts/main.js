'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const MAX_LENGTH = 10;
  const MIN_LENGTH = 2;

  const container = document.querySelector('.container');
  const tableBody = container.querySelector('.field tbody');
  const appendRowButt = container.querySelector('.append-row');
  const removeRowButt = container.querySelector('.remove-row');
  const appendColButt = container.querySelector('.append-column');
  const removeColButt = container.querySelector('.remove-column');

  function controlPanel(el, num, elDis, elEna) {
    if (el.children.length === num) {
      elDis.setAttribute('disabled', true);
    }

    elEna.removeAttribute('disabled');
  }

  container.addEventListener('click', e => {
    const squares = tableBody.querySelectorAll('tr');
    const square = tableBody.querySelector('td');
    const { target } = e;

    switch (target) {
      case appendRowButt:
        tableBody.insertAdjacentHTML('beforeend', squares[0].outerHTML);

        controlPanel(tableBody, MAX_LENGTH, target, removeRowButt);

        break;
      case removeRowButt:
        tableBody.lastElementChild.remove();

        controlPanel(tableBody, MIN_LENGTH, target, appendRowButt);

        break;
      case appendColButt:
        squares.forEach(el => {
          el.insertAdjacentHTML('beforeend', square.outerHTML);
        });

        controlPanel(squares[0], MAX_LENGTH, target, removeColButt);

        break;
      case removeColButt:
        squares.forEach(el => {
          el.lastElementChild.remove();
        });

        controlPanel(squares[0], MIN_LENGTH, target, appendColButt);

        break;
    }
  });
});
