const pwdField = document.getElementById('pwd')
const pwdLbl = document.querySelector('.pwdLbl')
pwdField.onclick = (e) => {
  console.log(e)
  pwdField.setAttribute('data-active', 'true')

  //   pwdLbl.classList.remove('pwdLbl')
}
window.addEventListener('click', () => {
  if (pwdField.getAttribute('data-active') == 'true') {
    pwdLbl.classList.remove('pwdLbl')
    pwdLbl.classList.add('pwdLblSmall')
  }else{
    pwdField.setAttribute('data-active', 'false')
    pwdLbl.classList.remove('pwdLblSmall')
    pwdLbl.classList.add('pwdLbl')
  }
console.log(pwdField.getAttribute('data-active'));

})
// 