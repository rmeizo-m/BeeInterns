const btn = document.querySelector(".btn");
const description = document.querySelector(".description");

  btn.addEventListener("click", (e) => {
    fetch('/serviceavailable/')
   .then(resp => {
       if (!resp.ok)
         throw Error(res.statusText);
       return resp.json();
   })
   .then(res => {
     if (res.isSucceeded === false)
       description.innerHTML = "Произошла ошибка";
     else {
       Promise.allSettled([
         fetch('/getinfo/').then(resp => {
           let result;
           if (!resp.ok) {
             return {isSucceeded: false}
           } else
             result = resp.json();
           return result;
         }),
         fetch('/getdescription/').then(resp => {
           let result;
           if (!resp.ok) {
             return {isSucceeded: false}
           } else
             result = resp.json();
           return result;
         })
       ]).then((results) => {
         if (results.every((item) => item.status !== 'fulfilled' || item.value.isSucceeded === false)) {
           throw Error('Server Error');
         }
         results.forEach((item) => {
           if (item.value.isSucceeded === true)
             description.innerHTML = description.innerHTML + item.value.text + ' ';
         });
       })
     }
   })
   .catch(() => {
       description.innerHTML = "Произошла ошибка";
   });
  });
