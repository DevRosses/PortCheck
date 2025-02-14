import { Container } from "@mui/material";

const PageContainer = ({ children, ...props }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, ...props.sx }}>
      {children}
    </Container>
  );
};

export default PageContainer;