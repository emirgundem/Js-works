let name = "John";
//let name = 0;
// SyntaxError: 'x' has already been declared

let x = 10;
console.log(x) // x burada kullanılabilir. değeri 10



{
    let x = 2;
    console.log(x); //x burada kullanılabilir. değeri 2

}
// console.log(x) -> x burada kullanılamaz.





// Let ile  farklı scope alanlarında aynı değişken adıyla değişken oluşturulabilir.
{
    let name = "emir"
    console.log(name);
}

{
    let name  = "ali"
    console.log(name);
}

//let ile ortak scope içinde aynı isimle değişken oluşturulamaz.

{
  let x = 10;
  let X = 20;
  console.log(x);  // x in ilk değerini consola yazar;
}






