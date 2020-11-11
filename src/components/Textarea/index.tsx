import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import { Container, ErrorMessage } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container
      className="textarea-block"
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
    >
      <label htmlFor={name}>{label}</label>
      <textarea
        id="name"
        {...rest}
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
      />
      {error && <FiAlertCircle color="#c53030" size={20} />}
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default Textarea;
