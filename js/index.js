'use strict';

const header=document.querySelector('.header')

window.addEventListener('scroll',(event)=>{
  
  // console.log(event.type, '<<')
  // console.log(window.scrollY, '<<')
  // console.log(document.documentElement.scrollTop, '<<')

  const wScrollTop=window.scrollY;
  
  if(wScrollTop>60){
    // 배경색을 흰색으로
    // header.style.backgroundColor='#555555aa'
    // header.style.boxShadow='0 2px 2px #cccccc'
    header.classList.add('headerOn')
  }else{
    // header.style.backgroundColor='rgba(46, 40, 40, 0.39)'
    header.classList.remove('headerOn')
  }
});

// 이벤트 위임, 이벤트 객체, preventDefault, DOM
const section=document.querySelectorAll('.section');
const scrollBtnUl=document.querySelector('.scroll-btn>ul');
const scrollBtnUlLi=document.querySelectorAll('.scroll-btn>ul>li');

scrollBtnUl.addEventListener('click', (e)=>{
  
  e.preventDefault();
  
  const eTarget=e.target;

  scrollBtnUlLi.forEach((el,idx)=>{
    if(el===eTarget){
      const sTop=section[idx].offsetTop;
      console.log(`sTop -> ${sTop}`)
      window.scroll({top: sTop, left: 0, behavior: 'smooth'});
      el.classList.add('on');
    }else{
      el.classList.remove('on');
    }
  });
});