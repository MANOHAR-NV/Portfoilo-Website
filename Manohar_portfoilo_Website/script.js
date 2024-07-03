/*======================Toggle icon navbar==============*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function checkInputs() {
  let isValid = true;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.value === "") {
      item.classList.add("error");
      item.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      item.classList.remove("error");
      item.nextElementSibling.style.display = "none";
    }
  });

  return isValid;
}

window.onscroll = () => {
  let top = window.scrollY;
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*======================Scroll reveal==============*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .timeline-items, .project-box, .input-group, .input-group-2",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .education", { origin: "left" });
ScrollReveal().reveal(".home-content p, .timeline-content p", {
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

/*======================Download CV==============*/
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", () => {
  const fileUrl = "Resume/MANOHAR N V-RESUME.pdf";
  const anchorElement = document.createElement("a");
  anchorElement.href = fileUrl;
  anchorElement.download = "MANOHAR N V-RESUME.pdf";
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
});

/*======================Contact Form==============*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate form
  let valid = checkInputs();
  if (!valid) {
    return;
  }

  console.log("Form is valid, attempting to send email...");

  // Send email using SMTP.js
  Email.send({
    SecureToken: "680463a7-de54-450f-84d2-82bd7f7e13a6",
    To: "manoharnv92@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: `<strong>Name:</strong> ${fullName.value}<br>
           <strong>Email:</strong> ${email.value}<br>
           <strong>Phone:</strong> ${phone.value}<br>
           <strong>Message:</strong><br>${message.value}`,
  })
    .then((response) => {
      console.log("Email send response:", response); // Log the response
      if (response === "OK") {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Email send error:", error); // Log any errors
      alert("Failed to send message. Please try again later.");
    });
});

function checkInputs() {
  let isValid = true;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.value.trim() === "") {
      item.classList.add("error");
      item.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      item.classList.remove("error");
      item.nextElementSibling.style.display = "none";
    }
  });

  return isValid;
}

function checkInputs() {
  let isValid = true;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.value.trim() === "") {
      item.classList.add("error");
      item.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      item.classList.remove("error");
      item.nextElementSibling.style.display = "none";
    }
  });

  return isValid;
}

function checkInputs() {
  let isValid = true;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.value.trim() === "") {
      item.classList.add("error");
      item.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      item.classList.remove("error");
      item.nextElementSibling.style.display = "none";
    }
  });

  return isValid;
}

function checkInputs() {
  let isValid = true;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (item.value === "") {
      item.classList.add("error");
      item.nextElementSibling.style.display = "block";
      isValid = false;
    } else {
      item.classList.remove("error");
      item.nextElementSibling.style.display = "none";
    }
  });

  return isValid;
}
