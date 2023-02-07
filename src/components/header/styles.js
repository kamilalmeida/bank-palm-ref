import styled from "styled-components";

export const Container = styled.div`
  > ul > li > a {
    display: inline-block;
    padding: 8px 24px;
    position: relative;
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
    font-size: 1.8rem;
  }
`;
