import styled from 'styled-components'

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  letter-spacing: 0.16px;
  line-height: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textMedium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textSmall};
  }
`
