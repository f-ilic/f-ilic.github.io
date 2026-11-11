// Image slideshows on project pages.
//
// Markup:
//   <div class="slideshow-container" data-slideshow="NAME">
//     <div class="slide">...</div> ...
//     <a class="prev" role="button" tabindex="0" aria-label="Previous slide">&#10094;</a>
//     <a class="next" role="button" tabindex="0" aria-label="Next slide">&#10095;</a>
//   </div>
//   <div data-slideshow-dots="NAME">
//     <span class="dot" role="button" tabindex="0" aria-label="Show slide 1"></span> ...
//   </div>
//
// Controls work with mouse, touch and keyboard (Enter / Space), and the current dot is
// exposed to screen readers via aria-current.
(function () {
  function onActivate(element, handler) {
    element.addEventListener('click', handler);
    element.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handler();
      }
    });
  }

  function initSlideshow(container) {
    var name = container.getAttribute('data-slideshow');
    var slides = container.querySelectorAll('.slide');
    var dotsBox = document.querySelector('[data-slideshow-dots="' + name + '"]');
    var dots = dotsBox ? dotsBox.querySelectorAll('.dot') : [];
    var current = 0;
    if (!slides.length) return;

    function show(n) {
      current = (n + slides.length) % slides.length;
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = i === current ? 'block' : 'none';
      }
      for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('active', j === current);
        if (j === current) dots[j].setAttribute('aria-current', 'true');
        else dots[j].removeAttribute('aria-current');
      }
    }

    var prev = container.querySelector('.prev');
    var next = container.querySelector('.next');
    if (prev) onActivate(prev, function () { show(current - 1); });
    if (next) onActivate(next, function () { show(current + 1); });
    Array.prototype.forEach.call(dots, function (dot, i) {
      onActivate(dot, function () { show(i); });
    });

    show(0);
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-slideshow]'), initSlideshow);
})();
