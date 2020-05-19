function validate(data) {
    const { login, password, confirmPassword, firstName, license, gender } = data;
    const dbLogin = [beeline, beeinterns, bee];

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (dbLogins.includes(login)) {
      alert(`Логин ${login} уже занят`);
    } else if (!firstName){
        alert("Укажите имя");
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
      if (gender == "male") {
        alert(`Уважаемый ${firstName}, заявка создана`);
      } else if (gender == "female") {
        alert(`Уважаемая ${firstName}, заявка создана`);
      }
      else{
        alert('Форма отправлена');
      }
    }
}
