// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;

    // Basic validation
    if (name === '' || email === '' || date === '' || service === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Success message
    alert('Thank you, ' + name + '! Your appointment has been booked for ' + date + ' for ' + service + ' service.');
    
    // Optionally reset the form after successful submission
    document.getElementById('appointmentForm').reset();
});
// Function to handle switching between tabs
function openTab(evt, serviceName) {
    // Hide all tab content by default
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tablinks
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and set the tab as active
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab open
document.getElementById("cardiology").style.display = "block";
// Function for Accordion Toggle
var accordions = document.getElementsByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

