import {
  Body,
  Container,
  Head,
  Hr,
  Img,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

export const HireMeEmail = ({
  title,
  message,
  email
}: {
  title: string
  message: string
  email: string
}) => (
  <Html>
    <Head />
    <Preview>A new job request was sent.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <div style={logoContainer}>
            <Text style={logoText}>dpaulos</Text>
            <Text style={logoNumber}>6</Text>
          </div>
          <Hr style={hr} />
          <Text style={h1}>{title}</Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>
            Sent by <a href={`mailto:${email}`}>{email}</a>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default HireMeEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
}

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: 'fit-content'
}

const logoText = {
  color: '#0a0600',
  fontSize: '32px',
  fontWeight: '700',
  textAlign: 'center' as const
}

const logoNumber = {
  color: '#40A2E3',
  fontSize: '32px',
  fontWeight: '700',
  textAlign: 'center' as const
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px'
}

const box = {
  padding: '0 48px'
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0'
}

const h1 = {
  color: '#40A2E3',
  fontSize: '20px',
  fontWeight: '700',
  textAlign: 'left' as const
}

const paragraph = {
  color: '#61677A',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const
}
