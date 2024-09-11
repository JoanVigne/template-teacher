function sectionCards() {
  if (!infos.pricing || !Array.isArray(infos.pricing)) {
    console.error("Invalid data provided to sectionCards function");
    return;
  }
  const sectionCards = document.createElement("section");
  sectionCards.classList.add("section-cards");
  sectionCards.setAttribute("id", "pricing");

  const container = document.createElement("div");
  container.classList.add("container");
  sectionCards.appendChild(container);

  infos.pricing.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = item.title;
    card.appendChild(cardTitle);

    const cardPrice = document.createElement("p");
    cardPrice.textContent = item.price;
    card.appendChild(cardPrice);

    const featureList = document.createElement("ul");
    item.features.forEach((feature) => {
      const featureItem = document.createElement("li");
      featureItem.textContent = feature;
      featureList.appendChild(featureItem);
    });
    card.appendChild(featureList);

    container.appendChild(card);
  });

  main.appendChild(sectionCards);
}
