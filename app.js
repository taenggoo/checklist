const year = document.getElementById("enteryear");
const multiMajor = document.getElementById("multi-major"); //기본정보

const libForm = document.getElementById("liberal-form");
const majorForm = document.getElementById("major-form");
const etcForm = document.getElementById("etc-form");
const korSt = document.getElementById("kor-st");
const korCrts = document.getElementById("kor-credits");
const engSt = document.getElementById("eng-st");
const engCrts = document.getElementById("eng-credits");
const etcSt = document.getElementById("etc-st");
const etcCrts = document.getElementById("etc-credits");
const coreSt = document.getElementById("core-st");
const coreCrts = document.getElementById("core");
const choiceSt = document.getElementById("choice-st");
const choice = document.getElementById("choice");
const sumSt = document.getElementById("sum-st");
const sumCrts = document.getElementById("sum"); //교양

const baseSt = document.getElementById("base-st");
const baseCrts = document.getElementById("major_base");
const reqSt = document.getElementById("req-st");
const reqCrts = document.getElementById("major_required");
const majorSt = document.getElementById("major-st");
const majorCrts = document.getElementById("major");
const minorSt = document.getElementById("minor-st");
const minorCrts = document.getElementById("minor");
const minorNone = document.getElementById("minor-check");
const linkSt = document.getElementById("link-st");
const linkCrts = document.getElementById("linkage");
const linkCrts2 = document.getElementById("cross1");
const linkNone = document.getElementById("link-check");
const convSt = document.getElementById("conv-st");
const convCrts = document.getElementById("convergence");
const convCrts2 = document.getElementById("cross2");
const convNone = document.getElementById("conv-check");
const designSt = document.getElementById("design-st");
const designCrts = document.getElementById("design");
const designCrts2 = document.getElementById("cross3");
const designNone = document.getElementById("design-check");
const secondSt = document.getElementById("second-st");
const secondCrts = document.getElementById("second");
const secondNone = document.getElementById("second-check");
const freeSt = document.getElementById("free-st");
const freeCrts = document.getElementById("free");
const cauceminar = document.getElementById("CAU_CEMINAR");
const teachSt = document.getElementById("teach-st");
const teachCrts = document.getElementById("teach");
const teachNone = document.getElementById("teach-check");
const majsumSt = document.getElementById("majsum-st");
const majCrts = document.getElementById("majsum"); //전공


const libCheck = document.getElementById("liberalcheck");
const libReset = document.getElementById("liberalreset");
const majorCheck = document.getElementById("major-check");
const majorReset = document.getElementById("major-reset");
const etcCheck = document.getElementById("etc-check");
const etcReset = document.getElementById("etc-reset"); //각 영역 체크,리셋 버튼

function libResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return alert("입학년도를 선택하세요!");
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

  result += "입학년도: " + Number(year.value) + "년도\n공통교양\n"

  if (Number(korSt.value) > Number(korCrts.value)) {
    result += " - 국어: " + [Number(korSt.value) - Number(korCrts.value)] + "학점 미달\n"
  } else {
    result += " - 국어: 기준 통과\n"
  }

  if (Number(engSt.value) > Number(engCrts.value)) {
    result += " - 영어: " + [Number(engSt.value) - Number(engCrts.value)] + "학점 미달\n"
  } else {
    result += " - 영어: 기준 통과\n"
  }

  if (Number(etcSt.value) > Number(etcCrts.value)) {
    result += " - 기타: " + [Number(etcSt.value) - Number(etcCrts.value)] + "학점 미달\n\n"
  } else {
    result += " - 기타: 기준 통과\n\n"
  }

  if (Number(coreSt.value) > Number(coreCrts.value)) {
    result += "핵심교양: " + [Number(coreSt.value) - Number(coreCrts.value)] + "학점 미달\n - 미이수 영역: "
  } else {
    result += "핵심교양: 최소 학점 기준 통과_이수 영역 확인!\n - 미이수 영역: "
  }

  if (!core1) {
    result += "도전 "
  }

  if (!core2) {
    result += "창의 "
  }

  if (!core3) {
    result += "융합 "
  }

  if (!core4) {
    result += "신뢰 "
  }

  if (!core5) {
    result += "소통"
  }

  result += "\n\n선택교양: " + Number(choice.value) + "학점 이수\n\n"

  if (Number(sumSt.value) > Number(sumCrts.value)) {
    result += "교양합계: " + [Number(sumSt.value) - Number(sumCrts.value)] + "학점 미달"
  } else {
    result += "교양합계: 기준 통과"
  }

  alert(result);
};

