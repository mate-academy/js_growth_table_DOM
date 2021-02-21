'use strict';

const table = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const row = document.getElementsByTagName('tr');
const td = document.createElement('td');

table.addEventListener('click', e => {
	if (e.target.tagName !== 'BUTTON') {
		return;
	};

	switch (e.target.classList[0]) {
		case 'append-row':
			const rowClone = tbody.firstChild.cloneNode(true);
			tbody.appendChild(rowClone);
			break;

		case 'remove-row':
			if (tbody.childElementCount !== 1) {
				tbody.lastElementChild.remove()
			}
			break;
		
		case 'append-column':
			[...row].forEach(e => {
				e.append(td.cloneNode());
			})
			break;

		case 'remove-column':
			if (row[0].childElementCount !== 1) {
				[...row].forEach(e => {
					e.children[0].remove()
				});
			}	
			break;
	}
});
