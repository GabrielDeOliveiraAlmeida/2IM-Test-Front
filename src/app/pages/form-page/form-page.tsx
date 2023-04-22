import { Button, Card, Input, RadioGroup, Text, TextArea, Title } from '@/app/components';
import { frontEndData, backEndData, bancoData, camundaData, saudeData } from '@/app/static';

import { useFormPage } from './hooks/use-form-page';
import { AppProps } from './types/form-types';

const FormPage: React.FC<AppProps> = ({ validator, formatter, apiForm }: AppProps) => {
  const {
    form,
    formErr,
    loading,
    apiErr,
    onChange,
    onChangeTextArea,
    submitForm,
    checkFormIsValid,
  } = useFormPage({
    validator,
    formatter,
    apiForm,
  });

  return (
    <>
      <div className='flex flex-start gap-2 items-center mt-9 mb-9'>
        <Title>Processo Seletivo</Title>
      </div>
      <form onSubmit={submitForm} className='flex flex-col gap-4'>
        <Card title={'Dados Pessoais'}>
          <Input
            value={form.name}
            label='Nome'
            name='name'
            onChange={onChange}
            error={formErr.name}
            placeholder='Seu nome completo'
          />
          <Input
            label='Whatsapp'
            value={form.phoneNumber}
            name='phoneNumber'
            onChange={onChange}
            error={formErr.phoneNumber}
            placeholder='Seu Whatsapp para contato:'
          />
        </Card>
        <Card title={'Front-end'}>
          <Text>Quando falamos de front-end, meu nível de experiência é:</Text>
          <RadioGroup
            data={frontEndData}
            onChange={onChange}
            value={form.frontEndExperience}
            name='frontEndExperience'
          ></RadioGroup>
          <Input
            type='number'
            value={form.yearsOfExperienceFrontEnd}
            name='yearsOfExperienceFrontEnd'
            label='Anos de experiência com front-end:'
            placeholder='0'
            onChange={onChange}
            error={formErr.yearsOfExperienceFrontEnd}
          />
        </Card>
        <Card title={'Back-end'}>
          <Text>Quando falamos de back-end, meu nível de experiência é:</Text>
          <RadioGroup
            data={backEndData}
            onChange={onChange}
            value={form.backEndExperience}
            name='backEndExperience'
          ></RadioGroup>
          <Input
            type='number'
            value={form.yearsOfExperienceBackEnd}
            name='yearsOfExperienceBackEnd'
            label='Anos de experiência com back-end:'
            placeholder='0'
            onChange={onChange}
            error={formErr.yearsOfExperienceBackEnd}
          />
        </Card>
        <Card title={'Banco de dados'}>
          <Text>Quando falamos de banco de dados, meu nível de experiência é:</Text>
          <RadioGroup
            data={bancoData}
            onChange={onChange}
            value={form.dataBaseExperience}
            name='dataBaseExperience'
          ></RadioGroup>
          <Input
            type='number'
            name='yearsOfExperienceDatabase'
            value={form.yearsOfExperienceDatabase}
            label='Anos de experiência com banco de dados:'
            placeholder='0'
            error={formErr.yearsOfExperienceDatabase}
            onChange={onChange}
          />
        </Card>
        <Card title={'Outras Experiências'}>
          <Text>Possuo conhecimento ou experiência em:</Text>
          <Text>Camunda</Text>
          <RadioGroup
            data={camundaData}
            onChange={onChange}
            value={form.camundaExperience}
            name='camundaExperience'
          ></RadioGroup>
          <Text>Mercado de saúde</Text>
          <RadioGroup
            data={saudeData}
            onChange={onChange}
            value={form.healthAreaExperience}
            name='healthAreaExperience'
          ></RadioGroup>
        </Card>
        <Card title={'Comentários'}>
          <TextArea
            name='additionalInformation'
            value={form.additionalInformation}
            onChange={onChangeTextArea}
            placeholder=''
          ></TextArea>
        </Card>
        {apiErr && (
          <div className='flex justify-center'>
            <Text className='text-red-500'>{apiErr}</Text>
          </div>
        )}
        <Button disabled={checkFormIsValid()} type='submit'>
          {loading ? 'Carregando...' : 'Enviar'}
        </Button>
      </form>
    </>
  );
};

export default FormPage;
