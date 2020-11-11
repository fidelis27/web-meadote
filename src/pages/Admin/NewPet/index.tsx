import React, {
  useMemo,
  ChangeEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FiPlus, FiAlertOctagon } from 'react-icons/fi';

import PageHeader from '../../../components/PageHeader';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import api from '../../../services/api';

import {
  Container,
  Footer,
  InputBlock,
  ImagesContainer,
  NewImage,
  ElementWrapper,
  Checkbox,
  Image,
} from './styles';
import { useToast } from '../../../hooks/toast';
import getValidationErrors from '../../../utils/getValidationErrors';

interface ImagesProps {
  url: string;
}
interface DataProps {
  name: string;
  description: string;
  ong_id: string;
  adopted: boolean;
  breed: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}
type ValueProps = {
  name: string;
  description: string;
  adopted: boolean;
};

const NewPet: React.FC = () => {
  const initialValues = useMemo(
    () => ({
      name: '',
      description: '',
      adopted: false,
    }),
    [],
  );
  const formRef = useRef<FormHandles>(null);
  const [values, setValues] = useState<ValueProps>(initialValues);
  const history = useHistory();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [previewImages, setPreviewImages] = useState<string[]>();
  const [images, setImages] = useState<File[]>([]);

  const { addToast } = useToast();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;

    if (type === 'checkbox') {
      setValues((oldValues) => ({ ...oldValues, [name]: checked }));
    } else {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    }
  }, []);

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        // eslint-disable-next-line no-useless-return
        return;
      }

      const selectedImages = Array.from(event.target.files);
      setImages(selectedImages);

      const selectedImagesPreview = selectedImages.map((image) => {
        return URL.createObjectURL(image);
      });

      setPreviewImages(selectedImagesPreview);
    },
    [],
  );

  const handleCreatePet = useCallback(
    async (data: DataProps) => {
      const { name, description, breed } = data;

      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo "Name" é obrigatório'),
          description: Yup.string().required('Campo "Descrição" é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const newData = new FormData();
        newData.append('name', name);
        newData.append('description', description);
        newData.append('breed', breed);
        newData.append('adopted', String(values.adopted));
        images.forEach((image) => {
          newData.append('images', image);
        });

        api.post('pets', newData).then(() => {
          addToast({
            type: 'success',
            title: 'Cadastro realizado com sucesso',
          });
          history.push('/');
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [addToast, history, images, values.adopted],
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
            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <Image htmlFor="image[]">
                {previewImages ? (
                  <img src={previewImages[activeImageIndex]} alt="imagens" />
                ) : (
                  <FiPlus size={24} color="#15b6d6" />
                )}
              </Image>

              <ImagesContainer>
                {previewImages &&
                  previewImages.map((image, index) => {
                    return (
                      <button
                        key={image}
                        onClick={() => {
                          setActiveImageIndex(index);
                        }}
                        className={activeImageIndex === index ? 'active' : ''}
                        type="button"
                      >
                        <img key={`image-${image}`} src={image} alt={image} />
                      </button>
                    );
                  })}
                <NewImage htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImage>
              </ImagesContainer>
              <input
                name="images"
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </fieldset>
          <fieldset>
            <legend>Seus dados</legend>
            <Input label="Nome do Pet" name="name" />

            <Textarea label="Descrição" name="description" />
            <Input label="Raça do Pet" name="breed" />
            <ElementWrapper>
              <Checkbox>
                <label htmlFor="adopted">
                  Adotado?
                  <span className={values.adopted ? 'checked' : ''} />
                  <input
                    type="checkbox"
                    name="adopted"
                    id="adopted"
                    onChange={handleChange}
                  />
                </label>
              </Checkbox>
            </ElementWrapper>
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
