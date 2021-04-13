import styled from 'styled-components'

interface ComponentProps {
  as?: string
}

export const Title = styled.h1<ComponentProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.title};
  letter-spacing: 0px;
  line-height: 48px;
  font-weight: 600;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.titleMedium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.titleSmall};
  }
`
