(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-about-product-open]"),
    closeModalBtn: document.querySelector("[data-modal-about-product-close]"),
    modal: document.querySelector("[data-modal-about-product]"),
  };

  refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("modal-backdrop-about-product--is-hidden");
  }
})();