import { Box, Typography } from "@mui/material";

export interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  return (
    <Box sx={{ position: "fixed", top: 0, zIndex: 999 }}>
      <Typography>header</Typography>
    </Box>
  );
};
