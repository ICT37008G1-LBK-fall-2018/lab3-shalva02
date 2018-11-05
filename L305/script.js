var all = prompt("all");
var names = [];
alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','w','x','y','z']; //.split('')
for (i = 0; i < all; i++) {
    var nameIn = prompt("names");
    names.push("  " + nameIn);

}
alert(names.sort());