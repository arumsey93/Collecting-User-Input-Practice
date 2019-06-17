const legoCreation = {
    id: 1,
    creator: "Per Sun",
    color: "Black",
    shape: "Animal",
    creation: "Black Cow"
}

document.querySelector("#btn-lego").addEventListener("click", () => {
    const creator = document.querySelector("#lego_creator").value
    let color = document.querySelector("#lego_color").value
    const legoToSave = {
        creator,
        color
    }
    fetch("http://localhost:8088/legoPage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })
})