import Title from './ui/Title.tsx'
import Button from './ui/Button.tsx'
import Footer from './ui/Footer.tsx'

function Contact() {
  return (
    <>
      <Title>Contact Me</Title>
      <div className={'flex h-[500px] items-start justify-evenly gap-2 p-3'}>
        <div className={'h-full w-1/4 text-center'}>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl text-transparent">
            Let's Connect
          </span>
        </div>
        <div className={'h-full w-1/2'}>
          <form className={'flex flex-col items-center gap-5 p-4'}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                required
              />
            </label>

            <label>
              Message:
              <textarea
                name="message"
                required
              />
            </label>

            <Button
              className={
                'rounded-lg bg-custom-gradient px-5 py-4 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all hover:ring-foreground sm:px-10'
              }
            >
              Send
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
