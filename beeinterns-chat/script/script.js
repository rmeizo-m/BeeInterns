const output = document.querySelector(".chat");
const inputBox = document.querySelector(".btn");
const input = document.querySelector(".message__input");

input.addEventListener("input", () => {
  if (input.value !== ""){
    inputBox.style.background = `url("./images/path1.svg") no-repeat`;
    inputBox.removeAttribute("disabled");
  } else {
    inputBox.style.background = `url("./images/path.svg") no-repeat`;
    inputBox.setAttribute("disabled", "true");
  }
});


const carent = [
  'Введи команду /start, для начала общения.'
];

inputBox.addEventListener("click", () =>{
  const inputText = input.value;

  if(inputText === "/start"){
    carent.push('Привет, меня зовут Чат-бот, а как зовут тебя?');
  } else if(inputText.startsWith("/name:")){
    carent.push('Привет, (name), приятно познакомится.');
  } else if (inputText.startsWith("/number:")) {
    alert('snumber');
  } else if (inputText === "/stop") {
    carent.push('Всего доброго, если хочешь поговорить пиши /start');
  } else if (inputText === "/weather") {

  } else{
    alert('else');
  }
});

function addDiv(){
  for (const item of carent) {
    addMessage(item);
  }
}

function addMessage(item){
  let elDiv = document.createElement("div");
  elDiv.className = "chat_text";
  elDiv.innerHTML=item;
  output.appendChild(elDiv);
}

addDiv();
