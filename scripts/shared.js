const links = [
    { name:"Home", link:"/", accountNeeded: false },
    { name:"About", link:"/page/about", accountNeeded: false },
    { name:"Dashboard", link:"/page/dashboard", accountNeeded: false },
    { name:"Quick Menu", link:"/page/popup", accountNeeded: false },
]
if (document.getElementById("navbar")) {
    const navbar = document.getElementById("navbar")
    for (let i = 0; i < links.length; i++){
        let link = document.createElement("a");
        link.className = "navlink"
        link.setAttribute("href", links[i].link);
        link.innerText = links[i].name;
        navbar.appendChild(link)
    }
}