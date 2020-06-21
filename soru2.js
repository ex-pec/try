//Soru 2: a'den b'ye kadar olan sayılardan, x'e tam bölünenlerin toplamını veren bir fonksiyon yazınız.
var a = 101;
var b = 150;
var x = 10;
//////////////////////////////ham veri//////////////////

function fonk2() {

  var state = true;
  document.getElementById("add5").innerHTML =
    a + " ile " + b + " arasında " + x + "'e bölünenler========>";

  for (let index = 0, index2 = a; index < x; index++, index2++) {
    if (index2 % x == 0) {
      a = index2;
      state = true;
      break;
    } else {
      state = false;
    }
  }
  var veri = "";
  while (true) {
    if (a + x <= b) {
      veri += "<br>" + a;
      a += x;
    } else {
      veri += "<br>" + a;
      break;
    }
  }
  

  var str = "Bölünen sayılar";
  document.getElementById("add4").innerHTML = str + "<br>" + veri;
}
