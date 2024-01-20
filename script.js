document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Frontend Web Developer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
    };

    var typed = new Typed('#typed-output', options);
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var errorMessage = document.getElementById("error-message");

    errorMessage.innerHTML = ""; 

    if (name.trim() === "") {
        errorMessage.innerHTML += "Please enter your name.<br>";
    }

    if (email.trim() === "") {
        errorMessage.innerHTML += "Please enter your email.<br>";
    } else if (!validateEmail(email)) {
        errorMessage.innerHTML += "Please enter a valid email address.<br>";
    }

    if (message.trim() === "") {
        errorMessage.innerHTML += "Please enter your message.<br>";
    }

    return errorMessage.innerHTML === "";
}

function validateEmail(email) {
    
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");
    const homeSection = document.getElementById("Home");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {
        let currentSection = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section;
            }
        });

        navLinks.forEach((link) => {
            link.parentElement.classList.remove("active");
            if (currentSection && link.getAttribute("href").includes(currentSection.id)) {
                link.parentElement.classList.add("active");
            }
        });

        
        const sectionName = currentSection ? currentSection.getAttribute("data-name") : "Home";
        console.log(sectionName);

     
        const scrollTop = window.scrollY;
        if (scrollTop === 0 || currentSection === homeSection) {
            homeSection.style.position = "fixed";
            
            navLinks.forEach((link) => {
                if (link.getAttribute("href").includes(homeSection.id)) {
                    link.parentElement.classList.add("active");
                }
            });
        } else {
            homeSection.style.position = "relative";
        }
    });
});


