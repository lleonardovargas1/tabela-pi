const fotos = document.getElementById("fotos");
const apiKey = "GR8pQwDPTSvQYXEtZHlflLsoG9CLvJ5QTCt6FGCf";

fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`)
  .then(resp => resp.json()) // vai passar a resposta para o formato json
  .then(data => {
    let index = 0; // essa e a nossa primeira foto

 
    const trocarImagem = () => {
      fotos.innerHTML = ""; // aqui vai limpar
      const foto = data.photos[index]; // aqui vai pegar a foto la na api
      if (foto) { // se tiver foto ele vai criar uma imagem dentro do elemento  da const fotos
        const img = document.createElement("img"); // ele vai criar a imagem
        img.src = foto.img_src; // ele vai selecionar a imagem criada com  o src da foto
        img.alt = `Foto tirada pelo rover em Marte - ID: ${foto.id}`; //esse alt é imporante pois ele vai descrever a iamgem
        fotos.appendChild(img); // isso aqui é um elemento filho ou seja ele vai colocar a imagem dentro do elemento fotos
        index = (index + 1) % data.photos.length;  //ele vai adicionar 1 no index e se o index for maior que o tamanho do array ele vai voltar para 0
      }
    };

    trocarImagem(); //  chama a função para mostrar a primeira imagem
    setInterval(trocarImagem, 5000); // aqui ele vai chamar a função a cada 5 segundos
  })
  .catch(error => { //  ele vai mostrar um erro caso tenha algum problema
    console.error("Erro ao buscar as fotos:", error);
  });