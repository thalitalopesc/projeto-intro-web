// OBJETOS

const graceAndFrankie = {
    nome : "Grace and Frankie",
    anoDeLancamento : 2015,
    foiRenovada : true,
    atoresPrincipais : ['Jane Fonda', 'Lily Tomlin', 'Sam Waterston', 'Martin Sheen'],
    imagem : "./Imagens/graceandfrankie.png",
    link : "https://pt.wikipedia.org/wiki/That_%2770s_Show",
}

const that70sShow = {
    nome : "That 70's Show",
    anoDeLancamento : 1998,
    foiRenovada : true,
    atoresPrincipais : ['Laura Prepon', 'Topher Grace', 'Ashton Kutcher', 'Mila Kunis', 'Wilmer Valderrama', 'Danny Masterson'],
    imagem : "./Imagens/that70sshow.png",
    link: "https://pt.wikipedia.org/wiki/That_%2770s_Show"
}

const theBigBangTheory = {
    nome : "The Big Bang Theory",
    anoDeLancamento : 2007,
    foiRenovada : true,
    atoresPrincipais : ['Jim Parsons', 'Johnny Galecki', 'Jason Genao', 'Mayim Bialik'],
    imagem : "./Imagens/BIGBANG.png",
    link: "https://pt.wikipedia.org/wiki/That_%2770s_Show"
}

const seinfeld = {
    nome : "Seinfeld",
    anoDeLancamento : 1989,
    foiRenovada : true,
    atoresPrincipais : ['Jerry Seinfeld', 'Julia Louis-Dreyfus', 'Jason Alexander', 'Michael Richards'],
    imagem : "./Imagens/seinfield.png",
    link: "https://pt.wikipedia.org/wiki/That_%2770s_Show",
}

const mediaAnosDeLancamento = (graceAndFrankie.anoDeLancamento + that70sShow.anoDeLancamento + theBigBangTheory.anoDeLancamento + seinfeld.anoDeLancamento) / 4
console.log(`A média arredondada entre as datas de lançamento das séries é de: ${Math.round(mediaAnosDeLancamento)}`)

const todasRenovadas = graceAndFrankie.foiRenovada && that70sShow.foiRenovada && theBigBangTheory.foiRenovada && seinfeld.foiRenovada
console.log(`Todas as séries estão ativas? ${todasRenovadas}`)

// SEMANA 3 e 4
 
const sitcom = [];

function adicionarAoArray(serie) {
    if(serie.foiRenovada) {
        sitcom.push(serie);
    } else {
        alert('O item não foi adicionado.')
    }
}

adicionarAoArray(graceAndFrankie)
adicionarAoArray(seinfeld)
adicionarAoArray(that70sShow)
adicionarAoArray(theBigBangTheory)

// SEMANA 5 - Transformar array em string e montar relatório

for (let i = 0; i < sitcom.length; i++) {
    const string = sitcom[i].atoresPrincipais.toString();
    console.log(string);
 }

for(i in sitcom){

console.log(`${sitcom[i].nome.toUpperCase()} \n Ano de lançamento: ${sitcom[i].anoDeLancamento} \n Foi renovada? ${sitcom[i].foiRenovada} \n Elenco principal: ${sitcom[i].atoresPrincipais} \n`)

}

// SEMANA 6


function filtrarSerie (array, string) {
    if (string != undefined) {
        const filtradas = array.filter((objeto) => objeto.nome.toUpperCase() === string.toUpperCase());
        if (filtradas.length >= 1) {
           return filtradas;
        } else {
           alert('Sinto muito, a série digitada não foi encontrada.')
        }
     }
 }


function buscaSerie() {
    const input = document.querySelector(".input").value
    if (!input) {
       alert("Por favor, digite algo para que a busca aconteça.")
    } else {
        let seriesFiltradas = filtrarSerie(sitcom, input)
        let serieBuscada = document.getElementById("series")
        serieBuscada.setAttribute("class", "resultado")
        let section = document.createElement("section")
        section.setAttribute("class", "blocoBusca") 
        
        let img = document.createElement("img")
        img.setAttribute("class", "imagem")
        img.setAttribute("alt", "Imagem da série.")
        img.setAttribute("src", seriesFiltradas[0].imagem)
        
        let ul = document.createElement("ul")
        ul.setAttribute("class", "lista")
        
        let link = document.createElement("a")
        link.setAttribute("href", seriesFiltradas[0].link)
        
        let nome = document.createElement("th")
        nome.innerHTML += seriesFiltradas[0].nome.toUpperCase()
        
        let renovada = document.createElement("li")
        renovada.innerHTML += `Ativa: ${seriesFiltradas[0].foiRenovada}`
        
        let elenco = document.createElement("li")
        elenco.innerHTML += seriesFiltradas[0].atoresPrincipais
        
        serieBuscada.appendChild(section)
        section.appendChild(img)
        section.appendChild(ul)
        ul.appendChild(link)
        link.appendChild(nome)
        ul.appendChild(renovada)
        ul.appendChild(elenco)
    
        document.querySelector("#series").innerHTML = "";
        serieBuscada.insertAdjacentElement("beforeend", section)
            }
         }
