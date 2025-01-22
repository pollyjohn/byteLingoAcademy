//  function isMobile() {
//    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//};


//if (isMobile()) {
//        document.querySelector(".logo img").classList.add("isDesktop");
//        document.querySelector(".logo img").style.right = "50%";

//      } else {
//        document.querySelector(".logo img").style.right = "50%";
//      }

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

if (!isMobile) {
  document.querySelector(".logo img").style.right = "50%";
} else {
  document.querySelector(".logo img").classList.add("desktop-logo");
}



  