'use strict';

const addRowBtn = document.querySelector('.append-row');
const remRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const remColBtn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const tBody = table.querySelector('tbody');

function updateButtonStates() {
  if (tBody.childElementCount >= 10) {
    addRowBtn.setAttribute('disabled', 'disabled');
  } else {
    addRowBtn.removeAttribute('disabled');
  }

  if (tBody.childElementCount <= 2) {
    remRowBtn.setAttribute('disabled', 'disabled');
  } else {
    remRowBtn.removeAttribute('disabled');
  }

  if (tBody.firstElementChild.childElementCount >= 10) {
    addColBtn.setAttribute('disabled', 'disabled');
  } else {
    addColBtn.removeAttribute('disabled');
  }

  if (tBody.firstElementChild.childElementCount <= 2) {
    remColBtn.setAttribute('disabled', 'disabled');
  } else {
    remColBtn.removeAttribute('disabled');
  }
}

function clickOnAddRowBtn() {
  const tRow = document.createElement('tr');

  tRow.innerHTML = tBody.firstElementChild.innerHTML;
  tBody.append(tRow);
  updateButtonStates();
}

addRowBtn.addEventListener('click', clickOnAddRowBtn);

function clickOnRemRowBtn() {
  const lastChild = tBody.lastElementChild;

  tBody.removeChild(lastChild);
  updateButtonStates();
}

remRowBtn.addEventListener('click', clickOnRemRowBtn);

function clickOnAddColBtn() {
  const rows = tBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const newTd = document.createElement('td');

    row.append(newTd);
  });
  updateButtonStates();
}

addColBtn.addEventListener('click', clickOnAddColBtn);

function clickOnRemColBtn() {
  const rows = tBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const lastTd = row.lastElementChild;

    row.removeChild(lastTd);
  });
  updateButtonStates();
}

remColBtn.addEventListener('click', clickOnRemColBtn);
