// aplicando #antes de uma propriedade torna ela privada em JS

export default class PortaModel {
  #numero: number
  #temPresente: boolean
  #selecionada: boolean
  #aberta: boolean

  constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
    this.#numero = numero
    this.#temPresente = temPresente
    this.#selecionada = selecionada
    this.#aberta = aberta
  }

  // obtendo valores
  get numero() {
    return this.#numero
  }

  get temPresente() {
    return this.#temPresente
  }

  get selecionada() {
    return this.#selecionada
  }

  get aberta() {
    return this.#aberta
  }

  // comportamentos para alterar o estado da porta e seguindo a IMUTABILIDADE
  desselecionar() {
    const selecionada = false
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta) // fazendo new Porta para nao alterar estado original e sim criar uma nova copia
  }

  alternarSelecao() {
    const selecionada = !this.selecionada
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
  }

  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
  }
}