import styled from 'styled-components'

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.titleSmall};
  letter-spacing: 0px;
  line-height: 44px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.titleSmallest};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textLarge};
    line-height: 30px;
  }
`
