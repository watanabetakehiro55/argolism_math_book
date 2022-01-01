w = 1000;
N = 20;

function cut(w, h, n){
  if(w == h) return (n == 0);
  if(w > h) { 
    let temp = w; 
    w = h;
    h = temp;
  }
  //あまりの短辺
  let rest = h % w;
  let q = Math.floor(h / w);
  //qが最大値を超えているor短辺が0のとき終了
  if((n - q < 0) || (rest == 0)){
    return (n - q == 0);
  }else{
    return cut(w, rest, n - q);
  }
}

let cnt = 0;
for(let i = 1; i <= w; i++) {
  for(let j = i; j <= w; j++) {
    if(cut(i, j, N)) cnt++;
  }
}
console.log(cnt);