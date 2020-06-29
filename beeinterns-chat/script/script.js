document.addEventListener("DOMContentLoaded", () => {

  const output = document.querySelector(".chat");
  const inputBox = document.querySelector(".btn");
  const input = document.querySelector(".message__input");
  let start = false;
  let num = true;

  input.addEventListener("input", disabledHangle);

  function disabledHangle(e){
    if (input.value == ""){
      inputBox.style.background = `url("./images/path.svg") no-repeat`;
      inputBox.setAttribute("disabled", "true");
    } else {
      inputBox.style.background = `url("./images/path1.svg") no-repeat`;
      inputBox.removeAttribute("disabled");
    }
  }


  inputBox.addEventListener("click", addHandler);

  function addHandler(e){
    let inputText = input.value;
    e.preventDefault();

    addMessage("user", inputText);

    if (start){
        if(inputText.startsWith("/name:")){
            const colPos = inputText.indexOf(":");
            const b = inputText.substring(colPos+1);
            const c = `Привет ${b}, приятно познакомиться. Я умею считать, введи числа которые надо посчитать.`;
            addMessage("bot", c);
        }

       else if(inputText.startsWith("/number:")){
            addMessage("bot", "Выберите необходимое действие: - , + , *, /");
            const commaPos = inputText.indexOf(",");
            const colPos = inputText.indexOf(":");
            a = Number(inputText.substring(colPos+1, commaPos));
            b = Number(inputText.substring(commaPos+1));
            num = true;
        }

        else if(num == true){
            if(inputText.startsWith("-")){
                addMessage("bot", a-b);
                num=false;
            }
            else if( inputText.startsWith("+")){
                addMessage("bot", a+b);
                num=false;
            }
            else if(inputText.startsWith("*")){
                addMessage("bot", a*b);
                num=false;
            }
            else if(inputText.startsWith("/")){
                addMessage("bot", a/b);
                num=false;
            }

            else{
                addMessage("bot", "Я не понимаю, введите другую команду!");
            }

        }

        else if(inputText == "/stop"){
            addMessage("bot", "Всего доброго, если хочешь поговорить пиши /start");
            start = false;
        }

        else{
            addMessage("bot", "Я не понимаю, введите другую команду!");
        }

    }

    else{
        if(inputText == "/start"){
            addMessage("bot", "Привет, меня зовут Чат-бот, а как зовут тебя?");
            start = true;
        }
        else{
            addMessage("bot", "Введите команду /start, для начала общения");
        }
    }
    input.value="";
  }


  function addMessage(user, text){
    let chatDiv = document.createElement("div");
    chatDiv.className = "chat__item";

    let chatMessage = document.createElement("div");


    if (user == "bot") {
      chatDiv.innerHTML= '<div class="avatar"><img src="./images/avatar1.png" alt=""></div>';
      chatMessage.className = "chat__message";
      chatMessage.style.background = "#fff";
      chatMessage.innerText = text;
      chatMessage.style.color = "#000";
    }
    else {
      chatDiv.innerHTML = '<div class="avatar"><img src="./images/avatar.png" alt=""></div>';
      chatMessage.className = "chat__message";
      chatMessage.innerText = text;
    }

    chatDiv.appendChild(chatMessage);
    output.appendChild(chatDiv);
  }
});
