import Title from '../components/Title.tsx'
import Footer from '../components/Footer.tsx'
import { Mail, Phone, MapPin } from 'lucide-react'
import Form from '../components/Form.tsx'

function Contact() {
  return (
    <section>
      <Title>Contact Me</Title>
      {/* Contact Description */}
      <div
        id={'contact me'}
        className="flex flex-col items-center justify-center p-3 md:flex-row"
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
              <p className="flex h-[39.99px] w-[223.23px] gap-3 p-2 md:h-[43.99] md:w-[260.73px]">
                <Phone />
                +972 054-873-4531
              </p>
              <p className="flex h-[39.99px] w-[223.23px] gap-3 p-2 md:h-[43.99] md:w-[260.73px]">
                <MapPin />
                Nein, Israel
              </p>
            </div>
          </div>
          {/*Form*/}
          <div className="flex w-full flex-col lg:w-2/4">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
