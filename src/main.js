import {Item} from "./dominio/Item.js"
import {Cardapio} from "./dominio/Cardapio.js"
import {Pedido} from "./dominio/Pedido.js"
import {ItemPedido} from "./dominio/ItemPedido.js"
import {FabricaPedido} from "./utils/FabricaPedido.js"

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

const cardapio = new Cardapio(listaItensCardapio)

let itemPedido1 = new ItemPedido("cafe", 2)
let itemPedido2 = new ItemPedido("salgado", 2)
let itemPedido3 = new ItemPedido("combo1",1)
let itemPedido4 = new ItemPedido("chantily",1)
let itemPedido5 = new ItemPedido("queijo",1)
let itemPedido6 = new ItemPedido("sanduiche",1)
let itemPedido7 = new ItemPedido("cafe", 0)
let listaItensPedido = [itemPedido1,itemPedido2]
let listaItensPedido2 = [itemPedido1,itemPedido3]
let listaItensPedido3 = [itemPedido1,itemPedido4]
let listaItensPedido4 = [itemPedido5,itemPedido6]
let listaItensPedido5 = [itemPedido5,itemPedido1]
let listaItensPedido7 = [itemPedido7, itemPedido3]

let pedido = new Pedido(listaItensPedido, cardapio)
let pedido2 = new Pedido(listaItensPedido2, cardapio)
let pedido3 = new Pedido(listaItensPedido3, cardapio)
let pedido4 = new Pedido(listaItensPedido4, cardapio)
let pedido5 = new Pedido(listaItensPedido5, cardapio)

console.log(pedido);
console.log("debito: " + pedido.calculaDebito())
console.log("dinheiro: " + pedido.calculaDinheiro())
console.log("crédito: " + pedido.calculaCredito())
console.log("debito: " + pedido2.calculaDebito())
console.log("debito: " + pedido3.calculaDebito())
console.log("debito: " + pedido4.calculaDebito())
console.log("debito: " + pedido5.calculaDebito())

let fabricaPedido = new FabricaPedido(["cafe,1" , "sanduiche,2", "suco,1"])
console.log(fabricaPedido)
let itensConvertidos = fabricaPedido.converterEmItensPedido()
console.log(itensConvertidos[0].codigo + " " + itensConvertidos[0].quantidade)

let pedido6 = new Pedido(itensConvertidos, cardapio)

console.log("débito " + pedido6.calculaDebito())
console.log("crédito " + pedido6.calculaCredito())
console.log("dinheiro " + pedido6.calculaDinheiro())


console.log(cardapio.validaCodigo("cafe"))
console.log(cardapio.validaCodigo("xis"))
console.log(pedido6.validaMetodoPagamento("dinheiro"))
console.log(pedido6.validaMetodoPagamento("pix"))

let pedido7 = new Pedido (listaItensPedido7,cardapio)

console.log("pedido 5: " + pedido5.calculaDebito())



