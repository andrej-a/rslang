import React from 'react';
import { FormTitleStyled } from './FormTitle.styled';

interface IFormTitle {
  TITLE: string;

}
const FormTitle = ({ TITLE }: IFormTitle) => {
  return (
    <>
      <FormTitleStyled>
        <p>{TITLE}</p>
      </FormTitleStyled>
    </>
  );
};

export default FormTitle;