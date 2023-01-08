const form = document.querySelector("form");
const elements = form.elements;

const options = {
    title: "Default message",
    placement: "bottom"
};

for (const element of elements) {
    if (element.type !== "submit") {
        element.addEventListener("invalid", (event) => {
            event.preventDefault();
            element.classList.add("is-invalid");//repetation
            helpText(element);
            setTooltipMessages(element);
            let firstInvalidEl = document.querySelector(".is-invalid");
            if (firstInvalidEl != null) {
                firstInvalidEl.focus();
            }

            // }
        });
        element.addEventListener("change", (event) => {
            event.preventDefault();
            helpText(element);
            const valid = element.checkValidity();
            if (valid) {
                setValidEl(element);

            } else {
                setInvalidEl(element);//repetation
            }
        });

        //to delete
        element.addEventListener("reset", (event) => {
            console.log(form.checkValidity());
        });
    }

}

function toast() {
    const toastTrigger = document.getElementById('toastTrigger')
    const toast = new bootstrap.Toast(toastTrigger);
    toast.show()
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let formDate = new FormData(form);
    let eventCreated = {
        name: formDate.get('name'),
        date: formDate.get('date'),
        locationId: formDate.get('location'),
        themeId: formDate.get('theme'),
        rate: formDate.get('rate'),
        description: formDate.get('description')
    };
    let res = await createEvent(eventCreated);
    if (res.status == 204) {
        toast();
        console.log("implement toaster");
        form.reset();
        Array.from(form.elements).forEach((ele) => {
            if (ele.type !== 'button' && ele.type !== 'submit')
                resetInput(ele);
        });
    }


});


function resetInput(element) {
    element.classList.remove("is-valid");
    helpText(element, true);
}

function setTooltipMessages(element) {
    const validity = element.validity;
    let message = null;
    const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, options);
    if (validity.valueMissing) {
        message = "Ce champ est obligatoire";
    } else if (element.type === "number" && element.validity.rangeUnderflow) {
        message = 'Doit être positif';
    } else if (element.type === "date" && element.validity.rangeUnderflow) {
        message = 'Doit être égale ou supérieure à aujourd’hui';
    }
    tooltip.setContent({
        '.tooltip-inner': message
    });

}


function setValidEl(element) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    let tooltip = bootstrap.Tooltip.getInstance(element);
    if (tooltip)
        tooltip.dispose();

}

function setInvalidEl(element) {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    bootstrap.Tooltip.getOrCreateInstance(element).enable();
}

// to change
function helpText(element, reset = false) {
    let helpText;
    if (element.parentElement.classList.contains('input-group')) {
        helpText = element.parentElement.parentElement.querySelector(".helpText");
    } else
        helpText = element.parentElement.querySelector(".helpText");
    if (helpText && element.validity.valid && !reset) {
        helpText.classList.remove("text-danger")
        helpText.classList.add("text-success");
    } else if (helpText && !reset) {
        helpText.classList.add("text-danger")
        helpText.classList.remove("text-success");
    } else {
        helpText.classList.remove("text-danger")
        helpText.classList.remove("text-success");
    }

}


window.onload = async function () {
    const newDate = new Date();
    let today = newDate.toISOString().substring(0, 10);
    const date = document.getElementById("date");
    date.setAttribute("min", today);

    // set themes
    let themes = await getThemes();
    document.getElementById('theme').innerHTML += themes.map((theme) => {
        return `<option value="${theme.id}">${theme.name}</option>`
    });

    // set locations
    let locations = await getLocations();
    document.getElementById('location').innerHTML += locations.map((location) => {
        return `<option value="${location.id}">${location.name}</option>`
    });

}





