const startingMinutes = 10;
let time = startingMinutes * 60; //transforma minutos em segundos

const timer = document.querySelector("#timer");

setInterval(handleTime, 1000);// 1000 em timestamp significa 1s, entao essa funcao setInterval() vai chamar a funcao handleTime a cada 1 s
function handleTime(){
  const minutes = Math.floor(time / 60);//vai transformar o tempo em segundos
  let seconds = time % 60; //Resto da divisao inteira para devolver a parte inteira dos segundos
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${minutes} : ${seconds}`;
  console.log(timer)
  time--;
}

