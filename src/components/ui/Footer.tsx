import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <div className={'mb-5'}>
      <div className="mx-auto my-4 w-4/6">
        <hr className="h-1 border-0 bg-gradient-to-r from-primary to-secondary" />
      </div>

      <div
        className={
          'flex flex-col items-center justify-evenly gap-4 p-4 md:flex-row'
        }
      >
        <span className={'text-md sm:text-lg md:text-xl'}>
          &#169; Taha Zoabi. All Rights Reserved.
        </span>
        <div>
          <ul className={'flex gap-4'}>
            <li className={'hover:text-accent'}>
              <a
                target={'_blank'}
                href="https://github.com/TahaZoabi"
              >
                <Github />
              </a>
            </li>
            <li className={'hover:text-accent'}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/tahazoabi/"
              >
                <Linkedin />
              </a>
            </li>
            <li className={'hover:text-accent'}>
              <a href="mailto:range.dev7@gmail.com">
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
