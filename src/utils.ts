export const getDefaultWhatsappLink = () => {
  return generateWhatsAppLink(
    "Olá, vim pelo site e gostaria de alugar um traje elegante!"
  );
};

export const generateWhatsAppLink = (text: string) => {
  const phoneNumber = 5547999992666;

  const encodedText = encodeURI(text);

  const whatsAppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

  return whatsAppLink;
};
