//기본정보
const year = document.getElementById("enteryear");
const multiMajor = document.getElementById("multi-major");

//교양
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
const sumCrts = document.getElementById("sum");

//전공
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
const totalSt = document.getElementById("total-st");
const totalCrts = document.getElementById("total");

//각 영역 체크,리셋 버튼
const libCheck = document.getElementById("liberalcheck");
const libReset = document.getElementById("liberalreset");
const majorCheck = document.getElementById("major-check");
const majorReset = document.getElementById("major-reset");
const etcCheck = document.getElementById("etc-check");
const etcReset = document.getElementById("etc-reset");

function libResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return swal("입학년도를 선택하세요!", "", "error");
  } else {
    libCal();
  }
}

function libCal() {
  let result = "입학년도: " + Number(year.value) + "년도\n\n공통교양\n";
  const core1 = document.getElementById("core1").checked;
  const core2 = document.getElementById("core2").checked;
  const core3 = document.getElementById("core3").checked;
  const core4 = document.getElementById("core4").checked;
  const core5 = document.getElementById("core5").checked;

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
  } else if (Number(sumCrts.value) > 45) {
    result += "교양합계: 최대 인정 학점 초과_교양은 45학점까지만 인정됩니다"
  } else {
    result += "교양합계: 기준 통과"
  }

if (Number(korSt.value) <= Number(korCrts.value)
 && Number(engSt.value) <= Number(engCrts.value)
 && Number(etcSt.value) <= Number(etcCrts.value)
 && Number(etcSt.value) <= Number(etcCrts.value)
 && Number(coreSt.value) <= Number(coreCrts.value)
 && core1 && core2 && core3 && core4 && core5
 && Number(sumSt.value) <= Number(sumCrts.value)
 && Number(sumCrts.value) <= 45) {
   swal("<교양영역 결과>",result,"success");
} else if (Number(korSt.value) <= Number(korCrts.value)
 && Number(engSt.value) <= Number(engCrts.value)
 && Number(etcSt.value) <= Number(etcCrts.value)
 && Number(etcSt.value) <= Number(etcCrts.value)
 && Number(coreSt.value) <= Number(coreCrts.value)
 && core1 && core2 && core3 && core4 && core5
 && Number(sumSt.value) <= Number(sumCrts.value)
 && Number(sumCrts.value) > 45) {
   swal("<교양영역 결과>",result,"warning")
 } else {
   swal("<교양영역 결과>",result,"error")
 }
}

