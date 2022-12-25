(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[mod-loc-open]"),
      closeModalBtn: document.querySelector("[mod-loc-close]"),
      modal: document.querySelector("[mod-loc]"),
    };
  
    refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("mod-loc-is-hidden");
    }
  })();