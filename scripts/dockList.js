import { getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML = `<li ${dock.location} can hold ${dockvolume} million tons of cargo</li>`
        
        // Convert each dock object to an <li> and append to the docksHTML string
    }

    docksHTML += "</ul>"

    return docksHTML
}