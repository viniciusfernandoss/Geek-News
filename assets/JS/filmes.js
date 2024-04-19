const tituloFilme = document.getElementById('tituloFilme')
const btnBuscar = document.getElementById('btn-buscar')
const content = document.getElementById('content')
const testeVoz = document.getElementById('testeVoz')

const info = document.getElementById('response')

const image = document.getElementById('img')
const titulo = document.getElementById('titulo')
const ano = document.getElementById('ano')
const diretor = document.getElementById('diretor')
const nota = document.getElementById('nota')

const btnVoz = document.getElementById('btn-voz')

btnVoz.addEventListener('click', function(){
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();

        // Definir configurações opcionais do reconhecimento de voz
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'pt-BR'; // Defina o idioma para português brasileiro

        // Evento chamado quando o reconhecimento de voz captura uma transcrição
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            tituloFilme.value = transcript; // Atualiza o valor do campo de entrada do título do filme
            btnBuscar.click(); // Chama o clique do botão de busca automaticamente
        };

        // Evento chamado quando ocorre um erro
        recognition.onerror = function(event) {
            console.error('Erro ao reconhecer voz: ', event.error);
        };

        // Iniciar o reconhecimento de voz
        recognition.start();
    } else {
        // Navegador não suporta a API de Reconhecimento de Voz
        alert('Seu navegador não suporta a entrada por voz.');
    }
})


const fetchApi = (value) => {
    const result = fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1de588a2&t=${value}`).then((res) => res.json()).then((data) => {
        console.log(data)
        return data
    })
    
    return result
}

btnBuscar.addEventListener('click', async () => {
    const result = await fetchApi(tituloFilme.value)
    //event.preventDefault()
    
        
        //content.innerHTML = JSON.stringify(result)
        info.style.display = 'flex'
        image.src = `${result.Poster}`
        titulo.innerHTML = JSON.stringify(result.Title)
        ano.innerHTML = JSON.stringify(result.Year)
        diretor.innerHTML = JSON.stringify(result.Director)
        nota.innerHTML = JSON.stringify(result.imdbRating)
    
    
})