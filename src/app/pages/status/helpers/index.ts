import { Status } from '../types/status-types';

export const processResume = (status: Status, isLoading: boolean) => {
  if (isLoading && status === undefined) {
    return 'Seu processo necessita de atenção!';
  }
  if (status?.ended === false && status?.suspended === false) {
    return 'Seu processo está em Andamento';
  }
  if (status?.ended === true) {
    return 'Seu processo foi Finalizado';
  }
  if (status?.suspended === true) {
    return 'Seu processo foi Suspenso';
  }
  return '';
};
