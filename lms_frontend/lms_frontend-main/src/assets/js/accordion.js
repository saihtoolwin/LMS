export function accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active"); var
                panel = this.nextElementSibling; var icon = this.querySelector(".accordion-icon"); if (panel.style.maxHeight) {
                    panel.style.maxHeight = null; icon.classList.add("fa-plus"); icon.classList.remove("fa-minus");
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; icon.classList.remove("fa-plus"); icon.classList.add("fa-minus");
            }
        });
    }
}
