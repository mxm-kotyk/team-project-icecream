(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-read-more-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-more-close]"),
    modal: document.querySelector("[data-modal-read-more]"),
  };

  refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("modal-read-more__backdrop--is-hidden");
  }
})();