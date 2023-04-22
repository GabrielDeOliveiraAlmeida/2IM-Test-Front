export class FailedToPostFormError extends Error {
  constructor() {
    super('Ocorreu um erro ao enviar o formulário!');
    this.name = 'FailedToPostFormError';
  }
}
