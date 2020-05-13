export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'InvalidParamError'
    // this.name é o retorno
  }
}
