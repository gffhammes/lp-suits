export interface IMapProps {
  height: string;
  width: string;
}

export const Map = ({ height, width }: IMapProps) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14309.541532042515!2d-48.843195!3d-26.2816039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb02a4712dbb5%3A0x29ee4abc4d4a4bed!2sSuits%20Aluguel%20de%20Trajes%20Masculinos!5e0!3m2!1spt-BR!2sbr!4v1726788663055!5m2!1spt-BR!2sbr"
      height={height}
      width={width}
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
