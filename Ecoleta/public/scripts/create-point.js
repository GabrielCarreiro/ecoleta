

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then (res => res.json() )
    .then (states => {

        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()

function getCities(event){
    const citySelects = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options [indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelects.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelects.disabled = true

    fetch(url)
    .then (res => res.json() )
    .then (cities => {
        

        for( const city of cities){
            citySelects.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelects.disabled = false
    } )
}

document
   .querySelector("select[name=uf]")
   .addEventListener("change", getCities)

   //Itens de coleta 
   //pegar todos os li
        
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelecteditem)
}

const colleteditems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelecteditem(event){

    const itemLi = event.target

    // adicionar ou remover uma classe com javascripts

    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    //verificar se existe itens selecionados 

    const alreadySelected = selectedItems.findIndex( item =>{
        const itemFound = item == itemId
        return itemFound
    })

    // se já estiver selecionado 
    if(alreadySelected >=0 ){
            // tira da selecão
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems

    }else{

        // se não estivesse selecionados adicionar a seleção
        selectedItems.push(itemId)

    }
     //atualizar um campo escondido com os itens selecionados 
    colleteditems.value = selectedItems
    
}