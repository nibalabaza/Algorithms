let form = document.querySelector("form");
let elements = form.elements;
let tooltipTriggerList = [].slice.call(elements)
window.tooltipList = {};
tooltipTriggerList.forEach(function (ele) {
    if (ele.classList.contains('myTooltip'))
        tooltipList[ele.id] = bootstrap.Tooltip.getOrCreateInstance(ele);
})



let validateIndex = {
    ele: "",
    error: false

};
for (const element of elements) {
    //console.log(element.id)
    let type = element.type;
    let date = new Date();
    if (type != "submit") {
        element.addEventListener("invalid", (event) => {
            event.preventDefault();
            if (element.validity.valueMissing && !validateIndex.error) {
                element.classList.add("is-invalid");
                if (tooltipList[element.id]) {
                    tooltipList[element.id].enable();
                    tooltipList[element.id].hide();
                    tooltipList[element.id]._element.dataset.bsOriginalTitle = "This is a required field"
                    tooltipList[element.id].show()
                    validateIndex.error = true;
                    validateIndex.ele = element.id;
                    //  tooltipList[element.id].()
                }

            }
            // if (type == "date" || new Date(date.toDateString()) > new Date(date.toDateString())) {
                
            //     console.log("It should be equal or greater than today")
            // }
            // if (type == "number" || element.rangeUnderflow) {
            //     tooltipList[element.id]._element.dataset.bsOriginalTitle = "positive number "
            //     console.log("It should be a positive number")
            // }
        });
        element.addEventListener('input', validate)
        element.addEventListener('change', validate)
    }
}

function validate(e) {
    if (e.target.validity.valid) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid')
        if (validateIndex.ele === e.target.id) {
            validateIndex = {
                ele: '',
                error: false
            }
        }
    }
    if (tooltipList[e.target.id]) {
        tooltipList[e.target.id].hide();
        tooltipList[e.target.id].disable();
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








