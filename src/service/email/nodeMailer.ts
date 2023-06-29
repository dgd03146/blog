import nodemailer from 'nodemailer'
import { getNodeMailerUser, getNodeMailerPass } from '@/envs'
import { TEmail } from './types'

const transporter = nodemailer.createTransport({
  // 사용하고자 하는 서비스, gmail계정으로 전송할 예정이기에 'gmail'
  service: 'gmail',
  // host를 gmail로 설정
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // Gmail 주소 입력, 'testmail@gmail.com'
    user: getNodeMailerUser(),
    // Gmail 패스워드 입력
    pass: getNodeMailerPass(),
  },
})

export async function sendEmail({ subject, from, message }: TEmail) {
  const mailData = {
    to: getNodeMailerUser(),
    subject: `[BLOG] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>Sender: ${from}</p>
    `,
  }
  return transporter.sendMail(mailData)
}
