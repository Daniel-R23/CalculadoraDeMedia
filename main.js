function calcMedia(){
  var n1 = Number(document.getElementById("b1").value)
  var n2 = Number(document.getElementById("b2").value)
  var n3 = Number(document.getElementById("b3").value)
  var n4 = Number(document.getElementById("b4").value)
  var mediaFinal = (n1+n2+n3+n4)/4;
  var passou = false;
  
  mediaFinal>=7?passou=true:passou=false
  
  passou?document.getElementById("field").innerText= `Sua média final é: ${mediaFinal}. Parabéns, você passou! 🥳`:document.getElementById("field".innerText=`Sua média final é: ${mediaFinal}. Infelizmente você não passou 😥`)
}
