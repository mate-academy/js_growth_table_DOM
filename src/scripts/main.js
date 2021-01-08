'use strict';

const content = document.querySelector('.container');

function rebuildTable(target) {
  const tableMain = document.querySelector('.field');
  const parentTR = tableMain.children[0];
  const allTR = [...document.querySelectorAll('tr')];

  if (target.classList.contains('append-row')
    && parentTR.children.length < 10) {
    const cloneTR = parentTR.firstChild.cloneNode(true);

    parentTR.append(cloneTR);
  }

  if (target.classList.contains('remove-row')
    && parentTR.children.length > 2) {
    parentTR.lastChild.remove();
  }

  if (target.classList.contains('append-column')
    && allTR[0].children.length < 10) {
    for (let i = 0; i < allTR.length; i++) {
      const cloneTD = allTR[0].firstElementChild.cloneNode(true);

      allTR[i].append(cloneTD);
    }
  }

  if (target.classList.contains('remove-column')
    && allTR[0].children.length > 2) {
    allTR.map(element => element.lastChild.remove());
  }
}

content.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName !== 'BUTTON') {
    return;
  }

  rebuildTable(item);
});
