import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Card, IconButton, Text, Title } from '@/app/components';

import { processResume } from './helpers';
import { useStatusPage } from './hooks';
import { StatusPagePros } from './types/status-types';

const StatusPage: React.FC<StatusPagePros> = ({ apiGetStatus }: StatusPagePros) => {
  const { loading, processId, status, statusErr } = useStatusPage({ apiGetStatus });

  return (
    <>
      <div className='flex flex-start gap-2 items-center mt-9 mb-9'>
        <IconButton>
          <Link to={'/'}>
            <BsArrowLeft size={24} />
          </Link>
        </IconButton>
        <Title>Status do Processo Seletivo</Title>
      </div>
      <Card title={processResume(status, loading)}>
        {loading && 'Carregando...'}
        {!loading && statusErr && <Text className='text-red-600'>Oooops...! {statusErr}</Text>}
        {!loading && !statusErr && (
          <div className='flex flex-col gap-1'>
            <Text className='font-bold text-xl sm:text-xl'>Mais Informações</Text>
            <Text>
              <span className='font-bold'>Código do Processo: </span> {processId}
            </Text>
            <Text>
              <span className='font-bold'>Suspenso: </span> {status?.suspended ? 'SIM' : 'NÃO'}
            </Text>
            <Text>
              <span className='font-bold'>Finalizado: </span> {status?.ended ? 'SIM' : 'NÃO'}
            </Text>
          </div>
        )}
      </Card>
    </>
  );
};

export default StatusPage;
