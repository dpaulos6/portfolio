import Title from './ui/Title.tsx'
import Button from './ui/Button.tsx'
import Footer from './ui/Footer.tsx'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Input } from './ui/Input.tsx'
import { Textarea } from './ui/TextArea.tsx'

function Contact() {
  return (
    <>
      <Title>Contact Me</Title>
      <div className="flex flex-col items-center justify-center p-3 md:flex-row md:items-start">
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
            <form className="flex flex-col items-center gap-5 p-4">
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
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
