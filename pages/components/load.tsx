import React, { useEffect, useRef } from 'react';

import style from 'styles/components/load.module.scss';

type Props = { load: Boolean };

function Load({ load }: Props) {
  return (
    <>
      <div className={`${style.loadContainer} ${load && style.load}`}>
        <div className={`${style.loadBox} bg-secondary`}></div>
        <div className={`${style.text}`}>now loading...</div>
      </div>
    </>
  );
}

export default Load;
