import React from "react";
import Button from "../Button";

function Formulary() {
  return (
    <form>
      <div>
        <label htmlFor="tarefa">Adicione um novo timer</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="Qual o nome do timer?"
          required
        />
      </div>
      <label htmlFor="tempo">Tempo</label>
      <input
        type="time"
        name="tempo"
        id="tempo"
        step="1"
        min="00:00:00"
        max="01:30:00"
        required
      />
      <div></div>
      <Button />
    </form>
  );
}

export default Formulary;
