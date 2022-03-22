'use strict';
//**UI 이벤트(브라우저와 UI)
// load -> 자바스크립트 객체 (window) load 됐을 때
// window.addEventListener('load',f1)''
// window.addEventListener('load',function(){
//   f1();
// });
window.addEventListener('load',()=>f1());
function f1(){
  // alert("이벤트핸들러 호출")
  console.log("이벤트핸들러 호출")
}

// unload -> 자바스크립트 객체 (window) 꺼질 때 -> 사용을 권장하지 않는다
window.addEventListener('beforeunload', function(event) {
  console.log("beforeunload");
});
window.addEventListener('unload',()=>{
  console.log("unload 호출")
});

// error -> 자바스크립트 객체 (window) error를 발생 시켰을 때

// resize -> window 크기가 변경 되었을 때
window.addEventListener('resize',(e)=>{
  console.log(e.target)
  console.log(e.target.innerWidth)

  if(e.target.innerWidth<=600){
    document.body.style.backgroundColor='#00ff00'
  }else{
    document.body.style.backgroundColor='#ffffff'
  }
});

// scroll -> window의 scroll의 위치가 변경 되었을 때 ***  
window.addEventListener('scroll',(e)=>{
  const topScroll=document.documentElement.scrollTop;


  if(topScroll<=50){
    document.body.style.backgroundColor='#ffffff'
  }
  if(topScroll>50){
    console.log(topScroll)
    document.body.style.backgroundColor='#ffff00'
  }

  if(topScroll>200){
    document.body.style.backgroundColor='#ff0000'
  }
});