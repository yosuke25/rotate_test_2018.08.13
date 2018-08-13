'use strict'; //厳格モードの宣言はここでいいはず

//よっぽどの理由が無い限り、varではなくletまたはconst(再代入不可)を使おう
let header;
let deg = 0;

//windowのloadイベントの監視
window.addEventListener('load', function () {
  //エレメントを読むのはloadイベント後!
  //DOMのレンダリングが終わっていない可能性あり
  header = document.getElementById('header');
  setInterval(rotate_header, 20);
}, false);


let rotate_header = function () {
  deg = (deg + 6) % 360; //一行で書いてしまう
  /*
  ((0 <= deg && deg < 90) && (270 <= deg && deg < 360))
  だと1回転する間に何度もtrueになる
  つまり、何度も同じ文字をinnerTextにセットしている (1回転あたり30回)
  なので、次のようにすることで1回転あたり2回に減らすことができる
  */
  if (deg === 90) {
    header.innerText = 'ほげほげ';
  } else if (deg === 270) {
    header.innerText = 'hogehoge';
  }
  
  header.style.transform = 'rotateX(' + deg + 'deg)';
}
