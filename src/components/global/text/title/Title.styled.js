import { marginProps, widthTypeOf } from 'helpers';
import styled from 'styled-components';
import { sizes, weights } from '../helpers';

export const H1Styled = styled.h1`
  ${p => marginProps(p)}
  ${p => p.width && widthTypeOf(p.width)}

  font-family: ${p => p.theme.fonts[p.family]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;

export const H2Styled = styled.h2`
  ${p => marginProps(p)}
  ${p => p.width && widthTypeOf(p.width)}

  font-family: ${p => p.theme.fonts[p.family]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;

export const H3Styled = styled.h3`
  ${p => marginProps(p)}
  ${p => p.width && widthTypeOf(p.width)}

  font-family: ${p => p.theme.fonts[p.family]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;

export const H4Styled = styled.h4`
  ${p => marginProps(p)}
  ${p => p.width && widthTypeOf(p.width)}

  font-family: ${p => p.theme.fonts[p.family]};
  font-weight: ${p => p.theme.fontWeights[weights[p.weight]]};
  font-size: ${p => p.theme.fontSizes[sizes[p.size]]};
  line-height: ${p => p.theme.lineHeights[p.lh]};
  ${p => p.textAlign && `text-align: ${p.textAlign};`}
  ${p => p.color && `color: ${p.theme.colors[p.color]}`}
`;
