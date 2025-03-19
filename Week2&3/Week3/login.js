// id box //
const emailInput = document.getElementById("email-input");
// blur 핸들러에선 필드에 이메일이 잘 입력되었는지 확인하고 
// 잘 입력되지 않은 경우엔 에러를 보여줍니다.
emailInput.onblur = function () {
  if (!emailInput.value.includes("@")) {
    // @ 유무를 이용해 유효한 이메일 주소가 아닌지 체크
    emailInput.classList.add("invalid");
    id_error.innerHTML = "올바른 이메일 주소를 입력하세요.";
  }
};
// focus 핸들러에선 에러 메시지를 숨깁니다(이메일 재확인은 blur 핸들러에서 합니다).
emailInput.onfocus = function () {
  if (emailInput.classList.contains("invalid")) {
    // 사용자가 새로운 값을 입력하려고 하므로 에러 메시지를 지움
    emailInput.classList.remove("invalid");
    id_error.innerHTML = "";
  }
};
