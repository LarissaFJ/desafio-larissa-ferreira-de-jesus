class Cardapio {
    constructor(itens) {
        this.itens = itens
    }

    getValorItem(codigo){
        
        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].codigo === codigo) {
              return this.itens[i].valor
            }
          }
          return "Não há itens no carrinho de compra!"
        }  

    validaCodigo(codigo){
        for (const itemCardapio of this.itens){
            if (itemCardapio.codigo.includes(codigo)) {
              return true
            }
          }
      } 
}

export { Cardapio }