function sumCal() {
  sumCrts.value = Number(korCrts.value) + Number(engCrts.value) + Number(etcCrts.value) + Number(coreCrts.value) + Number(choice.value);
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
majorReset.addEventListener("click", function() {
  const multiMajorForm = document.getElementById("multiMajor-form")
  resetor(multiMajorForm);
})
etcReset.addEventListener("click", function() {
  resetor(etcForm);
})

function majorTableReset() {
  document.getElementById("minor-table").style.display = "none";
  document.getElementById("link-table").style.display = "none";
  document.getElementById("conv-table").style.display = "none";
  document.getElementById("design-table").style.display = "none";
}

majorReset.addEventListener("click", majorTableReset);

function majorResult() {
  if (Number(year.value) === 0) {
    year.scrollIntoView();
    return swal("입학년도를 선택하세요!","","error");
  } else if(Number(multiMajor.value) === 0){
    year.scrollIntoView();
    return swal("다전공을 선택하세요!","","error");
  } else if (Number(linkCrts2.value) > 6) {
    linkCrts2.scrollIntoView();
    return swal("","연계전공의 교차인정 최대 학점은 6학점입니다","error");
  } else if (Number(convCrts2.value) > 6) {
    convCrts2.scrollIntoView();
    return swal("","융합전공의 교차인정 최대 학점은 6학점입니다","error");
  } else if (Number(designCrts2.value) > 6) {
    designCrts2.scrollIntoView();
    return swal("","자기설계전공의 교차인정 최대 학점은 6학점입니다","error");
  } else {
    majorCal();
  }
};

function majorCal() {
  let result = "입학년도: " + Number(year.value) + "년도\n\n"

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

  if(Number(totalSt.value) > Number(totalCrts.value)) {
    result += "총 이수학점: " + [Number(totalSt.value) - Number(totalCrts.value)] + "학점 미달\n"
  } else {
    result += "총 이수학점: 기준 통과"
  }

  if(Number(baseSt.value) <= Number(baseCrts.value)
     && Number(reqSt.value) <= Number(reqCrts.value)
     && Number(majorSt.value) <= Number(majorCrts.value)
     && (minorNone.checked || Number(minorSt.value) <= Number(minorCrts.value))
     && (linkNone.checked || Number(linkSt.value) <= [Number(linkCrts.value)+Number(linkCrts2.value)])
     && (convNone.checked || Number(convSt.value) <= [Number(convCrts.value)+Number(convCrts2.value)])
     && (designNone.checked || Number(designSt.value) <= [Number(designCrts.value)+Number(designCrts2.value)])
     && Number(totalSt.value) <= Number(totalCrts.value)
     && (secondNone.checked || Number(secondSt.value) <= Number(secondCrts.value))
     && Number(freeSt.value) <= Number(freeCrts.value) && cauceminar.checked
     && (teachNone.checked || Number(teachSt.value) <= Number(teachCrts.value))){
     swal("<전공영역 결과>",result,"success");
   } else if(Number(baseSt.value) <= Number(baseCrts.value)
      && Number(reqSt.value) <= Number(reqCrts.value)
      && Number(majorSt.value) <= Number(majorCrts.value)
      && (minorNone.checked || Number(minorSt.value) <= Number(minorCrts.value))
      && (linkNone.checked || Number(linkSt.value) <= [Number(linkCrts.value)+Number(linkCrts2.value)])
      && (convNone.checked || Number(convSt.value) <= [Number(convCrts.value)+Number(convCrts2.value)])
      && (designNone.checked || Number(designSt.value) <= [Number(designCrts.value)+Number(designCrts2.value)])
      && Number(totalSt.value) <= Number(totalCrts.value)
      && (secondNone.checked || Number(secondSt.value) <= Number(secondCrts.value))
      && Number(freeSt.value) <= Number(freeCrts.value) && !cauceminar.checked
      && (teachNone.checked || Number(teachSt.value) <= Number(teachCrts.value))){
      swal("<전공영역 결과>",result,"warning");
   } else {
     swal("<전공영역 결과>",result,"error");}
};

majorCheck.addEventListener("click", majorResult);

function totalCal() {
  if (Number(sumCrts.value) > 45) {
    totalCrts.value =
    45 + Number(baseCrts.value) + Number(majorCrts.value) + Number(minorCrts.value) + Number(linkCrts.value) + Number(convCrts.value) + Number(designCrts.value)
    + Number(secondCrts.value) + Number(freeCrts.value) + Number(teachCrts.value);
  } else {
  totalCrts.value =
  Number(sumCrts.value) + Number(baseCrts.value) + Number(majorCrts.value) + Number(minorCrts.value) + Number(linkCrts.value) + Number(convCrts.value) + Number(designCrts.value)
  + Number(secondCrts.value) + Number(freeCrts.value) + Number(teachCrts.value);
   }
};

baseCrts.addEventListener("change", totalCal);
majorCrts.addEventListener("change", totalCal);
minorCrts.addEventListener("change", totalCal);
linkCrts.addEventListener("change", totalCal);
convCrts.addEventListener("change", totalCal);
designCrts.addEventListener("change", totalCal);
secondCrts.addEventListener("change", totalCal);
freeCrts.addEventListener("change", totalCal);
teachCrts.addEventListener("change", totalCal);

function etcResult() {
  const engExam = document.getElementById("eng-grade").checked;
  const chiExam = document.getElementById("chi-grade").checked;
  const korExam = document.getElementById("kor-grade").checked;
  const paper = document.getElementById("major-test").checked;
  const douPaper = document.getElementById("minor-test").checked;
  const gpa = Number(document.getElementById("gpa").value);


  let etcResult = "졸업인정제 결과\n"

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

if (engExam  && chiExam && korExam && paper && douPaper && gpa >= 2){
      swal("<기타 졸업요건 결과>",etcResult,"success");
    } else { swal("<기타 졸업요건 결과>",etcResult,"error");
 }
};

etcCheck.addEventListener("click", etcResult);

function colorChange(st, crts) {
  if (Number(st.value) > Number(crts.value)) {
    crts.style.color = "red";
  } else {
    crts.style.color = "blue";
  }
}

//교양영역 색 변화
korCrts.addEventListener("change", function() {
  colorChange(korSt, korCrts)
});
engCrts.addEventListener("change", function() {
  colorChange(engSt, engCrts)
});
etcCrts.addEventListener("change", function() {
  colorChange(etcSt, etcCrts)
});
coreCrts.addEventListener("change", function() {
  colorChange(coreSt,coreCrts)
});
choice.addEventListener("change", function() {
  colorChange(choiceSt, choice)
});

//교양합계 색 변화
korCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
engCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
etcCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
coreCrts.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});
choice.addEventListener("change", function() {
  colorChange(sumSt, sumCrts)
});

