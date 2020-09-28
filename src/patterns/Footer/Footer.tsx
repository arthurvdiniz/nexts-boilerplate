import React from 'react'

import { Container } from './styles'

function Footer(): React.ReactElement {
  return (
    <Container>
      <span>footer</span>
    </Container>
  )
}

export default React.memo(Footer)
