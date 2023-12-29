function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    for(let i = 0; i < sizes.length; i++){
        let w = Math.max(sizes[i][0], sizes[i][1]);
        let h = Math.min(sizes[i][0], sizes[i][1]);
        
        maxW = Math.max(maxW, w);
        maxH = Math.max(maxH, h);
    }

    return maxW * maxH;
}