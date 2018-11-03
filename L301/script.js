var text = "რეკლამა მარკეტინგი ვირუსი";
var words = [ "რეკლამა", "მარკეტინგი", "ვირუსი" ];
if(text.indexOf(words[0]) >= 0 && text.indexOf(words[1]) >= 0 && text.indexOf(words[2]) >= 0){
    alert("სტრიქონი შეიცავს აკრძალულ სიტყვებს");
}else if(text.indexOf(words[0]) < 0 && text.indexOf(words[1]) < 0 && text.indexOf(words[2]) < 0){
    alert("სტრიქონი არ შეიცავს აკრძალულ სიტყვებს");

}