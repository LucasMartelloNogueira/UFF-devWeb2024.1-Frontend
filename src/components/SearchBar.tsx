import React, { FormEvent, useState } from "react";

type SearchBarProps = {
  value: string;
  handleValue: (value: string) => void;
};

export default function SearchBar({ value, handleValue }: SearchBarProps) {

    const [currentValue, useCurrentValue] = useState(value);
    const [isButtonDisabled, useIsButtonDisabled] = useState(true);
  
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleValue(currentValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        useCurrentValue(e.target.value);
        useIsButtonDisabled(e.target.value === "");
    }

  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          value={currentValue}
          onChange={(e) => handleChange(e)}
          id="searchValue"
          placeholder="pesquisar por nome, país, estado ou cidade"
        />
      {isButtonDisabled ? <button className="btn btn-outline-primary" type="submit" disabled>Pesquisar</button> : <button className="btn btn-primary" type="submit">Pesquisar</button>}
    </form>
  );
}
