import { Input } from '../components/ui/Input.tsx'
import { useForm } from 'react-hook-form'
import Title from '../components/Title.tsx'
import Button from '../components/ui/Button.tsx'
import { MoveRight } from 'lucide-react'

function Resume() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm()

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    reset()
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
            'flex flex-col items-center justify-center gap-4 sm:flex-row'
          }
        >
          <label className="p-2">Email</label>

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
              'rounded-lg bg-gray-500 px-5 py-2 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all hover:ring-foreground enabled:bg-custom-gradient disabled:bg-gray-500'
            }
          >
            <MoveRight />
          </Button>
          {errors.email && (
            <p className={'text-red-500'}>{`${errors.email.message}`}</p>
          )}
        </div>
      </form>
    </section>
  )
}

export default Resume
