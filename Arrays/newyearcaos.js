// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])

function minimumBribes(q) {

    let d = [];
    
    for(let i=0;i<q.length;i++) {
        const dis = (i+1) - q[i];
        d[q[i]-1] = dis; 
        if (dis < -2) {
            console.log('Too chaotic')
            return;
        }
    }
    
    let cont = 0;
    
    let flag = true;
    
    while(flag) {
        let i = 0;
        for (i;i<q.length;i++) {
            if (d[i] < 0) {
                const temp = d[i-1]
                d[i-1] = d[i] + 1;
                d[i] = temp - 1;
                cont++;
                i = q.length + 2;
            }
        }
        if (i === q.length) flag = false;
    }
    
    console.log(cont);
}
