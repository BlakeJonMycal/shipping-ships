import { HaulerList} from "./haulers"
import { ShipList } from "./ships"
import { DockList } from "./dockList"
const parentHTMLElement = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="list_ships">
        <h2>Shipping Ships</h2>
        ${ShipList()}
    </section>
    <section class="list_haulers">
        <h2>Ship Haulers</h2>
        ${HaulerList()}
    </section>
    <section class="list_docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`

parentHTMLElement.innerHTML = applicationHTML