/*!
* Start Bootstrap - Stylish Portfolio v6.0.1 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-times');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-times');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
  })

  
  

    
    function time() {
        var clock = document.getElementById('spanClock');
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        clock.textContent = 
          ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
      }
      setInterval(time, 1000);

    var DateCont = document.getElementById('currDate');
    var date = new Date();
    var day;
    var month;
    switch (date.getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      switch (date.getMonth()) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
           month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          case 7:
            month = "August";
            break;
          case 8:
            month = "September";
            break;
          case 9:
             month = "October";
            break;
          case 10:
            month = "November";
            break;
          case 11:
            month = "December";
            break;
      }
      DateCont.textContent= day +", "+ date.getDate()+ " "+month +" "+  date.getFullYear();
     
    
    
    
     