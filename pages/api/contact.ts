import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
  console.log('サーバー');
  res.status(200).json(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // 管理人が受け取るメール
  const toHostMailDate = {
    from: req.body.mail,
    to: process.env.GMAIL_USER,
    subject: `【お問い合わせです】${req.body.name}様より`,
    text: `${req.body.message} Send from ${req.body.mail}`,
    html: `
            <p>【名前】</p>
            <p>${req.body.name}</p>
            <p>【メールアドレス】</p>
            <p>${req.body.mail}</p>
            <p>【電話番号】</p>
            <p>${req.body.phon}</p>
            <p>【問い合わせ内容】</p>
            <p>${req.body.message}</p>
        `,
  };

  //ユーザーが受け取るメール
  const toUserMailDate = {
    from: process.env.GMAIL_USER,
    to: req.body.mail,
    subject: `【${req.body.name}様お問い合わせありがとう御座います】`,
    text: `${req.body.message} Send from ${req.body.mail}`,
    html: `

            <p>${req.body.name}様お問い合わせありがとう御座います</p>
            <p>こちらは自動返信メールになります。</p>
            <p>以下のようにお問い合わせを承りました。翌営業日中に返信いたしますのでお待ちください。</p>
            <p>【名前】</p>
            <p>${req.body.name}</p>
            <p>【メールアドレス】</p>
            <p>${req.body.mail}</p>
            <p>【電話番号】</p>
            <p>${req.body.phon}</p>
            <p>【問い合わせ内容】</p>
            <p>${req.body.message}</p>
        `,
  };

  transporter.sendMail(toHostMailDate, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(toUserMailDate, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}
