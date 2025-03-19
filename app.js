const backendURL = "https://backend-36z7.onrender.com"; // Cambia por la URL de tu backend

// Obtener los items
async function fetchItems() {
    const response = await fetch(`${backendURL}/items`);
    const items = await response.json();
    document.getElementById("items").innerHTML = items.map(item => `<li>${item.name}</li>`).join('');
}

// Agregar un item
async function addItem() {
    const input = document.getElementById("itemInput");
    const name = input.value.trim();
    if (!name) return alert("Escribe algo");

    await fetch(`${backendURL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });

    input.value = "";
    fetchItems();
}

// Cargar items al inicio
fetchItems();
