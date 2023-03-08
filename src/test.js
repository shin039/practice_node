/** -------------------------------------------------------------------------- */
/** 多重組織組織図出力プログラム                                               */
/** -------------------------------------------------------------------------- */

// -------------------------
// ユーザー入力の管理クラス
// -------------------------
class ReadLine {
  /**  */
  constructor(prop){ this.prop = prop; }

  /** ユーザー入力を取得する */
  readUserInput(q_str){
    const readline = require('readline').createInterface({
      input : process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      readline.question(q_str, (answer) => {
        resolve(answer);
        readline.close();
      });
    });
  }

  /** */
  printProp(){ console.log(this.prop); } 
}

// -------------------------
// Main関数
// -------------------------
(async function main(){
  // ユーザー入力取得クラス
  const _rl = new ReadLine();
  let num_of_org   = await _rl.readUserInput("組織枚数>");
  let num_of_multi = await _rl.readUserInput("何重組織>");
  console.log(num_of_org + "枚組織, " + num_of_multi + "重組織");
})();
