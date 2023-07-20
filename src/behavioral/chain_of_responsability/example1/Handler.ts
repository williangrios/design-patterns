export default interface Handler{
    handle(bills: {type: number, qtd: number}[], amount: number): void
}