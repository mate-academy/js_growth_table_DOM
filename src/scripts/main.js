'use strict';

const maxRows = 10;
const maxColumns = 10;
const minRows = 2;
const minColumns = 2;

const table = document.querySelector('.field');
const events = [
  document.querySelector('.append-row'),
  document.querySelector('.remove-row'),
  document.querySelector('.append-column'),
  document.querySelector('.remove-column')];
const actions = [
  () => table.append(table.rows[0].cloneNode(true)),
  () => table.rows[0].remove(),
  () => [...table.rows].forEach(e => e.append(e.children[0].cloneNode(true))),
  () => [...table.rows].forEach(e => e.children[0].remove())];
const disable = [
  () => !(table.rows.length < maxRows),
  () => !(table.rows.length > minRows),
  () => !(table.rows[0].children.length < maxColumns),
  () => !(table.rows[0].children.length > minColumns)];

document.querySelector('.container').addEventListener('click', eventClick => {
  actions[events.indexOf(eventClick.target)]();
  events.forEach((e, index) => (e.disabled = disable[index]()));
});