//전공영역 색 변화
baseCrts.addEventListener("change", function() {
  colorChange(baseSt, baseCrts)
});
reqCrts.addEventListener("change", function() {
  colorChange(reqSt, reqCrts)
});
majorCrts.addEventListener("change", function() {
  colorChange(majorSt, majorCrts)
});
minorCrts.addEventListener("change", function() {
  colorChange(minorSt, minorCrts)
});
linkCrts.addEventListener("change", function() {
  colorChange(linkSt, linkCrts)
});
convCrts.addEventListener("change", function() {
  colorChange(convSt, convCrts)
});
designCrts.addEventListener("change", function() {
  colorChange(designSt, designCrts)
});
secondCrts.addEventListener("change", function() {
  colorChange(secondSt, secondCrts)
});
freeCrts.addEventListener("change", function() {
  colorChange(freeSt, freeCrts)
});
teachCrts.addEventListener("change", function() {
  colorChange(teachSt, teachCrts)
});

//전공합계 색 변화
baseCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
reqCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
majorCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
minorCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
linkCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
convCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
designCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
secondCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
freeCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});
teachCrts.addEventListener("change", function() {
  colorChange(totalSt, totalCrts)
});

function gpaColorChange() {
  if (2 > Number(gpa.value)) {
    gpa.style.color = "red";
  } else {
    gpa.style.color = "blue";
  }
}

gpa.addEventListener("change", gpaColorChange)

function noneHandler(none, crts) {
  if (none.checked) {
    crts.readOnly = true;
    crts.value = 0;
  } else {
    crts.readOnly = false;
  }
}

secondNone.addEventListener("change", function() {
  noneHandler(secondNone, secondCrts)});
secondNone.addEventListener("change", totalCal);

teachNone.addEventListener("change", function() {
  noneHandler(teachNone, teachCrts)});
teachNone.addEventListener("change", totalCal);

function multiMajorChange() {
  const multiMajorText = multiMajor.options[multiMajor.selectedIndex].text;
  const minorTable = document.getElementById("minor-table");
  const linkTable = document.getElementById("link-table");
  const convTable = document.getElementById("conv-table");
  const designTable = document.getElementById("design-table");

  majorSt.value = multiMajor.value;

  if (multiMajorText === "----") {
    minorTable.style.display = "none";
    minorCrts.value = 0;
    minorNone.checked = true;
    linkTable.style.display = "none";
    linkCrts.value = 0;
    linkNone.checked = true;
    convTable.style.display = "none";
    convCrts.value = 0;
    convNone.checked = true;
    designTable.style.display = "none";
    designCrts.value = 0;
    designNone.checked = true;
  } else if (multiMajorText === "전공심화") {
    minorTable.style.display = "none";
    minorCrts.value = 0;
    minorNone.checked = true;
    linkTable.style.display = "none";
    linkCrts.value = 0;
    linkNone.checked = true;
    convTable.style.display = "none";
    convCrts.value = 0;
    convNone.checked = true;
    designTable.style.display = "none";
    designCrts.value = 0;
    designNone.checked = true;
  } else if (multiMajorText === "복수전공") {
    minorTable.style.display = "";
    minorCrts.value = 0;
    minorNone.checked = false;
    linkTable.style.display = "none";
    linkCrts.value = 0;
    linkNone.checked = true;
    convTable.style.display = "none";
    convCrts.value = 0;
    convNone.checked = true;
    designTable.style.display = "none";
    designCrts.value = 0;
    designNone.checked = true;
  } else if (multiMajorText === "연계전공") {
    minorTable.style.display = "none";
    minorCrts.value = 0;
    minorNone.checked = true;
    linkTable.style.display = "";
    linkCrts.value = 0;
    linkNone.checked = false;
    convTable.style.display = "none";
    convCrts.value = 0;
    convNone.checked = true;
    designTable.style.display = "none";
    designCrts.value = 0;
    designNone.checked = true;
  } else if (multiMajorText === "융합전공") {
    minorTable.style.display = "none";
    minorCrts.value = 0;
    minorNone.checked = true;
    linkTable.style.display = "none";
    linkCrts.value = 0;
    linkNone.checked = true;
    convTable.style.display = "";
    convCrts.value = 0;
    convNone.checked = false;
    designTable.style.display = "none";
    designCrts.value = 0;
    designNone.checked = true;
  } else if (multiMajorText === "자기설계전공") {
    minorTable.style.display = "none";
    minorCrts.value = 0;
    minorNone.checked = true;
    linkTable.style.display = "none";
    linkCrts.value = 0;
    linkNone.checked = true;
    convTable.style.display = "none";
    convCrts.value = 0;
    convNone.checked = true;
    designTable.style.display = "";
    designCrts.value = 0;
    designNone.checked = false;
  }
}

multiMajor.addEventListener("change", multiMajorChange);

const aboutBtn = document.getElementById("about")
function aboutInfo() {
  swal("개발자 정보", "code by 태윤\nE-mail: tjxodbs9417@naver.com", "info")
}

aboutBtn.addEventListener("click", aboutInfo);
