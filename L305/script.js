var all = prompt("all");
var names = [];
for (i = 0; i < all; i++) {
    var nameIn = prompt("names");
    names.push("  " + nameIn);

}
alert(names.sort());