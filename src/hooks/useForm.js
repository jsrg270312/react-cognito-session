import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setForm(initialValues);
  };

  return {
    ...form,
    onInputChange,
    onResetForm,
  };
};
