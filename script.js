function dia(){
    let atual = new Date
    let mostra = document.getElementById ('novop')
    mostra.innerHTML =`<p>Recebido o documento em,<b> ${atual} </b>.</p>`

}