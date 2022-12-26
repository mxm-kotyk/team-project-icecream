(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mod-fra-open]"),
      closeModalBtn: document.querySelector("[data-mod-fra-close]"),
      modal: document.querySelector("[data-mod-fra]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();