function sumCal() {
  document.getElementById("sum").value = Number(korCrts.value) + Number(engCrts.value) + Number(etcCrts.value) + Number(coreCrts.value) + Number(choice.value);
};

korCrts.addEventListener("change", sumCal);
engCrts.addEventListener("change", sumCal);
etcCrts.addEventListener("change", sumCal);
coreCrts.addEventListener("change", sumCal);
choice.addEventListener("change", sumCal);

libCheck.addEventListener("click", libResult);

function resetor(form) {
  form.reset();
};

libReset.addEventListener("click", function() {
  resetor(libForm)
});

majorReset.addEventListener("click", function() {
  resetor(majorForm)
});

etcReset.addEventListener("click", function() {
  resetor(etcForm)
});

function majorResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return alert("입학년도를 선택하세요!");
  } else if(Number(multiMajor.value) === 0){
    year.scrollIntoView();
    return alert("다전공을 선택하세요!");
  } else if (Number(linkCrts2.value) > 6) {
    linkCrts2.scrollIntoView();
    return alert("연계전공의 교차인정 최대 학점은 6학점입니다");
  } else if (Number(convCrts2.value) > 6) {
    convCrts2.scrollIntoView();
    return alert("융합전공의 교차인정 최대 학점은 6학점입니다");
  } else if (Number(designCrts2.value) > 6) {
    designCrts2.scrollIntoView();
    return alert("자기설계전공의 교차인정 최대 학점은 6학점입니다");
  } else {
    majorCal();
  }
};

function majorCal() {
  let result = "<전공영역 결과>\n"
  result += "입학년도: " + Number(year.value) + "년도\n\n"

  if (Number(baseSt.value) > Number(baseCrts.value)) {
    result += "전공기초: " + [Number(baseSt.value) - Number(baseCrts.value)] + "학점 미달\n"
  } else {
    result += "전공기초: 기준 통과\n"
  }

  if (Number(reqSt.value) > Number(reqCrts.value)) {
    result += "전공필수: " + [Number(reqSt.value) - Number(reqCrts.value)] + "학점 미달\n"
  } else {
    result += "전공필수: 기준 통과\n"
  }

  if (Number(majorSt.value) > Number(majorCrts.value)) {
    result += "전공: " + [Number(majorSt.value) - Number(majorCrts.value)] + "학점 미달\n"
  } else {
    result += "전공: 기준 통과\n"
  }

  if (!minorNone.checked) {
    if (Number(minorSt.value) > Number(minorCrts.value)) {
      result += "복수전공: " + [Number(minorSt.value) - Number(minorCrts.value)] + "학점 미달\n"
    } else {
      result += "복수전공: 최소학점 기준 통과_세부기준 확인요망\n"
    }
  }

  if (!linkNone.checked) {
    if (Number(linkSt.value) > [Number(linkCrts.value) + Number(linkCrts2.value)]) {
      result += "연계전공: " + [Number(linkSt.value) - Number(linkCrts.value) - Number(linkCrts2.value)] + "학점 미달\n"
    } else {
       result += "연계전공: 최소학점 기준 통과_세부기준 확인요망\n"
    }
  }

  if (!convNone.checked) {
    if (Number(convSt.value) > [Number(convCrts.value) + Number(convCrts2.value)]) {
      result += "융합전공: " + [Number(convSt.value) - Number(convCrts.value) - Number(convCrts2.value)] + "학점 미달\n"
    } else {
       result += "융합전공: 최소학점 기준 통과_세부기준 확인요망\n"
    }
  }

  if (!designNone.checked) {
    if (Number(designSt.value) > [Number(designCrts.value) + Number(designCrts2.value)]) {
      result += "자기설계전공: " + [Number(designSt.value) - Number(designCrts.value) - Number(designCrts2.value)] + "학점 미달\n"
    } else {
       result += "자기설계전공: 최소학점 기준 통과_세부기준 확인요망\n"
    }
  }

  if (!secondNone.checked) {
    if (Number(secondSt.value) > Number(secondCrts.value)) {
      result += "부전공: " + [Number(secondSt.value) - Number(secondCrts.value)] + "학점 미달\n"
    } else {
      result += "부전공: 최소학점 기준 통과_세부기준 확인요망\n"
    }
  }

  if(!cauceminar.checked) {
    result += "자유선택: CAU세미나 미이수, " + Number(freeCrts.value) + "학점 이수\n"
  } else {
    result += "자유선택: CAU세미나 이수, " + Number(freeCrts.value) + "학점 이수\n"
  }

  if(!teachNone.checked) {
    if (Number(teachSt.value) > Number(teachCrts.value)) {
      result += "교직: " + [Number(teachSt.value) - Number(teachCrts.value)] + "학점 미달\n"
    } else {
      result += "교직: 최소학점 기준 통과_세부기준 확인요망\n"
    }
  }

  if(Number(majsumSt.value) > Number(majCrts.value)) {
    result += "총 이수학점: " + [Number(majsumSt.value) - Number(majCrts.value)] + "학점 미달\n"
  } else {
    result += "총 이수학점: 기준 통과"
  }

  alert(result);
};

