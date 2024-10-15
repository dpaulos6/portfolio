import { Input } from '../components/ui/Input.tsx'
import { useForm } from 'react-hook-form'
import Title from '../components/Title.tsx'
import Button from '../components/ui/Button.tsx'
import { MoveRight } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'

function Resume() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm()

  const [recaptchaToken, setRecaptchaToken] = useState(null)

  const onSubmit = async () => {
    if (!recaptchaToken) {
      alert('Please complete the CAPTCHA first.')
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    reset()
    setRecaptchaToken(null)
  }

  return (
    <section
      id={'resume'}
      className={'mb-16 p-4'}
    >
      <Title>Resume</Title>
      <form
        action={'?'}
        method={'POST'}
        id={'demo-form'}
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
        <ReCAPTCHA
          className={'flex items-center justify-center p-2'}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        />
      </form>
    </section>
  )
}

export default Resume
