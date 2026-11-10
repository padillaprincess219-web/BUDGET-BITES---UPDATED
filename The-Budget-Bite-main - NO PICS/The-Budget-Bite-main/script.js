const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const submitForm = document.querySelector('.form-submit form');

// active si toggle and menu para matatago si menu kapag nag click sa toggle, and kapag nag click ulit sa toggle, lalabas ulit si menu.
navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
});

const overlay = document.getElementById('overlay');
const messageTitle = document.getElementById('messageTitle');
const messageText = document.getElementById('messageText');

let isComplete = false;

function openDialog() {
    overlay.style.display = 'flex';
}

function closeDialog() {
    overlay.style.display = 'none';

    if (isComplete) {
        submitForm.reset();
    }
}

if (submitForm) {
    submitForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const bName = document.getElementById('bName').value.trim();
        const bAddress = document.getElementById('businessadd').value.trim();
        const bCategory = document.getElementById('category').value;
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!bName || !bAddress || !bCategory || !rating) {
            isComplete = false;
            messageTitle.textContent = 'Incomplete Information';
            messageText.textContent = 'Please complete all information before submitting.';
        } else {
            isComplete = true;
            messageTitle.textContent = 'Thank You!';
            messageText.textContent = 'Your recommendation has been received.';
        }

        openDialog();
    });
}