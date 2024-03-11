import { getHaulers } from "./database"

export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML = `<li ${hauler.name}</li>`
        
        // Convert each dock object to an <li> and append to the docksHTML string
    }
    haulersHTML += "</ul>"

    return haulersHTML
}