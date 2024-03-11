import { getShips } from "./database";

export const ShipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML = `<li ${ship.name}</li>`
        
        // Convert each dock object to an <li> and append to the docksHTML string
    }
    shipsHTML += "</ul>"

    return shipsHTML
}