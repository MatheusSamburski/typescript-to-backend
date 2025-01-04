import { EnumEspecie } from "../enum/EnumEspecie";

export type TipoPet = {
  id: number;
  nome: string;
  especie: EnumEspecie;
  adotado: boolean;
  dataDeNascimento: Date
}