(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("modal-buy-now__backdrop--is-hidden");
  }
})();