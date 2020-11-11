import React, {
  useCallback,
  useRef,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';
import { FiLock, FiUser, FiMail, FiCamera } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import axios from 'axios';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';
import { useToast } from '../../../hooks/toast';
import { useAuth } from '../../../hooks/auth';

import api from '../../../services/api';

import { Container, Title, AvatarInput, SelectGroup } from './styles';

interface DataProps {
  name: string;
  email: string;
  uf: string;
  city: string;
  description: string;
  password: string;
  oldPassword: string;
  confirmPassword: string;
}
interface IBGEResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}

const Profile: React.FC = () => {
  const [image, setImage] = useState<File>();
  const [description, setDescription] = useState<string>();

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSeletectedUf] = useState<string>('');
  const [selectedCity, setSeletectedCity] = useState<string>('');

  const history = useHistory();
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadOng() {
      const response = await api.get('ongs');
      const { city, uf, description } = response.data;
      setSeletectedUf(uf);
      setSeletectedCity(city);
      setDescription(description);
    }
    loadOng();
  }, []);

  useEffect(() => {
    axios
      .get<IBGEResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
      )
      .then((res) => {
        const ufInitials = res.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((res) => {
        const cityNames = res.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>): void {
    const uf = event.target.value;
    return setSeletectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>): void {
    const city = event.target.value;
    return setSeletectedCity(city);
  }

  const handleProfile = useCallback(
    async (data: DataProps) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          oldPassword: Yup.string().min(6, 'No mínimo 6 dígitos'),
          confirmPassword: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          oldPassword,
          password,
          confirmPassword,
          uf,
          description,
          city,
        } = data;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('uf', uf);
        formData.append('city', city);
        formData.append('description', description);

        if (oldPassword) {
          formData.append('oldPassword', oldPassword);
          formData.append('password', password);
          formData.append('confirmPassword', confirmPassword);
        }
        if (image) {
          formData.append('image', image);
        }

        const response = await api.put('/ongs', formData);
        const { url } = response.data;
        if (response.data) {
          updateUser({
            id: user.id,
            name,
            email,
            password: oldPassword,
            avatar: url,
          });
        }

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso!',
        });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro ao atualizar o perfil, tente novamente!',
        });
      }
    },
    [addToast, history, image, updateUser, user.id],
  );

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setImage(e.target.files[0]);
      }
    },
    [],
  );

  return (
    <Container>
      <Form
        onSubmit={handleProfile}
        ref={formRef}
        initialData={{
          name: user.name,
          email: user.email,
          description,
        }}
      >
        <Title>Profile</Title>
        <AvatarInput>
          <img
            src={
              user.avatar
                ? user.avatar
                : 'https://aeealberta.org/wp-content/uploads/2018/10/profile.png'
            }
            alt="profile"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </AvatarInput>

        <Input
          icon={FiUser}
          name="name"
          id="name"
          label="nome"
          placeholder="Nome"
        />

        <Textarea
          name="description"
          id="description"
          label="Descrição"
          placeholder="Escreva sobre a empresa"
        />

        <SelectGroup>
          <Select
            name="uf"
            value={selectedUf}
            onChange={handleSelectedUf}
            label="Estado"
            options={ufs.map((uf) => ({ value: uf, label: uf }))}
          />
          <Select
            name="city"
            value={selectedCity}
            onChange={handleSelectedCity}
            label="Cidade"
            options={cities.map((city) => ({ value: city, label: city }))}
          />
        </SelectGroup>

        <Input
          icon={FiMail}
          name="email"
          id="email"
          label="E-mail"
          placeholder="example@seuemail.com"
        />
        <Input
          icon={FiLock}
          name="oldPassword"
          label="senha antiga"
          placeholder="sua senha antiga"
          type="password"
        />
        <Input
          icon={FiLock}
          name="password"
          label="senha"
          placeholder="Senha"
          type="password"
        />
        <Input
          icon={FiLock}
          name="confirmPassword"
          label="Confirmar senha"
          placeholder="Confirmar senha"
          type="password"
        />
        <Button type="submit">Concluir Alteração</Button>
        <Link to="/">Cancelar</Link>
      </Form>
    </Container>
  );
};

export default Profile;
