'use strict';

const container = document.querySelector('.container');

const fabrica = function () {
    const table = document.querySelector('.field');
    const minCount = 1;
    const maxCount = 9;
    const buttons = document.querySelectorAll('button');

    return function (e) {
        const rowCollection = table.rows;
        const lastRowIndex = rowCollection.length - 1;
        const cellLastIndex = rowCollection[0].cells.length - 1;
        const element = e.target;

        for (let indx = 0; indx < buttons.length; indx++) {
            buttons[indx].disabled = false;
        }

        switch (element.className) {
            case 'append-row button':
                if (lastRowIndex > maxCount) {
                    element.disabled = true;

                    return;
                }

                element.disabled = false;

                const newRow = rowCollection[lastRowIndex].cloneNode(true);

                table.append(newRow);
                break;
            case 'remove-row button':
                if (lastRowIndex === minCount) {
                    element.disabled = true;

                    return;
                }
                element.disabled = false;

                rowCollection[lastRowIndex].remove();
                break;

            case 'append-column button':

                if (cellLastIndex === maxCount) {
                    element.disabled = true;

                    return;
                }
                element.disabled = false;

                for (let indx = 0; indx < rowCollection.length; indx++) {
                    const cellsInRow = rowCollection[indx].cells;
                    const lastCell = cellsInRow[cellLastIndex - 1];
                    const newCell = lastCell.cloneNode(true);

                    rowCollection[indx].append(newCell);
                }
                break;

            case 'remove-column button':
                if (cellLastIndex === minCount) {
                    element.disabled = true;

                    return;
                }

                for (let indx = 0; indx < rowCollection.length; indx++) {
                    const cellsInRow = rowCollection[indx].cells;
                    const lastCell = cellsInRow[cellLastIndex];

                    lastCell.remove();
                }
                break;
        }
    };
};

const helperFunc = fabrica();

container.addEventListener('click', helperFunc);

