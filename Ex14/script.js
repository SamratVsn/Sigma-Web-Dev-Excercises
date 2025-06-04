let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div")
    last = last[last.length - 1]
    if(last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
    }
    last.innerHTML = last.innerHTML + "."
}, 500)

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + Math.random() * 5
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const addItem = async (item) => {
    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}

async function main() {
    let text = [
        "Initializing Hacking",
        "Reading Your Files",
        "Password File Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    for (const item of text) {
        await addItem(item);
    }

    await randomDelay()
    clearInterval(t)
}

main()