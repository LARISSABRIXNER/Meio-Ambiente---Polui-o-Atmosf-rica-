export function aleatorio (lista){
    const posicao = math.floor (math.random()* lista.length);
    return lista[posicao]
}