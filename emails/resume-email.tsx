import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Text
} from '@react-email/components'

const ResumeEmail = () => {
  return (
    <Html>
      <Head />
      <Body className="bg-gray-100 p-6 font-serif text-gray-400">
        <Container className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-md">
          <Text className="mb-4 text-xl font-bold">Hello!</Text>
          <Text className="mb-6 text-base">
            I&apos;m thrilled to connect with you! I&apos;ve included my resume
            for your review. Click the button below to download it. I&apos;m
            looking forward to discussing how I can add value to your
            organization!
          </Text>
          <Button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            href="https://drive.google.com/file/d/1VQaapob6UVxHO7bnj31DaUL-CG2tEgpm/view?usp=sharing"
          >
            Download My Resume
          </Button>
          <Text className="mt-6 text-sm text-gray-600">
            Best regards,
            <br />
            Taha Zoabi
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ResumeEmail
