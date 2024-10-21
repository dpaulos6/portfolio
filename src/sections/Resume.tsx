import { Input } from '../components/ui/Input.tsx'
import { useForm } from 'react-hook-form'
import Title from '../components/Title.tsx'
import Button from '../components/ui/Button.tsx'
import { MoveRight } from 'lucide-react'
// import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/Alert.tsx'
// import ResumeEmail from '../emails/EmailResume.tsx'

type TokenType = string | null

type FormData = {
  email: string
}

function Resume() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm<FormData>()

  const [showAlert, setShowAlert] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<TokenType>(null)

  // const onCaptchaChange = (token: TokenType) => {
  //   setRecaptchaToken(token)
  // }

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      alert('Please complete the CAPTCHA first.')
      return
    }

    const requestBody = {
      from: ' <Taha@tahazoabi.com>',
      to: [data.email],
      subject: 'Your Resume Request',
      text: 'Here is the content of your resume.'
    }

    console.log('Request Body:', requestBody)

    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`
        },
        body: JSON.stringify(requestBody)
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error details:', errorData)
        throw new Error('Failed to send email')
      }

      const emailData = await response.json()
      console.log('Email sent successfully:', emailData)
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
      reset()
      setRecaptchaToken(null)
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send email. Please try again later.')
    }
  }

  return (
    <section
      id={'resume'}
      className={'mb-16 p-4'}
    >
      <Title>Resume</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'flex-col items-center justify-center'}
      >
        <p className={'mx-auto mb-2 w-full p-2 text-center md:text-lg'}>
          Please enter your email address below to receive my resume.
        </p>
        <div
          className={
            'flex flex-col items-center justify-center gap-4 sm:mb-5 sm:flex-row'
          }
        >
          <label className="hidden sm:inline-block">Email</label>
          <Input
            className={'w-full p-3 shadow-md sm:w-1/2'}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              }
            })}
            placeholder={'Enter your email'}
          />
          <Button
            disabled={isSubmitting}
            className={
              'g-recaptcha mb-5 rounded-lg bg-gray-500 px-5 py-2 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all hover:ring-foreground enabled:bg-custom-gradient disabled:bg-gray-500 sm:mb-0'
            }
          >
            <MoveRight />
          </Button>
          {errors.email && (
            <p className={'text-red-500'}>{`${errors.email.message}`}</p>
          )}
        </div>

        {/* reCAPTCHA Component */}
        {/*<ReCAPTCHA*/}
        {/*  className={'flex items-center justify-center p-2'}*/}
        {/*  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}*/}
        {/*  onChange={onCaptchaChange}*/}
        {/*/>*/}
        {showAlert && (
          <Alert
            className={
              'fixed left-1/2 top-5 z-10 w-1/3 -translate-x-1/2 transform'
            }
          >
            <AlertTitle>Notification!</AlertTitle>
            <AlertDescription>Resume Sent Successfully!</AlertDescription>
          </Alert>
        )}
      </form>
    </section>
  )
}

export default Resume
