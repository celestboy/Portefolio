

nbReservations = 0
prixTotal = 0

function update () {
    document.getElementById("nb_reservations").textContent = nbReservations
    document.getElementById("prix_total").textContent = prixTotal
}
update()


document.querySelector(".fifteen").addEventListener("click", () => {
    nbReservations++
    prixTotal += 15
    update()
})
document.querySelector(".twenty").addEventListener("click", () => {
    nbReservations++
    prixTotal += 20
    update()
})
document.querySelector(".twenty-five").addEventListener("click", () => {
    nbReservations++
    prixTotal += 25
    update()
})



document.getElementById("checkout").addEventListener("click", () => {
    if (prixTotal > 0) {
        alert("Commande passée avec succès. \n Total : " + prixTotal + "€");

        nbReservations = 0;
        prixTotal = 0;
        update();
    }
    else {
        alert("Panier vide!")
    }
    
})