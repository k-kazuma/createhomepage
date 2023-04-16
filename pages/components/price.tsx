import React from 'react';

import style from 'styles/components/price.module.scss';

function Price() {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <td className={style.non}></td>
          <th scope="col">内容</th>
          <th scope="col">価格</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>ホームページ・コーポーレートサイト制作</th>
          <td data-label="内容" className={style.txt}>
            ホームページやコーポレートサイトなどの制作費用です。
          </td>
          <td data-label="価格" className={style.price}>
            ¥50,000〜
          </td>
        </tr>
        <tr>
          <th>ランディングページ制作</th>
          <td data-label="内容" className={style.txt}>
            ランディングページの制作費用です。
          </td>
          <td data-label="価格" className={style.price}>
            ¥20,000〜
          </td>
        </tr>
        <tr>
          <th>デプロイ</th>
          <td data-label="内容" className={style.txt}>
            制作したサイトをブラウザ上で動くようにサーバーへアップロード時の費用です。
          </td>
          <td data-label="価格" className={style.price}>
            ¥10,000〜
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Price;
