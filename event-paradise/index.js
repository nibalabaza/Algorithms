    const tooltipOptions = {
        title: "This field is required",
        placement: "top"
    };
    let tooltipsMessages = [];
    let toolEl = document.querySelectorAll(".myTooltip");
    toolEl.forEach(tooltipEl => {
        let tooltipEls = new bootstrap.Tooltip(tooltipEl, tooltipOptions)
        tooltipsMessages.push(tooltipEls)
    })

    let form = document.querySelector("form");
    console.log("form", form)
    let elements = form.elements;

    for (const element of elements) {
        console.log(element.id)
        let type = element.type;
        let date = new Date;
        if (type != "submit") {
            element.addEventListener("invalid", (event) => {
                event.preventDefault();
                //tooltipValidation();
                
                if (element.validity.valueMissing) {
                    element.classList.add("is-valid");         
                }
                

            });
        }
    }

    

    function toast() {
        const toastTrigger = document.getElementById('toastTrigger')
        const toast = new bootstrap.Toast(toastTrigger);
        toast.show()
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        toast();
        console.log("implement toaster");
    });

  