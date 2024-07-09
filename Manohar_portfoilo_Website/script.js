/*======================Toggle icon navbar==============*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*======================sticky navbar==============*/
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

/*======================Remove toggle icon and navbar==============*/
menuIcon.classList.remove("fa-x");
navbar.classList.remove("active");

/*======================Scroll reveal==============*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .timeline-items, .project-box, .input-group, .input-group-2",
  { origin: "button" }
);
ScrollReveal().reveal(".home-content h1 .education", { origin: "left" });
ScrollReveal().reveal(".home-content p .timeline-content p", {
  origin: "right",
});

/*======================type js==============*/
const typed = new Typed(".multi-text", {
  strings: ["Front-End Developer", "Web Designer", "Youtuber"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
// Simple form validation
document.querySelector("form").addEventListener("submit", function (event) {
  let isValid = true;
  this.querySelectorAll("input, textarea").forEach((input) => {
    if (!input.value) {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (!isValid) {
    event.preventDefault();
    alert("Please fill in all required fields.");
  }
});

// Get the button element
const downloadButton = document.getElementById("downloadButton");

// Add click event listener to the button
downloadButton.addEventListener("click", () => {
  // Replace this URL with the actual URL of your file
  const fileUrl = "Resume/Anchith New copy resume.pdf";

  // Create a temporary anchor element
  const anchorElement = document.createElement("a");
  anchorElement.href = fileUrl;

  // Set the download attribute to force download
  anchorElement.download = "AnchithGeorge.pdf";

  // Append the anchor element to the body
  document.body.appendChild(anchorElement);

  // Click the anchor element to trigger download
  anchorElement.click();

  // Remove the anchor element from the body
  document.body.removeChild(anchorElement);
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `FullName: ${fullName.value} <br>Email: ${email.value} <br>PhonNumber: ${phone.value} <br>Subject: ${subject.value} <br>Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anchith2110@gmail.com",
    Password: "FECD1D44C643760A79B2CFF7FE40A23743CB",
    To: "anchith2110@gmail.com",
    From: document.getElementById(email).value,
    Subject: document.getElementById(subject).value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == OK) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter the valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});

// preloder script
