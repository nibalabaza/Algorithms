    let toolEl = document.querySelectorAll(".myTooltip");
    toolEl.forEach(element => {
        new bootstrap.Tooltip(element)
    })


    let form = document.querySelector("form");
    console.log("form", form)
    let elements = form.elements;

    for (const element of elements) {
        let type = element.type;
        let date = new Date;
        if (type != "submit") {
            element.addEventListener("invalid", (event) => {
                event.preventDefault();

                if (element.validity.valueMissing) {
                    showTooltip()
                    element.style.borderColor = "red";
                    console.log("C'est champ est obligatoir!")
                } else if (type == "date" || new Date(date.toDateString()) > new Date(date.toDateString())) {
                    console.log("Doit étre égale ou supéreure")
                } else if (type == "number" || element.rangeUnderflow) {
                    console.log("Doit être positif")
                } else {
                    console.log(element.style.borderColor = "green");
                }

            });
        }
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //toast();
        console.log("implement form reset");
        console.log("implement toaster");
    });

    // function toast() {
    //     const toastEl = document.getElementById('toast');
    //     const toast = new bootstrap.Toast(toastEl);
    //     toast.show();
    // }


    function showTooltip() {
        hideTooltip();
        let form = document.querySelector("form");
        let elements = form.elements;
        for (const element of elements) {
            element.classList.add("tooltip-visible");
        }

    }

    function hideTooltip() {
        let el = document.querySelector(".tooltip-visible");
        if (el) {
            el.classList.remove("tooltip-visible");
        }
    }

    const els = document.querySelectorAll(".myTooltip");
    for (let i = 0; i < els.length; i++) {
        els[i].addEventListener('hoover', showTooltip);
    }