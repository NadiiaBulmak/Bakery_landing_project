document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("menu"),n=document.querySelector(".icon--menu"),t=document.querySelector(".icon--close"),o=document.body,c=document.querySelectorAll("#menu a");n.addEventListener("click",function(){e.classList.add("menu--open"),o.classList.add("no-scroll")}),t.addEventListener("click",function(){e.classList.remove("menu--open"),o.classList.remove("no-scroll")}),c.forEach(function(n){n.addEventListener("click",function(){e.classList.remove("menu--open"),o.classList.remove("no-scroll")})})}),document.addEventListener("DOMContentLoaded",function(){var e=function(){return window.innerWidth>=c},n=function(){o.forEach(function(e){e.classList.remove("animate"),e.style.opacity="1",e.style.transform="none"})},t=function(){var e=new IntersectionObserver(function(e){e.forEach(function(e,n){e.isIntersecting&&setTimeout(function(){e.target.classList.add("animate")},300*n)})},{threshold:.5});o.forEach(function(n){e.observe(n)})},o=document.querySelectorAll(".section__card"),c=1280;e()?t():n(),window.addEventListener("resize",function(){e()?t():n()})});
//# sourceMappingURL=index.5ac601b8.js.map
