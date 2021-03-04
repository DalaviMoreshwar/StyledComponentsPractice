import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.color.blue};
  padding: ${(props) => props.theme.sizes[1]};
`;

export const Theme = {
  color: {
    blue: "#1862fd",
    lightblue: "#f0c5f"
  },
  sizes: [16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24]
};
