var workspace = {
    "name":"Homework",
    "items": [

    ]
}
const sidebarConfig = [
    {"type":"Name"},
    {"type":"YOO"}
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
        document.querySelectorAll(".pt_item").forEach((item) => {item.setAttribute("onclick", "addWorkspaceElem(`" + input.type +"`)")})
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
    svgUp.src = "/assets/arrowup.svg";
    svgDown.src = "/assets/arrowdown.svg";
    svgUp.className = "ptic_up";
    svgDown.className = "ptic_down";
    element.className = "ptw_item";
    nameElement.className = "pt_item_name";
    contElement.className = "pt_item_controls";
    nameElement.innerText = input.type;
    contElement.append(svgUp);
    contElement.append(svgDown);
    element.append(nameElement);
    element.append(contElement);
    workspaceElement.append(element);
}

populateSidebar(sidebarConfig);