import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState, ReactNode } from 'react';

import SubHeader from './subHeader';

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const phonRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [nameValue, setNameValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [phonValue, setPhonValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [nameError, setNameError] = useState('');
  const [mailError, setMailError] = useState('');
  const [phonError, setPhonError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [error, setError] = useState(false);

  //入力内容を受け取る処理
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailValue(e.target.value);
  };
  const handlePhonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhonValue(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  //入力内容を消す処理
  const clearValues = () => {
    setNameValue('');
    setMailValue('');
    setPhonValue('');
    setMessageValue('');
  };

  //ここでバリデーションチェックとメール送信処理の実行を行う。
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailCheck = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const phonCheck = /^0\d{9,10}$/;

    setNameError('');
    setMailError('');
    setPhonError('');
    setMessageError('');

    if (!nameValue) {
      setNameError('名前を入力して下さい');
      setError(false);
      console.log(error);
    }
    if (!mailValue) {
      setMailError('メールアドレスを入力して下さい');
      setError(false);
    } else if (!mailCheck.test(mailValue)) {
      setMailError('正しくメールアドレスを入力して下さい');
      setError(false);
    }
    if (!phonValue) {
      setPhonError('電話番号を入力して下さい');
    } else if (!phonCheck.test(phonValue)) {
      setPhonError('電話番号を正しく入力して下さい');
    }
    if (!messageValue) {
      setMessageError('問い合わせ内容を入力して下さい');
    }

    if (nameValue && mailCheck.test(mailValue) && phonCheck.test(phonValue) && messageValue) {
      const result = confirm(`
        下記の内容で送信しても宜しいでしょうか？\n
        【お名前】\n
        ${nameValue}\n
        【メールアドレス】\n
        ${mailValue}\n
        【電話番号】\n
        ${phonValue}\n
        【問い合わせ内容】\n
        ${messageValue}`);

      if (result) {
        mailSend();
        alert('送信完了しました');
        clearValues();
      }
    }
  };

  //メール送信の実行をAPIへ送信する処理
  const mailSend = async () => {
    let data = {
      name: nameRef.current?.value,
      mail: mailRef.current?.value,
      phon: phonRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log('送信完了');
    });
  };

  return (
    <>
      <SubHeader text="問い合わせ" />
      <div className="container mt-5 position-relative">
        <h2 className={`mt-3`}>問い合わせフォーム</h2>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <div>
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label">
                お名前
              </label>
              <input
                value={nameValue}
                type="text"
                className="form-control"
                id="name"
                ref={nameRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e)}
              />
              <span className="text-danger">{nameError}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="mail" className="form-label">
                メールアドレス
              </label>
              <input
                value={mailValue}
                type="text"
                className="form-control"
                id="mail"
                ref={mailRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMailChange(e)}
              />
              <span className="text-danger">{mailError}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="phon" className="form-label">
                電話番号{' '}
              </label>
              <input
                value={phonValue}
                type="text"
                className="form-control"
                id="phon"
                ref={phonRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePhonChange(e)}
              />
              <span className="text-danger">{phonError}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                問い合わせ内容{' '}
              </label>
              <textarea
                value={messageValue}
                name="message"
                id="message"
                className="form-control"
                ref={messageRef}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleMessageChange(e)}
              ></textarea>
              <span className="text-danger">{messageError}</span>
            </div>
            <button type="submit" className="btn btn-danger">
              送信する
            </button>
            <button type="button" className="btn btn-danger ms-1" onClick={clearValues}>
              クリア
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
