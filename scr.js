// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial-card');
let index = 0;

function showNextTestimonial() {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}

setInterval(showNextTestimonial, 4000);

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name && email && message) {
    status.textContent = "Thank you! Your message has been sent.";
    status.style.color = "green";
    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
  }
});
