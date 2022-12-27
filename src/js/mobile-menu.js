(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuLink = document.querySelectorAll('.close-menu');
  const menuBtnBuy = document.querySelectorAll('.buy-now__button');
  const bodyRef = document.querySelector('[data-body]');
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    bodyRef.classList.toggle('no-scroll');
    mobileMenuRef.classList.toggle('is-open');
  });
  menuLink.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.classList.toggle('is-open');
      bodyRef.classList.remove('no-scroll');
    });
  });
menuBtnBuy.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      bodyRef.classList.remove('no-scroll');
    });
  });
})();