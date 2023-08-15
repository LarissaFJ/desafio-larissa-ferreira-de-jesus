import {Item} from "./dominio/Item.js"
import {Cardapio} from "./dominio/Cardapio.js"
import {Pedido} from "./dominio/Pedido.js"
import { FabricaPedido } from "./utils/FabricaPedido.js"

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (this.validaItensNulo(itens)){
            return "Não há itens no carrinho de compra!"
        }
        let arrayPedidoConvertido = this.converterItens(itens)
        if (arrayPedidoConvertido === null) {
            return "Item inválido!"
        }
        let pedido = this.criarPedido(arrayPedidoConvertido)
        if (!pedido.validaMetodoPagamento(metodoDePagamento)){
            return "Forma de pagamento inválida!"
        }
        switch(metodoDePagamento){
            case "dinheiro":
                return pedido.calculaDinheiro()

            case "credito":
                return pedido.calculaCredito()

            case "debito":
                return pedido.calculaDebito()

            default :"Forma de pagamento inválida!"
        }
    }

    validaItensNulo(itens){
        if (itens.length === 0){
            return true
        }
    }

    converterItens(itens){
        let fabricaPedido = new FabricaPedido(itens)
        return fabricaPedido.converterEmItensPedido()
    }

    criarPedido(itensConvertidos){
        let cardapio = this.criarCardapio()
        return new Pedido(itensConvertidos, cardapio)

    }

    criarCardapio(){
        let listaItensCardapio = [
            new Item("cafe", "Café", 3.00),
            new Item("chantily", "Chantily (extra do Café)", 1.50),
            new Item("suco", "Suco Natural", 6.20),
            new Item("sanduiche", "Sanduíche", 6.50),
            new Item("queijo", "Queijo (extra do Sanduíche)", 2.00),
            new Item("salgado", "Salgado", 7.25),
            new Item("combo1", "1 Suco e 1 Sanduíche", 9.50),
            new Item("combo2", "1 Café e 1 Sanduíche", 7.50)
        ];
        
        return new Cardapio(listaItensCardapio)
    }

}

export { CaixaDaLanchonete }