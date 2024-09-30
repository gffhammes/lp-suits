import { IParagraph } from "@/services/interfaces";
import { Box, BoxProps, Typography } from "@mui/material";

export interface ICustomTextProps {
  data: IParagraph[];
  containerProps?: BoxProps;
}

export const CustomText = ({ data, containerProps }: ICustomTextProps) => {
  return (
    <Box {...containerProps}>
      {data.map((paragraph, paragraphIndex) => {
        return (
          <p key={paragraphIndex}>
            {paragraph.children.map((item, childIndex) => {
              return (
                <Typography
                  key={`${paragraphIndex}-${childIndex}`}
                  component="span"
                  fontWeight={item.bold ? "bold" : undefined}
                >
                  {item.text}
                </Typography>
              );
            })}
          </p>
        );
      })}
    </Box>
  );
};
