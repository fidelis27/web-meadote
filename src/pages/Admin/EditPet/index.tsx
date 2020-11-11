import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiAlertOctagon } from 'react-icons/fi';

import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import api from '../../../services/api';
import { Container, Footer } from './styles';
import { useToast } from '../../../hooks/toast';
import getValidationErrors from '../../../utils/getValidationErrors';

interface DataProps {
  name: string;
  description: string;
  ong_id: string;
  adopted: boolean;
}

const NewPet: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleCreatePet = useCallback(
    async (data: DataProps) => {
      const { name, description, adopted } = data;

      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo "Name" é obrigatório'),
          description: Yup.string().required('Campo "Descrição" é obrigatório'),
          adoted: Yup.string().required('Campo "adotado" é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api
          .post('pets', {
            name,
            description,
            adopted,
          })
          .then(() => {
            addToast({
              type: 'success',
              title: 'Cadastro realizado com sucesso',
            });
            history.push('/landing');
          });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [addToast, history],
  );

  return (
    <Container id="page-teacher-form">
      <PageHeader
        title="Você tem Pet para adoção"
        description="O primeiro passo é preencher esse formulário com as informações do Pet."
      />
      <main>
        <Form ref={formRef} onSubmit={handleCreatePet}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input label="Nome do Pet" name="name" />

            <Textarea label="Descrição" name="description" />
          </fieldset>

          <Footer>
            <p>
              <FiAlertOctagon color="#ac495b" size={30} />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </Form>
      </main>
    </Container>
  );
};

export default NewPet;
