function Description(index){
    var Mask = document.getElementsByClassName("HeaderMask")[index]
    var Description = document.getElementsByClassName("Header")[index]

    Description.style.filter = "none"
    Mask.classList.add("shiftLeft")
    Mask.style.visibility = "hidden"
}

document.onload = () => {
    console.log("Ready")
}