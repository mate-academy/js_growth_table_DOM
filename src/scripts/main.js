'use strict';

const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const trList = [...document.querySelectorAll('tr')];
const tBody = document.querySelector('tBody');

document.querySelector('.container').addEventListener('click', e => {
  const item = e.target;

  switch (item.classList[0]) {
    case 'append-column':
      for (const i of trList) {
        const newTd = document.createElement('td');

        i.append(newTd);
      }

      if (countTrList() > 9) {
        setAtr(addColumnBtn);
      }
      break;

    case 'remove-column':
      for (const i of trList) {
        i.removeChild(i.lastElementChild);
      }

      if (countTrList() < 3) {
        setAtr(removeColumnBtn);
      }
      break;

    case 'append-row':
      const trCopy = tBody.firstElementChild.cloneNode(true);

      tBody.append(trCopy);

      if (countTBodyLeng() > 9) {
        setAtr(addRowBtn);
      }
      break;

    default:
      if (item.classList[0] === 'remove-row') {
        tBody.removeChild(tBody.lastElementChild);

        if (countTBodyLeng() < 3) {
          setAtr(removeRowBtn);
        }
      }
      break;
  }

  if (countTrList() <= 9) {
    deleteAtr(addColumnBtn);
  }

  if (countTrList() >= 3) {
    deleteAtr(removeColumnBtn);
  }

  if (countTBodyLeng() >= 3) {
    deleteAtr(removeRowBtn);
  }

  if (countTBodyLeng() <= 9) {
    deleteAtr(addRowBtn);
  }
});

const countTrList = () => {
  return document.querySelectorAll('tr')[0].children.length;
};

const countTBodyLeng = () => {
  return [...document.querySelector('tBody').children].length;
};

const setAtr = (btn) => {
  btn.setAttribute('disabled', '');
};

const deleteAtr = (btn) => {
  btn.removeAttribute('disabled');
};
