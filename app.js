// 데이터타입
// console.log(1+1); //number 숫자
// console.log("1+1"); //string 문자열
// console.log("hello javascript!");
// console.log(1+1===2); //boolean : true or false

// console.log(document.getElementById('kor').value); //DOM

//변수 const: 덮어쓰기 불가 let: 덮어쓰기 가능
// const koreancredits = document.getElementById('kor').value;
//
// console.log(koreancredits);

function greetings() {
  alert("welcome!");
}

const libcheck = document.getElementById("liberalcheck");

libcheck.addEventListener("click", greetings);
