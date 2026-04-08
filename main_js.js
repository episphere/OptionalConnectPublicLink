/* Connect for Cancer Prevention Study — main.js
   Handles: smooth scroll, active sidenav, mobile nav helpers */

(function () {
  'use strict';

  /* ---- Smooth scroll for in-page anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80; // header height clearance
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ---- Active sidenav link on scroll ---- */
  var sideLinks = document.querySelectorAll('.connect-sidenav__link');
  if (sideLinks.length) {
    var sections = Array.from(sideLinks).map(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    }).filter(Boolean);

    var onScroll = function () {
      var scrollY = window.scrollY + 120;
      var current = sections[0];
      sections.forEach(function (sec) {
        if (sec.offsetTop <= scrollY) current = sec;
      });
      sideLinks.forEach(function (link) {
        link.style.fontWeight = '400';
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current.id) {
          link.style.fontWeight = '700';
          link.style.color = '#1b3a5c';
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- NCI logo fallback: if SVG fails, show text ---- */
  var nciLogo = document.querySelector('.nci-header-bar__logo img');
  if (nciLogo) {
    nciLogo.addEventListener('error', function () {
      var fallback = document.createElement('span');
      fallback.textContent = 'National Cancer Institute';
      fallback.style.cssText = 'color:white;font-weight:700;font-size:1rem;';
      nciLogo.parentNode.replaceChild(fallback, nciLogo);
    });
  }

})();
