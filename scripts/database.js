const database = {
    docks: [
        { id: 1, 
            location: "Shanghai, China", 
            volume: "43.5"
        },

        { id: 2, location: "Busan, South Korea", volume: "21.6"},
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockID: 1},
        { id: 2, name: "Boaty McBoatface", dockID: 3},
        { id: 3, name: "Seawise Giant", dockID: 2},
        { id: 4, name: "MacDaddy Haul", dockID: 3},
        { id: 5, name: "We Haul For Less", dockID: 3},
        { id: 6, name: "We're Gonna Need a Bigger Haul", dockID: 2}
    ],
    ships: [
        { id: 1, name: "Starlight Voyager", haulerID: 2},
        { id: 2, name: "Celestial Phoenix", haulerID: 3},
        { id: 3, name: "Galactic Serenity", haulerID: 1},
        { id: 4, name: "Nebula Odyssey", haulerID: 4},
        { id: 5, name: "Solaris Explorer", haulerID: 5},
        { id: 6, name: "Cosmic Horizon", haulerID: 2},
        { id: 7, name: "Orion's Destiny", haulerID: 6},
        { id: 8, name: "Nova Infinity", haulerID: 1},
        { id: 9, name: "Stellar Eclipse", haulerID: 4},
        { id: 10, name: "Aurora Mariner", haulerID: 6},
        { id: 11, name: "Infinity Skies", haulerID: 1},
        { id: 12, name: "Voyager's Quest", haulerID: 3}
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}
export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}
export const getShips = () => {
    return database.ships.map(ship => ({...ship}))
}


