import Link from "next/link";


interface Props {
    nameValue: string;
    mailValue: string;
    phonValue: string;
    messageValue: string;
}

export default function confirm (props: Props) {


    return (
        <>
            <div className="position-absolute d-block top-0 w-100">
                <h2>完了画面</h2>
                <p className="mb-0">お問い合わせありがとう御座います。</p>
                <p className="mt-0">問い合わせ完了メールを送信しましたのでご確認ください。</p>
                <div>
                    <p>【お名前】</p>
                    <p>　{props.nameValue}</p>
                    <p>【メールアドレス】</p>
                    <p></p>
                    <p>【電話番号】</p>
                    <p></p>
                    <p>【問い合わせ内容】</p>
                    <p></p>
                </div>
                <Link href="/">
                    <button type="submit">TOPへ戻る</button>
                </Link>
            </div>
        </>
    )
}