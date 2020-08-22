const btn = document.querySelector(".btn");
const description = document.querySelector(".description");

  btn.addEventListener("click", buttonHangle);

  function buttonHangle(){
    axios.get("/serviceavailable/")
      .then(resp => comsole.log(reps))
      .catch(er => console.log(er))
  }
