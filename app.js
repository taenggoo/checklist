const libCheck = document.getElementById("liberalcheck");

const year = document.getElementById("enteryear");

const korSt = document.getElementById("kor-st");
const korCrts = document.getElementById("kor-credits");

const engSt = document.getElementById("eng-st");
const engCrts = document.getElementById("eng-credits");

const etcSt = document.getElementById("etc-st");
const etcCrts = document.getElementById("etc-credits");

const coreSt = document.getElementById("core-st");
const coreCrts = document.getElementById("core");



const choice = document.getElementById("choice");

const libSt = document.getElementById("lib-st");
const libCrts = document.getElementById("lib-sum");

libCheck.addEventListener("click", libResult);

function libResult() {
  if(Number(year.value) === 0){
    alert("입학년도를 선택하세요!");
  } else {
     libCal();
  }
}

function libCal() {
  let result = "<교양영역 결과>\n\n";
  const core1 = document.getElementById("core1").checked;
  const core2 = document.getElementById("core2").checked;
  const core3 = document.getElementById("core3").checked;
  const core4 = document.getElementById("core4").checked;
  const core5 = document.getElementById("core5").checked;

  result+= "입학년도: " + Number(year.value) + "년도\n\n공통교양\n"

  if (Number(korSt.value) > Number(korCrts.value)) {
    result += " - 국어: " + [Number(korSt.value)-Number(korCrts.value)] + "학점 미달\n"
  } else {
    result += " - 국어: 기준 통과\n"
  }

  if (Number(engSt.value) > Number(engCrts.value)) {
    result += " - 영어: " + [Number(engSt.value)-Number(engCrts.value)] + "학점 미달\n"
  } else {
    result += " - 영어: 기준 통과\n"
  }

  if (Number(etcSt.value) > Number(etcCrts.value)) {
    result +=" - 기타: " + [Number(etcSt.value)-Number(etcCrts.value)] + "학점 미달\n\n"
  } else {
    result += " - 기타: 기준 통과\n\n"
  }

  if (Number(coreSt.value) > Number(coreCrts.value)) {
    result += "핵심교양: " + [Number(coreSt.value)-Number(coreCrts.value)] + "학점 미달\n - 미이수 영역: "
  } else {
    result += "핵심교양: 최소 학점 기준 통과_이수 영역 확인!\n - 미이수 영역: "
  }

  if (!core1){
    result += "도전 "
  }

  if (!core2){
    result += "창의 "
  }

  if (!core3){
    result += "융합 "
  }

  if (!core4){
    result += "신뢰 "
  }

  if (!core5){
    result += "소통"
  }

  result += "\n\n선택교양: " + Number(choice.value) + "학점 이수\n\n"

  if(Number(libSt.value) > Number(libCrts.value)) {
    result += "교양합계: " + [Number(libSt.value) - Number(libCrts.value)] + "학점 미달"
  } else {
    result += "교양합계: 기준 통과"
  }

alert(result);
}

function sumCal() {
  document.getElementById("lib-sum").vaule = Number(korCrts.value) + Number(engCrts.value) + Number(etcCrts.value) + Number(coreCrts.value) + Number(choice.value)
}

function etcResult() {
  const engExam = document.getElementById("eng-grade").checked;
  const chiExam = document.getElementById("chi-grade").checked;
  const korExam = document.getElementById("#kor-grade").checked;
  const paper = document.getElementById("major-test").checked;
  const douPaper = document.getElementById("minor-test").checked;
  const gpa = Number(document.getElementById("gpa").value);

  let etcResult = "<기타 졸업요건 결과>\n\n"

  if () {

    
  }
}
