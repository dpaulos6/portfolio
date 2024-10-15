import { Input } from './ui/Input.tsx'
import { Textarea } from './ui/TextArea.tsx'
import Button from './ui/Button.tsx'
import { Alert, AlertDescription, AlertTitle } from './ui/Alert.tsx'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

function Form() {
  const [showAlert, setShowAlert] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm()

  async function onSubmit(data: FieldValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const payload = {
      ...data,
      access_key: 'd2855961-b6a6-43a9-b17b-3dbaf56f446a'
    }

    const json = JSON.stringify(payload)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
    }

    setShowAlert((prevState) => !prevState)
    setTimeout(() => setShowAlert((prevState) => !prevState), 3000)

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5 p-4"
    >
      <div className="flex w-full flex-col gap-4">
        <label className="flex flex-col gap-2 shadow-md">
          Your Name
          <Input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name should be 3 characters at least'
              }
            })}
            type={'text'}
            placeholder={'Enter your name'}
          />
          {errors.name && (
            <p className={'text-red-500'}>{`${errors.name.message}`}</p>
          )}
        </label>
        <label className="flex flex-col gap-2 shadow-md">
          Your Email
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              }
            })}
            placeholder={'Enter your email'}
          />
          {errors.email && (
            <p className={'text-red-500'}>{`${errors.email.message}`}</p>
          )}
        </label>
        <label className="flex flex-col gap-2 shadow-md">
          Write your message here
          <Textarea
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Must be at least 10 characters'
              }
            })}
            rows={8}
            placeholder={'Type your message here.'}
          />
          {errors.message && (
            <p className={'text-red-500'}>{`${errors.message.message}`}</p>
          )}
        </label>
      </div>

      <Button
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gray-500 px-5 py-4 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all hover:ring-foreground enabled:bg-custom-gradient disabled:bg-gray-500 disabled:text-black sm:px-10 lg:w-1/4"
      >
        Send
      </Button>
      {showAlert && (
        <Alert
          className={'fixed left-1/2 top-5 z-10 -translate-x-1/2 transform'}
        >
          <AlertTitle>Notification!</AlertTitle>
          <AlertDescription>Email Sent Successfully!</AlertDescription>
        </Alert>
      )}
    </form>
  )
}

export default Form
