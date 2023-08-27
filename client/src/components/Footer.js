import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-white text-center py-3'>&copy; Made by Anush Dubey  <br />
          <a className='text-white text-center py-3' href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
               Github
          </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
