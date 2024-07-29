'use strict';

// write code here

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const container = document.querySelector('.container');

const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');
const tableItems = table.children;

const MIN_ITEMS = 2;
const MAX_ITEMS = 10;

const DISABLE_ACTIONS = {
  remove: 'remove',
  append: 'append',
};

const initListener = (component, type, callback) => {
  component.addEventListener(type, callback);
};

const disableButtons = (type, items, ...components) => {
  const [appendButton, removeButton] = components;

  const isMaxItems = items.children.length === MAX_ITEMS;
  const isMinItems = items.children.length === MIN_ITEMS;

  const overIsMin = items.children.length > MIN_ITEMS;
  const lessIsMax = items.children.length < MAX_ITEMS;

  if (type === DISABLE_ACTIONS.append) {
    if (isMaxItems) {
      appendButton.disabled = true;
    }

    if (overIsMin) {
      removeButton.disabled = false;
    }
  }

  if (type === DISABLE_ACTIONS.remove) {
    if (lessIsMax) {
      appendButton.disabled = false;
    }

    if (isMinItems) {
      removeButton.disabled = true;
    }
  }
};

const createNewRow = () => {
  const th = document.createElement('tr');
  const lastRow = table.lastElementChild;

  for (let i = 0; i < lastRow.children.length; i++) {
    const td = document.createElement('td');

    th.append(td);
  }
  table.append(th);

  disableButtons(DISABLE_ACTIONS.append, table, appendRowBtn, removeRowBtn);
};

const removeLastRow = () => {
  table.lastElementChild.remove();

  disableButtons(DISABLE_ACTIONS.remove, table, appendRowBtn, removeRowBtn);
};

const removeColumn = () => {
  for (const row of tableItems) {
    row.querySelector('td').remove();
  }

  disableButtons(
    DISABLE_ACTIONS.remove,
    table.lastElementChild,
    appendColumnBtn,
    removeColumnBtn,
  );
};

const appendColumn = () => {
  for (const row of tableItems) {
    const column = document.createElement('td');

    row.append(column);
  }

  disableButtons(
    DISABLE_ACTIONS.append,
    table.lastElementChild,
    appendColumnBtn,
    removeColumnBtn,
  );
};

const App = () => {
  initListener(container, 'click', (e) => {
    if (e.target.classList.contains('append-row')) {
      createNewRow();
    } else if (e.target.classList.contains('remove-row')) {
      removeLastRow();
    } else if (e.target.classList.contains('append-column')) {
      appendColumn();
    } else if (e.target.classList.contains('remove-column')) {
      removeColumn();
    }
  });
};

App();
