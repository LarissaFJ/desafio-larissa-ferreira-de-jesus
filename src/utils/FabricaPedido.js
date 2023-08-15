import {ItemPedido} from "../dominio/ItemPedido.js"

class FabricaPedido {
    constructor(itens){
        this.itens = itens
    }


    converterEmItensPedido (){
        let arrayItensConvertidos = []
        for (const itemConverter of this.itens) {
            if (!itemConverter.includes(",")) {
                return null
            }
           let item =itemConverter.split(",")
           let itemPedido = new ItemPedido(item[0],item[1])
           arrayItensConvertidos.push(itemPedido)    
        }
        return arrayItensConvertidos
    }
}

export{FabricaPedido}