interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface ParagraphChild {
  text: string;
  type: "text";
  bold?: boolean;
}

export interface IParagraph {
  type: "paragraph";
  children: ParagraphChild[];
}

interface Attributes {
  Titulo: string;
  Descricao: IParagraph[];
  TextoBotao: string;
  createdAt: string;
  updatedAt: string;
  Capa: {
    data: ImageData;
  };
}

export interface IPrimeiraSecao {
  id: number;
  attributes: Attributes;
}

export interface ISecaoFotosDiamante {
  id: number;
  attributes: {
    Titulo: string;
    Descricao: IParagraph[];
    TextoBotao: string;
    createdAt: string;
    updatedAt: string;
    Foto1: {
      data: ImageData;
    };
    Foto2: {
      data: ImageData;
    };
    Foto3: {
      data: ImageData;
    };
  };
}

interface Diferencial {
  id: number;
  Titulo: string;
  Descricao: IParagraph[];
}

export interface ISecaoDiferenciais {
  id: number;
  attributes: {
    Titulo: string;
    TextoBotao: string;
    createdAt: string;
    updatedAt: string;
    Diferenciais: Diferencial[];
  };
}

interface OpcaoTraje {
  id: number;
  Titulo: string;
  Descricao: IParagraph[];
  Fotos: { data: ImageData[] };
}

export interface ISecaoOpcoesTrajes {
  id: number;
  attributes: {
    Titulo: string;
    TextoBotao: string;
    createdAt: string;
    updatedAt: string;
    OpcaoTraje: OpcaoTraje[];
  };
}

interface Avaliacao {
  id: number;
  QuantidadeEstrelas: number;
  Texto: string;
  Nome: string;
  URLFoto: string | null;
}

export interface IAvaliacoes {
  id: number;
  attributes: {
    Titulo: string;
    createdAt: string;
    updatedAt: string;
    Avaliacoes: Avaliacao[];
  };
}

export interface IGeneralData {
  id: number;
  attributes: {
    LinkSite: string;
    LinkInstagram: string;
    WhatsApp: string;
    createdAt: string;
    updatedAt: string;
  };
}
