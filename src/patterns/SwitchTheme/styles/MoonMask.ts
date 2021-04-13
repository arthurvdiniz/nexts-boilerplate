import styled from 'styled-components'

export const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${p => p.theme.colors.background};
  transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: background ${({ theme }) => theme.transitions.easeInOutQuad},
    color ${({ theme }) => theme.transitions.easeInOutQuad}, transform ${({ theme }) => theme.transitions.default};
`
