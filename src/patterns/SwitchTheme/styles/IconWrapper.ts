import styled from 'styled-components'

export const IconWrapper = styled.button<{ isDark: boolean }>`
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${({ theme }) => theme.transitions.default};
  margin-left: 30px;

  &:hover {
    opacity: 0.8;
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.primary};
    background: ${p => p.theme.colors.background};
    border-radius: 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: inline-flex;
    margin-left: 10px;
    &:hover {
      opacity: 0.8;
    }
  }
`
