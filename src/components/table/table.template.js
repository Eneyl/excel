const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return /* html*/ `
    <div class="cell" contenteditable></div>
  `;
}

function createRow(index, content = '') {
  return /* html*/ `
    <div class="row">
      <div class="row-info">${index ? index : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toColumn(col) {
  return /* html*/ `
    <div class="column">${col}</div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function createCols(heading, colsCount) {
  return heading
    ? new Array(colsCount).fill('').map(toChar).map(toColumn).join('')
    : new Array(colsCount).fill('').map(toCell).join('');
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = createCols('heading', colsCount);

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = createCols('', colsCount);
    rows.push(createRow(i + 1, cells));
  }
  return rows.join('');
}
