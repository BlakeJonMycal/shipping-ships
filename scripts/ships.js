import { getShips, getHaulers } from "./database.js";
const haulingShips = getHaulers()
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haul_id
            const shipName = itemClicked.dataset.ship_name
            // Define a default object for the found hauler
            let haulingShipObject = {name:""}
            // Iterate the array of hauler objects
            for (const hauler of haulingShips) {
                // Does the haulerId foreign key match the id of the current hauler?
                if ( parseInt(haulerId) === hauler.id) {
                // Reassign the value of `haulingShip` to the current hauler
                haulingShipObject.name = `${hauler.name}`
                }
            }
            window.alert(`${shipName} is being hauled by ${haulingShipObject.name}`)
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
        }
    }
)
export const ShipList = () => {
    const ships = getShips()
    ships.sort((a, b) => a.name.localeCompare(b.name));

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-ship_id="${ship.id}"
                            data-haul_id="${ship.haulerID}"
                            data-type="ship"
                            data-ship_name="${ship.name}" 
                    >${ship.name}</li>`
        //data-type established as ships
        // Convert each dock object to an <li> and append to the docksHTML string
    }
    shipsHTML += "</ul>"

    return shipsHTML
}