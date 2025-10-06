const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);

}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className ="cursus";
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value !== "") { /* !== is een strikte vergelijking, != vergelijkt 2 waardes zonder rekening te houden
    met hun type. JavaScript probeert automatisch de types te converteren (type coercion) voordat ze worden vergeleken*/
        alert("Jouw naam is " + txtName.value);
    }

    console.log ("Jouw naam is " + txtName.value);
    console.log (`Jouw naam is ${txtName.value}`);

window.addEventListener("load", setup);}

