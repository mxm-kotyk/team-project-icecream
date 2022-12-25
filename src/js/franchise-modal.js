(() => {
    const refs = {
      openModalBtn: document.querySelector("[mod-fra-open]"),
      closeModalBtn: document.querySelector("[mod-fra-close]"),
      modal: document.querySelector("[mod-fra]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrop is-hidden");
    }
  })();