type InputPropsType = {
  currentText: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: (props: string) => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({ currentText, setCurrentText }: InputPropsType) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };

  return (
    <input
      id={"hw04-input"}
      type="text"
      value={currentText}
      onChange={onChangeHandler}
    />
  );
};
