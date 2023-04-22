import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { FailedToPostFormError } from '@/domain/errors';

import { Form, FormError, AppProps } from '../types/form-types';

const initialForm: Form = {
  name: '',
  phoneNumber: '',
  frontEndExperience: null,
  backEndExperience: null,
  dataBaseExperience: null,
  camundaExperience: null,
  healthAreaExperience: null,
  yearsOfExperienceFrontEnd: undefined,
  yearsOfExperienceBackEnd: undefined,
  yearsOfExperienceDatabase: undefined,
  additionalInformation: '',
};

const initialFormErr: FormError = {
  name: undefined,
  phoneNumber: undefined,
  frontEndExperience: undefined,
  backEndExperience: undefined,
  dataBaseExperience: undefined,
  camundaExperience: undefined,
  healthAreaExperience: undefined,
  yearsOfExperienceFrontEnd: undefined,
  yearsOfExperienceBackEnd: undefined,
  yearsOfExperienceDatabase: undefined,
  additionalInformation: undefined,
};

export const useFormPage = ({ validator, formatter, apiForm }: AppProps) => {
  const [form, setForm] = useState<Form>(initialForm);
  const [formErr, setFormErr] = useState<FormError>(initialFormErr);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiErr, setApiErr] = useState<string | null>(null);
  const navigate = useNavigate();

  const onChangeValue = (field: string, value: string) => {
    const newValue = formatter.format(field, value);
    const err = validator.validate(field, newValue);
    setForm((prev) => ({
      ...prev,
      [field]: newValue,
    }));
    setFormErr((prev) => ({
      ...prev,
      [field]: err,
    }));
  };

  const checkFormIsValid = () => {
    const containsError =
      formErr.camundaExperience !== undefined ||
      formErr.healthAreaExperience !== undefined ||
      formErr.dataBaseExperience !== undefined ||
      formErr.backEndExperience !== undefined ||
      formErr.frontEndExperience !== undefined ||
      formErr.yearsOfExperienceBackEnd !== undefined ||
      formErr.yearsOfExperienceDatabase !== undefined ||
      formErr.yearsOfExperienceFrontEnd !== undefined ||
      form.camundaExperience === null ||
      form.healthAreaExperience === null ||
      form.dataBaseExperience === null ||
      form.backEndExperience === null ||
      form.frontEndExperience === null ||
      form.yearsOfExperienceBackEnd === null ||
      form.yearsOfExperienceDatabase === null ||
      form.yearsOfExperienceFrontEnd === null;
    return containsError;
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.name, event.target.value);
  };

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeValue(event.target.name, event.target.value);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      setApiErr(null);
      const id = await apiForm({
        data: form,
      });
      navigate({
        pathname: `/status/${id}`,
      });
    } catch (e) {
      const error = e as FailedToPostFormError;
      setApiErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    formErr,
    loading,
    apiErr,
    onChange,
    onChangeTextArea,
    submitForm,
    checkFormIsValid,
  };
};
