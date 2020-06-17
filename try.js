function fonk() {
  // var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // var arr = [-2, 1, 3, -4, 5]
  // var subArr = [];
  // var tmpArr = [];
  // var walk = 0;
  // var subArrMaxLength = Math.round(arr.length / 2);
  // for (let index = 1; index < subArrMaxLength; index++) {

  //     var returnFonk = recursive(subArray, index);
  //     tmpArr[tmpArr.length] = returnFonk;

  // }

  //     tmpArr=arr;
  //     for (let index = 0; index < arr.length; index++) {

  //    }
  //     console.log(tmpArr);

  // for (let index = 0; index < 2; index++) {
  //     tmpArr=[]
  //     for (let index2 = index; index2 < arr.length; index2 = index2 + 2) {
  //         console.log(index2);
  //         tmpArr.push(index2);
  //     }
  //     console.log("----------------------");
  //     console.log(tmpArr);
  //     console.log("----------------------");
  //     subArr[subArr.length]=tmpArr;
  //     // console.log(subArr);
  //     // console.log("----------------------");
  // }
  // console.log(subArr);

  // console.log(subArr);
  // document.getElementById("add").innerHTML = subArr;

  // var subArray = [0, 2, 4, 6];
  // var temp = ((subArray.length - 1) * 2);
  // for (let index = temp, indis = 0; index < array.length; index++, indis++) {
  //     subArray[subArray.length - 1]++;
  //     console.log(subArray);

  // }

  //[0,2,4,6]
  // dizi = [0, 6, 13, 15]
  // var dizi = indisBelirle(dizi, 4);
  // for (let index = 0; index < array.length; index++) {

  // }

  // console.log(dizi);
  // console.log("----------------------");
  // var dizi = indisBelirle(dizi, 4);
  // console.log(dizi);

  var array = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
  ]; //19 eleman
  var subArrayMaxLength = Math.ceil(array.length / 2); //10 eleman max
  var subArrayCompress = [];
  //array.shift();//baştaki elemanı çıkar
  for (let index = 0; index < array.length; index = index + 2) {
    subArrayCompress.push(index);
  }
  ///////////////////////////ham veri///////////////////////////

  //var subArray = [0, 2, 4, 6];
  var subArrayFilteredIndex = [];
  var maxSubArraySum = -99999999999;
  var maxSubArrayIndis = 0;

  for (let index = 1; index <= subArrayMaxLength; index++) {
    var tmpSum = 0;
    if (index == 1) {
      //1 elemanlı tüm dizi indisleri arraye eklendi
      for (let index2 = 0; index2 < array.length; index2++) {
        subArrayFilteredIndex.push(index.toString()); //diziye ekle tek elemanlı sub strleri
        tmpSum = index2; //toplam kontrolü için temp değer
        if (tmpSum > maxSubArraySum) {
          //daha büyük ise indis ve toplam güncellenir
          maxSubArraySum = tmpSum;
          maxSubArrayIndis = subArrayFilteredIndex.length - 1;
        }
      }
    } else {
      //son eleman gezme
      var tmpArray = array;
      var subArray = subArrayCompress.slice(0, index);
      var temp = (subArray.length - 1) * 2; //patlak sıkışık dizi dışında çalışmıyor
      //temp değerini indisbelirle fonksiyonunu çağırdıktan sonra arttır
      for (let index2 = temp; index2 < tmpArray.length - 1; index2++) {
        
        //push gerçekleştir
        subArrayFilteredIndex.push(subArray.toString());
        



        console.log("maxSUM=" + maxSubArraySum);
        console.log("maxIndis=" + maxSubArrayIndis);
        //subArray index dizisine at
        tmpSum = checkSum(subArray,tmpArray);
        if (tmpSum > maxSubArraySum) {//daha büyük ise indis ve toplam güncellenir
          maxSubArraySum=tmpSum;
          maxSubArrayIndis=(subArrayFilteredIndex.length)-1;
        }
        subArray[subArray.length - 1]++; //subArray son elemanı bir arttırarak gez.
      }
    }
  }

  document.getElementById("add").innerHTML = subArrayFilteredIndex;
}

// function fonk2() {
//   var dizi = [];
//   //var dizi2 = [];
//   var dizi2 = new Array;
//   for (let index = 0; index < 2; index++) {
//     index == 0 ? (dizi2 = [0, 1]) : (dizi2 = dizi2);
//     var counter = 0;
//     while (counter < 3) {
//       // var dizi2 = new Array;
//       // dizi2.forEach(element => {
//       //   array3.push(element);
//       // });

//       dizi[dizi.length] = dizi2.toString();
//       console.log(dizi2 + " abura dizi2");
//       dizi2[dizi2.length - 1] = dizi2[dizi2.length - 1] + 1;
//       //dizi2[dizi2.length - 1] = index * 20;
//       console.log(dizi);
//       counter++;
//     }
//     dizi2 = [5, 8];
//     // }
//     console.log("-------------------");
//   }
//   document.getElementById("add").innerHTML = dizi;
// }

function indisBelirle(dizi, indis) {
  //indis=3
  var boyut = dizi.length;
  //console.log(boyut)
  for (let index = indis; index < boyut; index++) dizi[index]++;

  return dizi;
}

/////toplama işlemi için

function checkSum(array,tmpArray) {
  var tmpSubArray=[];
  for (let index = 0; index < array.length; index++) {
    tmpSubArray.push(tmpArray[array[index]]);
    
  }
  var sum = tmpSubArray.reduce(sumReduce);

  function sumReduce(total, value) {
    return total + value;
  }
  return sum;
}

// function recursive(array, walk) {
//     var tmpArr = array;
//     var tmpSubArr = [];
//     var subTmpArr = [];
//     for (let index = 1; index < tmpArr.length; index++) {
//         if (subTmpArr[1] != array[(array.length - ((walk - 2) * 2)) - 1]) {
//             tmpArr.shift();
//             recursive(tmpArr, walk - index);
//         } else {
//             tmpSubArr.push(tmpArr[index - 1]);
//         }
//         const element = tmpArr[index];
//         const tmpElement = tmpArr[index - 1];
//         var tmp = tmpArr
//         subTmpArr.push(element);
//         if (subTmpArr[subTmpArr.length - 1] != element) {

//             console.log("içerdema");
//         }
//         // subTmpArr.push(tmpArr);
//     }

//     return
// }
//[0,2,4,6]
