const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const m = matrix.length;
const n = matrix[0].length;

let tempMat;

console.log(matrix)

for (let i=0;i<m;i++) {
  for (let j=0;j<n;j++) {
    const temp = matrix[j][m-i-1]
    matrix[j][m-i-1] = matrix[i][j]
    matrix[i][j] = temp
    // console.log(matrix[i][j] + ' -> ' + matrix[j][m-i-1])
  }
  console.log(matrix)
}

//console.log(matrix)



