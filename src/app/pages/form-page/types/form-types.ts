import { PostForm } from '@/domain/services';
import { Formatter, Validator } from '@/main/protocols';

export type AppProps = {
  validator: Validator;
  formatter: Formatter;
  apiForm: PostForm;
};

export type Form = {
  name: string;
  phoneNumber: string;
  frontEndExperience: ExperienceType;
  backEndExperience: ExperienceType;
  dataBaseExperience: ExperienceType;
  camundaExperience: ExperienceTypeOther;
  healthAreaExperience: ExperienceTypeOther;
  yearsOfExperienceFrontEnd: number | undefined;
  yearsOfExperienceBackEnd: number | undefined;
  yearsOfExperienceDatabase: number | undefined;
  additionalInformation: string;
};

export type FormError = {
  name: string | undefined;
  phoneNumber: string | undefined;
  frontEndExperience: string | undefined;
  backEndExperience: string | undefined;
  dataBaseExperience: string | undefined;
  camundaExperience: string | undefined;
  healthAreaExperience: string | undefined;
  yearsOfExperienceFrontEnd: string | undefined;
  yearsOfExperienceBackEnd: string | undefined;
  yearsOfExperienceDatabase: string | undefined;
  additionalInformation: string | undefined;
};

export type ExperienceType = 'HIGHLY_EXPERIENCED' | 'EXPERIENCED' | 'NORMAL' | 'NONE' | null;

export type ExperienceTypeOther = 'EXPERIENCED' | 'NONE' | null;
