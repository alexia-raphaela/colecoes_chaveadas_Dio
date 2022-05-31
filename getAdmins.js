const usuarios = new Map() 
usuarios.set('Adriana', 'comum')
usuarios.set('Robert', 'admin')
usuarios.set('Fabiano', 'admin') 

function getAdmins(usuarios) {
    const admins = [];
    for(let [chave, valor] of usuarios) {
        if(valor === 'admin'){
            admins.push(chave)
        }
    }
    return admins
}
console.log(getAdmins(usuarios))