function banner() {
  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.setAttribute("id", "banner");

  // title with name
  const title = document.createElement("h2");
  title.textContent = infos.profil.name;
  banner.appendChild(title);
  // sub title with a catchy phrase
  const subTitle = document.createElement("h3");
  subTitle.textContent = infos.profil.subtitle;
  banner.appendChild(subTitle);
  // picture taking most of the space
  //
  main.appendChild(banner);
}
