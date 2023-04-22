import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Button, Card, IconButton, Text, Title } from '@/app/components';

import { useHomePage } from './hooks';
import { HomeProps } from './types/home-types';

const HomePage: React.FC<HomeProps> = ({ getAllApplicant }: HomeProps) => {
  const { allApplicant, err, loading } = useHomePage({ getAllApplicant });

  return (
    <>
      <div className='flex items-center mt-9 mb-9'>
        <Title>Processo Seletivo</Title>
        <Link to={'/new'}>
          <IconButton>
            <BsFillPlusCircleFill size='36px' />
            Iniciar Novo Processo Seletivo
          </IconButton>
        </Link>
      </div>
      <div className='flex flex-col gap-2'>
        {loading && 'Carregando...'}
        {!loading && err && <Text className='text-red-600'>Oooops...! {err}</Text>}
        {!loading && !err && allApplicant.length === 0 && <Text>Vazio por aqui...</Text>}
        {!loading &&
          !err &&
          allApplicant.length > 0 &&
          allApplicant.map((applicant) => {
            return (
              <Card key={applicant.processId} title={applicant.name}>
                <div className='flex flex-col gap-1'>
                  <Text className='font-bold text-lg sm:text-lg'>Mais Informações</Text>
                  <Text>
                    <span className='font-bold'>Whatsapp: </span> {applicant.phoneNumber}
                  </Text>
                  <Text>
                    <span className='font-bold'>Código do Processo: </span> {applicant.processId}
                  </Text>
                  <Link to={`status/${applicant.processId}`}>
                    <Button variant='outlined' className='w-full'>
                      Ver status do processo
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default HomePage;