function majsumCal() {
  document.getElementById("majsum").value =
  Number(baseCrts.value) + Number(majorCrts.value) + Number(minorCrts.value) + Number(linkCrts.value) + Number(convCrts.value) + Number(designCrts.value) + Number(secondCrts.value) + Number(freeCrts.value) + Number(teachCrts.value);
};

baseCrts.addEventListener("change", majsumCal);
majorCrts.addEventListener("change", majsumCal);
minorCrts.addEventListener("change", majsumCal);
linkCrts.addEventListener("change", majsumCal);
convCrts.addEventListener("change", majsumCal);
designCrts.addEventListener("change", majsumCal);
secondCrts.addEventListener("change", majsumCal);
freeCrts.addEventListener("change", majsumCal);
teachCrts.addEventListener("change", majsumCal);

majorCheck.addEventListener("click", majorResult);

function etcResult() {
  const engExam = document.getElementById("eng-grade").checked;
  const chiExam = document.getElementById("chi-grade").checked;
  const korExam = document.getElementById("kor-grade").checked;
  const paper = document.getElementById("major-test").checked;
  const douPaper = document.getElementById("minor-test").checked;
  const gpa = Number(document.getElementById("gpa").value);


  let etcResult = "<기타 졸업요건 결과>\n\n졸업인정제 결과\n"

  if (!engExam) {
    etcResult += "-영어: 미통과\n"
  } else {
    etcResult += "-영어: 통과\n"
  }

  if (!chiExam) {
    etcResult += "-한자: 미통과\n"
  } else {
    etcResult += "-한자: 통과\n"
  }

  if (!korExam) {
    etcResult += "-한국어: 미통과\n\n"
  } else {
    etcResult += "-한국어: 통과\n\n"
  }

  etcResult += "논문결과\n"

  if (!paper) {
    etcResult += "-주전공: 불합격\n"
  } else {
    etcResult += "-주전공: 합격\n"
  }

  if (!douPaper) {
    etcResult += "-복수전공: 불합격\n\n"
  } else {
    etcResult += "-복수전공: 합격/해당없음\n\n"
  }

  if (gpa < 2) {
    etcResult += "전 학년 평점: 졸업불가"
  } else {
    etcResult += "전 학년 평점: 기준 통과"
  }

  alert(etcResult);
};

etcCheck.addEventListener("click", etcResult);
