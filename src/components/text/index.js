import styled from "styled-components";

export const LgTitle = styled.h2`
  text-decoration: none;
  margin-top: 4px;
  font-size: calc(1.6rem + 0.5vw);
`;
export const MdTitle = styled.div`
  line-height: 1.4;
  font-weight: bold;
  font-size: calc(1.4rem + 0.3vw);
`;
export const MdTitleMiddle = styled(MdTitle)`
  text-align: center;
`;

export const SmTextCSS = `
  font-size: calc(1.1rem + 0.2vw);
`;
export const SmText = styled.div`
  line-height: 1.6;
  ${SmTextCSS}
`;
export const SmlrText = styled.div`
  line-height: 1.4;
  font-size: calc(0.9rem + 0.15vw);
  margin-bottom: 8px;
`;
export const LogText = styled.div`
  line-height: 1.2;
  font-size: calc(0.8rem + 0.1vw);
  margin-bottom: 2px;
`;

// Styling
export const TextSpanLog = styled.span`
  font-style: italic;
  font-weight: ${p => (p.bold ? "700" : "300")};
`;
