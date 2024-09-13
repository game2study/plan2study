const links = [
    { name:"Home", link:"/", accountNeeded: false },
    { name:"About", link:"/page/about", accountNeeded: false },
    { name:"Sign Up", link:"/page/signup", accountNeeded: false },
    { name:"Log In", link:"/page/login", accountNeeded: false },
]
if (document.getElementById("navbar")) {
    const navbar = document.getElementById("navbar")
    for (let i = 0; i <= links.length; i++){
        let link = document.createElement("a");
        link.className = "navlink"
        link.setAttribute("href", links[i].link);
        link.innerText = links[i].name;
        navbar.appendChild(link)
    }
}