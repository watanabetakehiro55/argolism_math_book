
//長辺の長さ
let long_side = 1000;
//期待値の個数
N = 20;

function cut(long_side, short_side){
  //長辺と短辺が等しい場合終了
  if(long_side == short_side)  return 1;
  //長辺が長い場合
  if(long_side > short_side){

    //短辺と長辺を入れ替える
    let temp = long_side; 
    long_side = short_side;
    short_side = temp;
  }

  //r => 折り返した後の短辺
  let r = short_side % long_side;
  
  //resultで個数を返す
  let result = Math.floor(short_side / long_side);

  //短辺が余っていたら再度折る
  if(r > 0) result += cut(long_side, r);
  return result;
}

let cnt = 0;
for(let i = 1; i <= long_side; i++) {
  for(let j = i; j <= long_side; j++) {
    if(cut(i, j) == N){
      // console.log(i + "," + j);
      cnt++;
    }
  }
}
console.log(cnt);