function cardCreate(title, cardName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views < 1000000){
        viewStr = views / 1000 + "K"
    }
    else if(views >= 1000000){
        viewStr = views / 1000000 + "M"
    }
    else{
        viewStr = views
    }
   let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"8
                    alt="Image">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cardName} . ${viewStr} . ${monthsOld} months ago</p>
            </div>
        </div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    
}

cardCreate("Shiv Tandav || 16D Music", "CodeofSam", 1000000, 7, "39:59", "https://i.ytimg.com/vi/HCEm0VLHrrY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKZOvLWpNeBYm75tmddWajS0VC-Q")