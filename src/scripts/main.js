'use strict';

const mainCon = document.querySelector('.container');

const BtnAdAp = document.querySelector('.append-row');

const BtnDelLeft = document.querySelector('.remove-row');

const BtnAdLeft = document.querySelector('.append-column');

const BtnDelAP = document.querySelector('.remove-column');

const allBox = document.querySelector('.field');

const tBody = allBox.querySelector('tbody');

const MaxTrTd = 10;

const MinTrTd = 2;

function disBtnTr() {
  const curentTr = tBody.querySelectorAll('tr').length;

  BtnAdAp.disabled = curentTr >= MaxTrTd;

  BtnDelLeft.disabled = curentTr <= MinTrTd;
}

function disBtnTd() {
  const curentTd = tBody.querySelector('tr').querySelectorAll('td').length;

  BtnAdLeft.disabled = curentTd >= MaxTrTd;

  BtnDelAP.disabled = curentTd <= MinTrTd;
}

function addRow() {
  const curentTr = tBody.querySelectorAll('tr').length;
  const curentTd = tBody.querySelector('tr').querySelectorAll('td').length;

  if (curentTr < MaxTrTd) {
    const newTr = document.createElement('tr');

    for (let i = 0; i < curentTd; i++) {
      const newTd = document.createElement('td');

      newTr.append(newTd);
    }
    tBody.append(newTr);
  }

  disBtnTr();
  disBtnTd();
}

function deletRow() {
  const curentTr = tBody.querySelectorAll('tr').length;

  if (curentTr > MinTrTd) {
    tBody.lastElementChild.remove();
  }

  disBtnTr();
  disBtnTd();
}

function addColumn() {
  const curentTd = tBody.querySelector('tr').querySelectorAll('td').length;

  if (curentTd < MaxTrTd) {
    const allTr = tBody.querySelectorAll('tr');

    allTr.forEach((tr) => {
      const newTd = document.createElement('td');

      tr.append(newTd);
    });
  }

  disBtnTd();
  disBtnTr();
}

function deleteColumn() {
  const curentTd = tBody.querySelector('tr').querySelectorAll('td').length;

  if (curentTd > MinTrTd) {
    const allTr = tBody.querySelectorAll('tr');

    [...allTr].forEach((tr) => {
      tr.lastElementChild.remove();
    });
  }

  disBtnTd();
  disBtnTr();
}

disBtnTd();
disBtnTr();

mainCon.addEventListener('click', (e) => {
  if (e.target === BtnAdAp) {
    addRow();
  }

  if (e.target === BtnDelLeft) {
    deletRow();
  }

  if (e.target === BtnAdLeft) {
    addColumn();
  }

  if (e.target === BtnDelAP) {
    deleteColumn();
  }
});
