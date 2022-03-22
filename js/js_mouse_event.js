'use strict';
// *** 마우스
// click -> 마우스를 눌렀다가 뗐을 때
// id btn 선택 click이벤트로 바인딩
const subCon=document.querySelector('.sub-con');
const btn1=document.querySelector('#btn1');

btn1.addEventListener('click',(event)=>{
  console.log(event.type);
  subCon.style.width='400px'
  subCon.style.height='200px'
  subCon.style.border='1px solid #0000ff'
});

// dbclick -> 더블 클릭
// class btn2 첫번째선택 dbclick이벤트로 바인딩
// subCon "SUBCON" 텍스트를 정가운데 추가
const btn2=document.querySelectorAll('button.btn2');

btn2[0].addEventListener('dblclick',(event)=>{
  console.log(event.type);
  subCon.innerText="SUBCON"
  subCon.style.lineHeight='200px'
  subCon.style.textAlign='center'
  // subCon.style.display='flex'
  // subCon.style.justifyContent='center'
});

// mousedown -> 마우스를 눌렀을 때
btn2[1].addEventListener('mousedown',()=>{
  console.log(event.type)
});
btn2[1].addEventListener('click',()=>{
  console.log(event.type)
});

// mouseup -> 마우스를 눌렀다가 뗐을 때
btn2[1].addEventListener('mouseup',()=>{
  console.log(event.type)
});

// // 타겟 영역 (자식 포함)
// mouseover -> 마우스를 타겟영역에 오버 했을 때
btn2[2].addEventListener('mouseover', ()=>{
  console.log(event.type)
});

const gnbLi=document.querySelectorAll('.gnb>ul>li')

gnbLi[0].addEventListener('mouseover',(e)=>{
  console.log(e.target.parentElement)

  const liTag=e.target.parentElement;
  console.log(liTag.children[1])

  liTag.children[1].style.display='block';

});

// mouseout -> 마우스를 타겟영역에 오버하고 아웃할 때
btn2[2].addEventListener('mouseout', ()=>{
  console.log(event.type)
});

// // 타겟만 (자식 제외)
// mouseenter -> 마우스를 타겟에 오버 했을 때
const btn=document.querySelectorAll('button');
btn[4].addEventListener('mouseenter', ()=>{
  console.log(event.type)
});

// mouseleave -> 마우스를 타겟에 오버했다가 벗어났을 때
btn[4].addEventListener('mouseleave', ()=>{
  console.log(event.type)
});