(()=>{const e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),t=document.querySelector("[data-body]");e.addEventListener("click",(()=>{const l="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!l),t.classList.toggle("no-scroll"),o.classList.toggle("is-open")}))})(),(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-buy-now-open]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]")};function o(){e.modal.classList.toggle("modal-buy-now__backdrop--is-hidden")}e.openModalBtns.forEach((e=>e.addEventListener("click",o))),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtns:document.querySelectorAll("[mod-loc-open]"),closeModalBtn:document.querySelector("[mod-loc-close]"),modal:document.querySelector("[mod-loc]")};function o(){e.modal.classList.toggle("mod-loc-is-hidden")}e.openModalBtns.forEach((e=>e.addEventListener("click",o))),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.48b1350b.js.map
