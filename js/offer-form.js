const form = document.querySelector(".offer__wrapper__form");

function handleSubmit(event) {
    event.preventDefault();
    const status = document.querySelector(".offer__wrapper__form__status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: 'post',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            $('#exampleModal').modal('toggle');
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)