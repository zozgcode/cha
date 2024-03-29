import React from "react";
import style from "./style.module.scss";
import { SmithBrownTxData } from "./tXdata";

export default function SmithBrown() {
  return (
    <div className={style.transaction_history}>
      <div className={style.in_transaction_history}>
        <div className={style.title}>Last Transaction</div>
        {SmithBrownTxData.map((aTxData, i) => (
          <div className={`${style.t_box} ${i === 0 ? style.firstContainer : ''}`} key={i}>
            <div className={style.s_box}>
              <div className={`${style.top} ${style.top_t}`}>{aTxData.txName}</div>
              <div className={style.bottom}>{aTxData.whatUsed}</div>
            </div>
            <div className={`${style.s_box} ${style.s_box_r}`}>
              <div className={style.top} style={{ color: aTxData.color }}>{aTxData.debit}</div>
              <div className={style.bottom}>{aTxData.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
