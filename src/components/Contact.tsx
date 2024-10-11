import Title from './ui/Title.tsx'
import Button from './ui/Button.tsx'
import Footer from './ui/Footer.tsx'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Input } from './ui/Input.tsx'
import { Textarea } from './ui/TextArea.tsx'
import { Alert, AlertDescription, AlertTitle } from './ui/Alert.tsx'
import React, { useState } from 'react'

function Contact() {
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const formData = new FormData(event.target)

    formData.append('access_key', 'd2855961-b6a6-43a9-b17b-3dbaf56f446a')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

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
  }

  return (
    <>
      <Title>Contact Me</Title>
      <div
        id={'contact'}
        className="flex flex-col items-center justify-center p-3 md:flex-row md:items-start"
      >
        <div className="flex w-full flex-col justify-around gap-5 p-3 lg:flex-row">
          <div className="flex w-full flex-col gap-3 lg:w-1/3">
            <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text p-2 text-center text-4xl text-transparent lg:text-start">
              Let's Connect
            </p>
            <div className="text-md flex flex-col items-center text-center md:text-xl lg:items-start lg:text-start">
              <p className="w-full p-3">
                If you’d like to get in touch, feel free to reach out! I’m
                always open to discussing new projects, collaborations, or just
                connecting. Looking forward to hearing from you!
              </p>
              <p className="flex gap-3 p-2">
                <Mail />
                range.dev7@gmail.com
              </p>
              <p className="flex gap-3 p-2">
                <Phone />
                +972 054-873-4531
              </p>
              <p className="flex gap-3 p-2">
                <MapPin />
                Nein, North District
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-2/4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-5 p-4"
            >
              <div className="flex w-full flex-col gap-4">
                <label className="flex flex-col gap-2">
                  Your Name
                  <Input
                    type={'text'}
                    name={'name'}
                    placeholder={'Enter your name'}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Your Email
                  <Input
                    type={'email'}
                    name={'email'}
                    placeholder={'Enter your email'}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Write your message here
                  <Textarea
                    rows={8}
                    name={'message'}
                    placeholder={'Type your message here.'}
                    required
                  />
                </label>
              </div>

              <Button className="w-full rounded-lg bg-custom-gradient px-5 py-4 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all hover:ring-foreground sm:px-10 lg:w-1/4">
                Send
              </Button>
              {showAlert && (
                <Alert
                  className={
                    'fixed left-1/2 top-5 z-10 -translate-x-1/2 transform'
                  }
                >
                  <AlertTitle>Notification!</AlertTitle>
                  <AlertDescription>Email Sent Successfully!</AlertDescription>
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
