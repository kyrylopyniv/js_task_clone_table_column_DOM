'use strict';

const tRows = document.querySelectorAll('tr');

for (let i = 0; i < tRows.length; i++) {
  const clonedCell = tRows[i].children[1].cloneNode(true);

  /* clonedCell.cloneNode(); */

  tRows[i].insertBefore(clonedCell,
    tRows[i].children[tRows[i].children.length - 1]);
};

// write your code here
