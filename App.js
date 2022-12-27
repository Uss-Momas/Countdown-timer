const countDownTime = () => {
  const countDate = new Date("May 15, 2022 00:00:00").getTime(); // data alvo ou a data que queremos chegar, o Date recebe o formato ("Month day, Year hours:minutes:seconds"), a funcao getTime() devolve a data em milissegundos
  const now = new Date().getTime(); //pegando a data actual para usar para fazer a diferenca com o countDate

  const diference = countDate - now; // assim teremos a diferenca em millisegundos entre a data alvo e a data actual

  //formulas basicas
  let seconds = 1000; //1s é igual a 1000 ms (milessegundos)
  let minutes = seconds * 60; //minutos = segundos * 60
  let hours = minutes * 60; //horas é igual a o numero de minutos vezes 60
  let days = hours * 24;

  //calculando
  const textDays = Math.floor(diference / days);
  const textHours = Math.floor((diference % days) / hours);
  const textMinutes = Math.floor((diference % hours) / minutes);
  const textSeconds = Math.floor((diference % minutes) / seconds);

  document.querySelector(".days").innerText = textDays < 10 ? '0' + textDays: textDays;
  document.querySelector(".hours").innerText = textHours < 10 ? '0' + textHours: textHours;
  document.querySelector(".minutes").innerText = textMinutes < 10 ? '0' + textMinutes: textMinutes;
  document.querySelector(".seconds").innerText = textSeconds < 10 ? '0' + textSeconds: textSeconds;

  console.log(textHours);
};

setInterval(countDownTime, 1000);
