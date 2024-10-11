import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <div className={'mb-5'}>
      <div className="mx-auto my-4 w-4/6">
        <hr className="h-1 border-0 bg-gradient-to-r from-primary to-secondary" />
      </div>

      <div className={'flex items-center justify-evenly p-4'}>
        <span className={'text-xl'}>
          &#169; Taha Zoabi. All Rights Reserved.{' '}
        </span>
        <div>
          <ul className={'flex gap-4'}>
            <li>
              <Github />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Mail />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
