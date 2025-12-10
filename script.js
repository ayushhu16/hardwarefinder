// Example data (you can replace this with real JSON later)
const hardwareItems = [
  { name: "Intel i5 12400F", type: "CPU", price: "$185" },
  { name: "Ryzen 5 5600X", type: "CPU", price: "$220" },
  { name: "RTX 3060", type: "GPU", price: "$350" },
  { name: "GTX 1660 Super", type: "GPU", price: "$230" },
  { name: "Corsair Vengeance 16GB RAM", type: "RAM", price: "$60" }
];

function renderItems() {
  const container = document.getElementById("itemsList");
  container.innerHTML = "";

  hardwareItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const type = document.createElement("p");
    type.textContent = "Type: " + item.type;

    const price = document.createElement("p");
    price.textContent = "Price: " + item.price;

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(price);

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderItems();
});
