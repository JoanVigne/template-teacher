function footer() {
  const footer = document.querySelector("footer");

  // Footer text
  const footerText = document.createElement("p");
  footerText.classList.add("footer-text");
  footerText.textContent = "© 2024 - All rights reserved";
  footer.appendChild(footerText);

  // Navigation
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  infos.header.navigation.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item;
    a.href = "#" + item;
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  footer.appendChild(nav);
}
