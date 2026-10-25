document.addEventListener('DOMContentLoaded', function() {
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  const headerTop = headerInner.offsetTop;

  window.addEventListener('scroll', function() {
    if (window.scrollY > headerTop) {
      headerInner.classList.add('is-sticky');
      document.body.classList.add('has-sticky-header');
    } else {
      headerInner.classList.remove('is-sticky');
      document.body.classList.remove('has-sticky-header');
    }
  });
});