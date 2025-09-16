'use strict';

const container = document.querySelector('.container');

function getTrs() {
  return document.querySelectorAll('.container .field tbody tr');
}

container.addEventListener('click', (e) => {
  const tbody = document.querySelector('.field tbody');
  const trs = getTrs();
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
    return;
  }

  if ([...e.target.classList].includes('button')) {
    if (e.target === appendRowButton) {
      tbody.appendChild(tbody.lastElementChild.cloneNode(true));
    } else if (e.target === removeRowButton) {
      tbody.lastElementChild.remove();
    } else if (e.target === appendColumnButton) {
      for (const tr of trs) {
        tr.appendChild(document.createElement('td'));
      }
    } else if (e.target === removeColumnButton) {
      for (const tr of trs) {
        tr.lastElementChild.remove();
      }
    }

    if (
      tbody.children.length === 10 &&
      !appendRowButton.hasAttribute('disabled')
    ) {
      appendRowButton.setAttribute('disabled', '');
    } else if (
      tbody.children.length < 10 &&
      appendRowButton.hasAttribute('disabled')
    ) {
      appendRowButton.removeAttribute('disabled');
    }

    if (
      tbody.children.length === 2 &&
      !removeRowButton.hasAttribute('disabled')
    ) {
      removeRowButton.setAttribute('disabled', '');
    } else if (
      tbody.children.length > 2 &&
      removeRowButton.hasAttribute('disabled')
    ) {
      removeRowButton.removeAttribute('disabled');
    }

    if (
      tbody.firstChild.children.length === 10 &&
      !appendColumnButton.hasAttribute('disabled')
    ) {
      appendColumnButton.setAttribute('disabled', '');
    } else if (
      tbody.firstChild.children.length < 10 &&
      appendColumnButton.hasAttribute('disabled')
    ) {
      appendColumnButton.removeAttribute('disabled');
    }

    if (
      tbody.firstChild.children.length === 2 &&
      !removeColumnButton.hasAttribute('disabled')
    ) {
      removeColumnButton.setAttribute('disabled', '');
    } else if (
      tbody.firstChild.children.length > 2 &&
      removeColumnButton.hasAttribute('disabled')
    ) {
      removeColumnButton.removeAttribute('disabled');
    }
  }
});
