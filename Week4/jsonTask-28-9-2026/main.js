fetch("./menu.json").then(response => response.json()).then(data =>{

    arr = []
    const item = document.getElementById("item");
    
    for(let i =0; i < data.length;i++){
        item.innerHTML +="name : " + data[i].name  + "<br>"
        item.innerHTML +="price : " + data[i].price  + "<br>"
        item.innerHTML +="availablity : " + data[i].availablity  + "<br>"
        arr.push(data[i].name)
        arr.push(data[i].price)
        arr.push(data[i].availablity)

    }

    localStorage.setItem("arr", arr)
})

