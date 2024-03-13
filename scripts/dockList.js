import { getDocks, getHaulers } from "./database.js"
const docks = getDocks()
const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            //get the dock id value of the dock clicked
            const dockIdNumber = itemClicked.dataset.dock_id
            let haulerArray = []
            for (const hauler of haulers) {
                if (parseInt(dockIdNumber) === hauler.dockID) {
                    haulerArray.push(hauler.name)
                }
            }
            if (haulerArray.length === 0) {
                window.alert(`The ${itemClicked.dataset.docklocation} dock is currently unloading nothing`)
            }
            else {
                window.alert(`The ${itemClicked.dataset.docklocation} dock is currently unloading ${haulerArray.join(", ")}`)
            }
            //for each dock of docIdNumber see if it is === to dock ID in haulers objects
            //if the number is equal, then print one of the following
            //if there is one hauler, print string
            //if there are more than one print string
            //else if it does not match any of the ids, print string

        }
    }
)

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock" data-dock_id=${dock.id} data-docklocation=${dock.location}> ${dock.location} can hold ${dock.volume} million tons of cargo</li>`

        // Convert each dock object to an <li> and append to the docksHTML string
    }

    docksHTML += "</ul>"

    return docksHTML
}