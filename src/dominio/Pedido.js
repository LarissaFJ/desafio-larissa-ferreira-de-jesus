class Pedido {
    constructor(itensPedido, cardapio) {
        this.itensPedido = itensPedido;
        this.cardapio = cardapio;
    }

    calculaDebito() {
        let total = 0
        if (this.validaQuantidadeItens()) {
            return "Quantidade inválida!"
        }
        for (const itemPedido of this.itensPedido) {
            if (this.validaItemExtra(itemPedido)) {
                return "Item extra não pode ser pedido sem o principal"
            }
            if (!this.cardapio.validaCodigo(itemPedido.codigo)) {
                return "Item inválido!"
            }
            const valorItem = this.cardapio.getValorItem(itemPedido.codigo)
            total += valorItem * itemPedido.quantidade
        }
        let totalFormatado = total.toFixed(2)
        totalFormatado = totalFormatado.replace("." , ",")
        return `R$ ${totalFormatado}`
    }

    calculaDinheiro(){
        let total = 0;
        if (this.validaQuantidadeItens()) {
            return "Quantidade inválida!"
        }
        for (const itemPedido of this.itensPedido) {
            if (this.validaItemExtra(itemPedido)) {
                return "Item extra não pode ser pedido sem o principal"
            }
            if (!this.cardapio.validaCodigo(itemPedido.codigo)) {
                return "Item inválido!"
            }
            const valorItem = this.cardapio.getValorItem(itemPedido.codigo)
            total += valorItem * 0.9501 * itemPedido.quantidade
        }
        let totalFormatado = total.toFixed(2)
        totalFormatado = totalFormatado.replace("." , ",")
        return `R$ ${totalFormatado}`
    }

    calculaCredito(){
        let total = 0
        if (this.validaQuantidadeItens()) {
            return "Quantidade inválida!"
        }
        for (const itemPedido of this.itensPedido) {
            if (this.validaItemExtra(itemPedido)) {
                return "Item extra não pode ser pedido sem o principal"
            }
            if (!this.cardapio.validaCodigo(itemPedido.codigo)) {
                return "Item inválido!"
            }
            const valorItem = this.cardapio.getValorItem(itemPedido.codigo)
            total += valorItem * 1.03 * itemPedido.quantidade
        }
        let totalFormatado = total.toFixed(2)
        totalFormatado = totalFormatado.replace("." , ",")
        return `R$ ${totalFormatado}`
    }


    validaMetodoPagamento(metodoPagamento){
        let metodosPagamentosValidos = ["dinheiro", "debito", "credito"]
        for (const metodoValidar of metodosPagamentosValidos){
            if (metodoValidar.includes(metodoPagamento)) {
              console.log(metodoPagamento + " método permitido")
              return true
            }
          }
             console.log(metodoPagamento +  " Forma de pagamento inválida!")
              return false    
      }  


    validaItemExtra(itemPedido){
        if (itemPedido.codigo === "chantily") {
            for (const listaConferencia of this.itensPedido){
                if (listaConferencia.codigo.includes("cafe"))
                return false
            }
        }
        if (itemPedido.codigo === "queijo") {
            for (const listaConferencia of this.itensPedido){
                if (listaConferencia.codigo.includes("sanduiche"))
                return false
            }
        }
        if (itemPedido.codigo != "chantily" && itemPedido.codigo != "queijo") {
           return false
        } 
        return true 
    }

    validaQuantidadeItens(){
        for (const itemPedido of this.itensPedido){
            if (itemPedido.quantidade <= 0){
                return true
            }
        }
    }
}

export { Pedido }

