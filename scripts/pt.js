var workspace = {
    "name":"Homework",
    "items": [

    ]
}
const sidebarConfig = [
    {"type":"Text"},
    {"type":"URL"},
    {"type":"Date"},
]
/* Item Template:
let item = {
    "label":"Subject",
    "type":"dropdown"
    "extra":[
        "Social Studies",
        "Science",
        "Math",
        "Spanish",
        "Band",
        "English"
    ]
}
*/
function populateSidebar(inputs){
    inputs.forEach((input) => {
        let sidebarElement = document.querySelector(".sidebar");
        let element = document.createElement("div");
        let nameElement = document.createElement("div");
        let contElement = document.createElement("div");
        let svgDown = document.createElement("img");
        let svgUp = document.createElement("img");
        svgUp.src = "/assets/arrowup.svg";
        svgDown.src = "/assets/arrowdown.svg";
        svgUp.className = "ptic_up";
        svgDown.className = "ptic_down";
        element.className = "pt_item";
        nameElement.className = "pt_item_name";
        contElement.className = "pt_item_controls";
        nameElement.innerText = input.type;
        nameElement.setAttribute("onclick", "addWorkspaceElem(`" + input.type +"`)");
        contElement.append(svgUp);
        contElement.append(svgDown);
        element.append(nameElement);
        element.append(contElement);
        sidebarElement.append(element);
    })
}
function addWorkspaceElem(input){
    let workspaceElement = document.getElementById("pt_workspace");
    let element = document.createElement("div");
    let nameElement = document.createElement("div");
    let contElement = document.createElement("div");
    let svgDown = document.createElement("img");
    let svgUp = document.createElement("img");
    let svgSet = document.createElement("img");
    svgUp.src = "/assets/arrowup.svg";
    svgDown.src = "/assets/arrowdown.svg";
    svgSet.src = "/assets/settings.svg";
    svgUp.className = "ptic_up";
    svgDown.className = "ptic_down";
    element.className = "ptw_item";
    nameElement.className = "pt_item_name";
    nameElement.contentEditable = "true";
    contElement.className = "pt_item_controls";
    nameElement.innerText = input;
    contElement.append(svgUp);
    contElement.append(svgDown);
    contElement.append(svgSet);
    element.append(nameElement);
    element.append(contElement);
    workspaceElement.append(element);

    let itemJSON = {
        "label":input,
        "type":input,
        "extra":[]
    }

    element.dataset.item = JSON.stringify(itemJSON);
    nameElement.onkeyup = "this.parentElement.dataset.item = this.innerText;";
}

populateSidebar(sidebarConfig);