let matrix = [];
const n = 3;

const times = n * n;
let cont = 1;

fillMatrix(n);

let tb = 0;
let lb = 0;
let rb = n;
let db = n;

spiral(n);
console.log(matrix)

function fillMatrix(n) {
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
}


function spiral(n) {
  if (n === 1) {
    return 1;
  }
  rightM(0, 0);
  return;
}

function rightM(left, right) {
  for (right; right < rb; right ++) {
    matrix[left][right] = cont;
    cont ++;
  }
  tb++;
  if(cont > times) return;
  downM(left + 1, right - 1);
}

function downM(left, right) {
  for (left; left < db; left ++) {
    matrix[left][right] = cont;
    cont ++;
  }
  rb--;
  if(cont > times) return;
  leftM(left - 1, right-1);
}

function leftM(left, right) {
  for (right; right >= lb; right --) {
    matrix[left][right] = cont;
    cont ++;
  }
  db--;
  if(cont > times) return;
  upM(left - 1, right);
}

function upM(left, right) {
  for (left; left >= tb; left --) {
    matrix[left][right] = cont;
    cont ++;
  }
  lb++;
  if(cont > times) return;
  rightM(left, right + 1);
}


