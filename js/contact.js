function contact() {
  if (!infos.contact) {
    console.error("Invalid data provided to contact function");
    return;
  }
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact");
  contactSection.setAttribute("id", "contact");

  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = "Contact";

  // Create contact details
  const emailParagraph = document.createElement("p");
  emailParagraph.innerHTML = `<strong>Email:</strong> <a href="mailto:${infos.contact.email}">${infos.contact.email}</a>`;

  const phoneParagraph = document.createElement("p");
  phoneParagraph.innerHTML = `<strong>Phone:</strong> <a href="tel:${infos.contact.phone}">${infos.contact.phone}</a>`;

  const addressParagraph = document.createElement("p");
  addressParagraph.innerHTML = `<strong>Address:</strong> ${infos.contact.address}`;

  // Append elements to the section
  contactSection.appendChild(heading);
  contactSection.appendChild(emailParagraph);
  contactSection.appendChild(phoneParagraph);
  contactSection.appendChild(addressParagraph);

  // Append the section to the main element
  const main = document.querySelector("main");
  if (main) {
    main.appendChild(contactSection);
  } else {
    console.error("Main element not found");
  }
}
