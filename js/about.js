function about() {
  if (!infos.profil) {
    console.error("Invalid data provided to about function");
    return;
  }
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");
  aboutSection.setAttribute("id", "about");

  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = "About";

  const container = document.createElement("div");
  container.classList.add("container");
  // Create image
  const image = document.createElement("img");
  image.src = infos.profil.imageAbout;
  image.alt = `${infos.profil.name}'s banner`;

  const birthdayItem = document.createElement("strong");
  const age =
    new Date().getFullYear() - new Date(infos.profil.birthday).getFullYear();
  birthdayItem.textContent = age + " years old";

  // para
  const containerParagraph = document.createElement("div");
  containerParagraph.classList.add("container-paragraph");
  const firstParagraph = document.createElement("p");
  firstParagraph.textContent = `Hi, my name is ${infos.profil.name}, I am ${age} years old and I am an ${infos.profil.job}`;
  const secondParagraph = document.createElement("p");
  secondParagraph.textContent = infos.profil.story;
  // Append elements to the section
  aboutSection.appendChild(heading);
  container.appendChild(image);
  containerParagraph.appendChild(firstParagraph);
  containerParagraph.appendChild(secondParagraph);
  container.appendChild(containerParagraph);
  aboutSection.appendChild(container);

  // Append the section to the main element
  const main = document.querySelector("main");
  if (main) {
    main.appendChild(aboutSection);
  } else {
    console.error("Main element not found");
  }
}
