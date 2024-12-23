document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default submission
    const form = e.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});
