const customRange3 = document.getElementById("customRange3")
const precio = document.getElementById("precio")
const visitas = document.getElementById("visitas")
const arrayVisitas = ["10K", "50K", "100K", "500K", "1M"]

customRange3.addEventListener("input", () => {
    var valorActual = customRange3.value;
    precio.textContent = valorActual;
    visitas.textContent = arrayVisitas[(valorActual / 8 - 1)]
})