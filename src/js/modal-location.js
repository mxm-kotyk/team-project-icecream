(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-mod-loc-open]"),
      closeModalBtn: document.querySelector("[data-mod-loc-close]"),
      modal: document.querySelector("[data-mod-loc]"),
    };
  
    refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("mod-loc-is-hidden");
    }
  })();