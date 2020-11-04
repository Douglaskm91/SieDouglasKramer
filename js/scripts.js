function openNav() {
    var abremenu = document.getElementById("navigation");
    if (abremenu.className === "navigation") {
        abremenu.className += " menujs";
        document.getElementById("menu-icon").innerHTML = "&Cross;";
    } else {
        abremenu.className = "navigation";
        document.getElementById("menu-icon").innerHTML = "MENU&#x02261;";
    }
}