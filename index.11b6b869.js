!function(){var e,o,t;e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),t=document.querySelector("[data-body]"),e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("no-scroll"),o.classList.toggle("is-open")})),function(){var e={openModalBtns:document.querySelectorAll("[data-modal-buy-now-open]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]")};function o(){e.modal.classList.toggle("modal-buy-now__backdrop--is-hidden")}e.openModalBtns.forEach((function(e){return e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtns:document.querySelectorAll("[mod-loc-open]"),closeModalBtn:document.querySelector("[mod-loc-close]"),modal:document.querySelector("[mod-loc]")};function o(){e.modal.classList.toggle("mod-loc-is-hidden")}e.openModalBtns.forEach((function(e){return e.addEventListener("click",o)})),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.11b6b869.js.map
