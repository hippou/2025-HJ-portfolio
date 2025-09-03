// scrollmagic 설치
const spyEls = document.querySelectorAll('section.scroll-spy');
const controller = new ScrollMagic.Controller();

spyEls.forEach(function (spyEl) {
  // create a scene
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5,// 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!)
});

//click me  버튼 눌렀을때 애니메이션 추가 
const shaking = document.querySelector(".main-btn"); 
const namelists = document.querySelectorAll(".name");
const about = document.querySelector(".about");

shaking.addEventListener('click',function(){
  namelists.forEach(function(namelist) {
    namelist.classList.remove("animate-drop");

    void namelist.offsetWidth;

    namelist.classList.add("animate-drop"); 
  });
})

about.addEventListener('click',function(){
  namelists.forEach(function(namelist) {
    namelist.classList.remove("animate-drop");

    void namelist.offsetWidth;

    namelist.classList.add("animate-drop"); 
  });
})


// swiper
const swiper = new Swiper('.project .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },

});


//페이지 최상단으로 이동 
const topBtn = document.querySelector('#toTop');
const scrollContainer = document.querySelector('.scroll');

scrollContainer.addEventListener('scroll', function () {
  console.log('스크롤 감지됨', scrollContainer.scrollTop);

  if (scrollContainer.scrollTop > 80) {
    topBtn.style.opacity = '1';
    topBtn.style.transform = 'translateX(0)';
  } else {
    topBtn.style.opacity = '0';
    topBtn.style.transform = 'translateX(100px)';
  }
});

topBtn.addEventListener('click', function (e) {
  e.preventDefault(); // <a href="#">의 기본 동작 방지
  scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
});
