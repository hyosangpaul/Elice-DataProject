// 1단계 : 유효성 검사(형식 체크)
const validateInputEmail = (inputEmail) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;
  return emailRegex.test(inputEmail);
};
const validateInputPw = (inputPw) => {
  const pwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  return pwRegex.test(inputPw);
};
const validateInputName = (inputName) => {
  const nameRegex = /^[가-힣]{2,}$/u;
  return nameRegex.test(inputName);
};
const validateInputPhoneNumber = (inputPhoneNumber) => {
  const phoneNumberRegex = /^\d{11}$/;
  return phoneNumberRegex.test(inputPhoneNumber);
};

module.exports = {
  validateInputEmail,
  validateInputPw,
  validateInputPhoneNumber,
  validateInputName,
};
