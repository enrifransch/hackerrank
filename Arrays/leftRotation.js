//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {

  const n = a.length - d
  const arr = [];
  for (let i=0;i<a.length;i++) {
      arr[(i+n)%a.length] = a[i]
  }
  return arr;
}