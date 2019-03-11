function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      document.getElementById('days').innerHTML = parseInt(days, 10);
      document.getElementById('hours').innerHTML = ('0' + hours).slice(-2);
      document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2);
      document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2);
    } else {
      return;
    }
  }
}

const getRandomImage = () => {
  const images = [
    'https://www.minutoseguros.com.br/blog/wp-content/uploads/2018/01/Praia_do_Sancho_-_Fernando_de_Noronha_2_-_PE.jpg',
    'https://conteudo.imguol.com.br/c/entretenimento/66/2017/03/06/praia-do-sancho-em-fernando-de-noronha-e-a-melhor-praia-do-mundo-segundo-tripadvisor-1488849726684_v2_1920x1269.jpg',
    'https://natalpraias.com.br/wp-content/uploads/2015/04/005-PRAIA-DO-AMOR-PIPA.jpg',
    'https://i.pinimg.com/originals/d2/5c/8b/d25c8b64d1624522f30b6f47eaa30d16.jpg',
    'https://natalpraias.com.br/wp-content/uploads/2015/05/Praia-de-Jericoacoara.jpg',
    'http://rumoaomar.org.br/file/2017/03/Top-10-%E2%80%93-Melhore-Praias-do-Nordeste-Brasileiro-.jpg',
    'https://kdotravel.com.br/wp-content/uploads/2016/06/Canoa_Quebrada-CE.jpg',
    'https://viajantehu.hotelurbano.com.br/wp-content/uploads/2017/11/Maragogi-1.jpg',
    'https://www.rota-das-emocoes.com/wp-content/uploads/2017/10/129245-lencois-maranhenses-confira-7-dicas-imperdiveis.jpg',
    'https://oimparcial.com.br/media/2017/09/Len%C3%A7ois-Maranhenses-2-site-1.jpg',
  ]

  return images[Math.floor(Math.random()*images.length)]
}

const setBackgroundImage = () => {
  let image = getRandomImage()

  document.getElementsByTagName('body')[0].style.backgroundImage =  `url('${image}')`
}

(function () {
  countdown('04/03/2019 08:55:00 PM');
  setBackgroundImage()
}());
