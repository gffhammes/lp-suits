import { API_URL } from "@/utils";
import {
  IAvaliacoes,
  IGeneralData,
  IPrimeiraSecao,
  ISecaoDiferenciais,
  ISecaoFotosDiamante,
  ISecaoOpcoesTrajes,
} from "./interfaces";

export const getHeroSection = async () => {
  try {
    const data: { data: IPrimeiraSecao } = await fetch(
      `${API_URL}/primeira-secao?populate[0]=Capa`,
      {
        cache: "default",
      }
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getDiamondPhotosSection = async () => {
  try {
    const data: { data: ISecaoFotosDiamante } = await fetch(
      `${API_URL}/secao-fotos-losango?populate[0]=Foto1&populate[1]=Foto2&populate[2]=Foto3`,
      {
        cache: "default",
      }
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getDifferentials = async () => {
  try {
    const data: { data: ISecaoDiferenciais } = await fetch(
      `${API_URL}/diferenciais?populate[0]=Diferenciais`,
      {
        cache: "default",
      }
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getSuitsOptions = async () => {
  try {
    const data: { data: ISecaoOpcoesTrajes } = await fetch(
      `${API_URL}/opcoes-trajes?populate[0]=OpcaoTraje&populate[1]=OpcaoTraje.Fotos`,
      {
        cache: "default",
      }
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getReviews = async () => {
  try {
    const data: { data: IAvaliacoes } = await fetch(
      `${API_URL}/avaliacoes?populate[0]=Avaliacoes`,
      {
        cache: "default",
      }
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const getGeneralData = async () => {
  try {
    const data: { data: IGeneralData } = await fetch(
      `${API_URL}/dados-gerais`,
      {
        cache: "default",
      }
    ).then((res) => res.json());

    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
