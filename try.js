var subArrayFilteredIndex = []; //filtered sub array
var maxSubArraySum = -99999999999; //for sum check
var maxSubArrayIndisArray = []; //biggest sum index
var array = [-1, 9, 13, 10, -81, 69, 31, 199]; //20 eleman

var realSubArray = []; //sub arrayleri görmek için buna gerek yok aslında indisler üzerinden çalışıyoruz

var subArrayMaxLength = Math.ceil(array.length / 2); //10 eleman max
var subArrayCompress = [];//sıştırılmış minimum dizi

for (let index = 0; index < array.length; index = index + 2)
  subArrayCompress.push(index);

var tmpArrayChanged = array; //temp üzerinde işlem gerçekleştirilir
var subArray;
///////////////////////////ham veri///////////////////////////

//ana fonksiyon
function fonk() {
  for (let index = 1; index <= subArrayMaxLength; index++) {
    var tmpSum = 0;
    if (index == 1) {
      //1 elemanlı tüm dizi indisleri arraye eklendi
      for (let index2 = 0; index2 < array.length; index2++) {
        subArrayFilteredIndex.push(index2.toString()); //diziye ekle tek elemanlı sub str indislerini
        const element = [];
        element.push(index2.toString());
        checkSumIndex(element, array);
      }
    } else {
      //son eleman gezme
      subArray = subArrayCompress.slice(0, index); //sıkışık bir dizi alınır
      lastMember(index);
    }
  }
  var str2 = array.toString();
  realSubArray.forEach(element => {
    str2 += "<br>" + element;
  });
  document.getElementById("add1").innerHTML = str2;
  document.getElementById("add2").innerHTML = maxSubArraySum;
  var str = "";
  maxSubArrayIndisArray.forEach(element => {
    str += realSubArray[element];
  });

  document.getElementById("add3").innerHTML = str;
}

////last member search
function lastMember(index) {
  //son eleman gezme

  var forScroll = subArray[subArray.length - 2] + 2; //son eleman başlangıç indisi

  for (let index2 = forScroll; index2 < tmpArrayChanged.length - 1; index2++) {
    //push gerçekleştir
    subArrayFilteredIndex.push(subArray.toString()); //indis dizisi gerçek dizi değil
    //subArray index dizisine at
    checkSumIndex(subArray, tmpArrayChanged);
    subArray[subArray.length - 1]++; //subArray son elemanı bir artırarak gez.
  }
  //son elemanı ekliyoruz
  subArrayFilteredIndex.push(subArray.toString());
  checkSumIndex(subArray, tmpArrayChanged);
  
  //recursive işlemi gerçekleştiriyor
  while (!checkSubArrayEnd()) {
    readyForShift();
    lastMember(index);
  }
}

//for indis search
function indisBelirle(indis) {
  subArray[indis]++;
  for (; indis < subArray.length - 1; indis++)
    subArray[indis + 1] = subArray[indis] + 2;
}
/////sum//////
function checkSum(array, tmpArray) {
  var tmpSubArray = [];
  for (let index = 0; index < array.length; index++)
    tmpSubArray.push(tmpArray[array[index]]);

  realSubArray.push(tmpSubArray.toString()); //gerçek verileri tutmak için dizi(indis değil)

  var sum = tmpSubArray.reduce(sumReduce);

  function sumReduce(total, value) {
    return total + value;
  }
  return sum;
}
//////chechk sum
function checkSumIndex(tmpSubArray, tmpArray) {
  //
  var tmpSum = checkSum(tmpSubArray, tmpArrayChanged);
  if (tmpSum > maxSubArraySum) {
    //daha büyük ise indis ve toplam güncellenir
    maxSubArraySum = tmpSum;
    maxSubArrayIndisArray = []; //aynı değilse dizi temizlenir her seferinde
    maxSubArrayIndisArray.push(subArrayFilteredIndex.length - 1); //yerini kaybetmemek için kayıt alıyoruz
  } else if (tmpSum == maxSubArraySum) {
    if (tmpSum > maxSubArrayIndisArray[maxSubArrayIndisArray.length - 1])
      maxSubArrayIndisArray = [];

    maxSubArrayIndisArray.push(subArrayFilteredIndex.length - 1);
  }
}
//kuyruk kontrol edilir
function checkSubArrayEnd() {
  var state;
  for (
    let index = subArray.length - 1, index2 = array.length - 1; //sondan dolaşarak doğruluk kontrol edilir
    index >= 0;
    index--, index2 -= 2
  ) {
    if (subArray[index] == index2) {
      state = true;
    } else {
      state = false;
      break;
    }
  }
  return state;
}
//realEnd if [15,17,19] shift işlemlerinden sonra
//[0,2,4]'e gelmeli bu durumda 0. eleman shift yapılabilir

function readyForShift() {
  //sondan bir önceden birer birer geri bakarak sıkışık dizi olup olmadığı kontrol edilmeli
  //eğer sıkışık dizi durumu yok ise sondan bir önceki terim örneğin 17. indis(gelebileceği son indis)
  //durumuna gelmişse bir önceki yani sondan 2 öncekine bakılır ve 15. indiste olmaması durumunda
  //o indis bir arttırılır eğer 15. indiste ise ondan bir öncekine bakılır bu şekilde devam eder
  //arttırma sırasında sıkışıklık önemli bir faktör
  //eğer forScroll değişkeni doğru şekilde arttırılmaz ise sonuç yanlış çıkacaktır.
  //5 elemanlı bir dizinin 4,5. elemanları sona ulaştıysa 3. elemanı arttırmak için sıkışıklık sağlanmalı
  //bu yüzden forScroll oraya kadar çok yükselmişken tekrardan hesap yapılmalı
  //bu hesaba yalnızca bir eklenmeli

  for (
    let index = tmpArrayChanged.length - 1, index2 = subArray.length - 1; //son elemanlar göz ardı edilir
    index2 >= 0; //son indise kadar dönülür
    index -= 2, index2--
  ) {
    //son elemana da bakılmayacak -2 index2
    if (index != subArray[index2]) {
      indisBelirle(index2);
      break;
    }
  }
}