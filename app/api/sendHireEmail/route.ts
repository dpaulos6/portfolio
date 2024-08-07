import { HireMeEmail } from '@/emails/HireMeEmail'
import { render } from '@react-email/render'
import resend from '@/helpers/resendClient'

const outlook = 'itzframepvp@outlook.com'

export async function POST(request: Request, res: Response) {
  const { email, title, message } = await request.json()

  const { error } = await resend.emails.send({
    from: 'Website <hire@dpaulos6.com>',
    to: outlook,
    subject: title,
    html: render(HireMeEmail({ email, title, message }))
  })

  if (error) {
    return Response.json(error)
  }

  return Response.json({ message: 'Email sent successfully' })
}
