import { getHaulers, getShips } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulers()
    haulers.sort((a, b) => a.name.localeCompare(b.name));
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}"
                            data-type="hauler">
                             ${hauler.name}</li>`
        
        // Convert each dock object to an <li> and append to the docksHTML string
    }
    haulersHTML += "</ul>"

    return haulersHTML
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            
            // Get the id of the hauler clicked
            const haulerID = itemClicked.dataset.id
            // Start a counter variable at 0
            let shipCounter = 0
            // Iterate all of the shipping ships
            const shippingShips = getShips()
            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerID) === ship.haulerID) {
                    shipCounter++
                }
                    // Increase the counter by 1
          }
        window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)