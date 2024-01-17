const stateBorders = {
    wa: {
        name: "Washington",
        borders: ["id", "or"]
    },
    or: {
        name: "Oregon",
        borders: ["wa", "id", "ca", "nv"]
    },
    id: {
        name: "Idaho",
        borders: ["wa", "or", "mt", "wy", "ut", "nv"]
    },
    ca: {
        name: "California",
        borders: ["or", "nv", "az"]
    },
    mt: {
        name: "Montana",
        borders: ["id", "wy", "nd", "sd"]
    },
    wy: {
        name: "Wyoming",
        borders: ["id", "mt", "co", "ne", "sd", "ut"]
    },
    ut: {
        name: "Utah",
        borders: ["id", "wy", "co", "nm", "az", "nv"]
    },
    az: { name: "Arizona", borders: ["ca", "nv", "ut"] },
    nm: { name: "New Mexico", borders: ["co", "az", "ut"] },
    co: { name: "Colorado", borders: ["wy", "ne", "ks", "ok", "nm", "ut"] },
    ne: { name: "Nebraska", borders: ["wy", "co", "ks", "mo", "ia", "sd"] },
    nd: { name: "North Dakota", borders: ["mt", "sd", "mn"] },
    sd: { name: "South Dakota", borders: ["nd", "mn", "ia", "ne", "wy", "mt"] },
    nv: { name: "Nevada", borders: ["or", "id", "ut", "az"] }
}

module.exports = stateBorders
