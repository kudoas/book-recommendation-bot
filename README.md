# praise-bot

なかなか人に褒めてもらえない人へ、折角だったら可愛い人に褒めてもらいたい！
そんな自己承認欲求を満たすbotです。

## 仕様

1時間に本田翼さんが褒めてくれます。著作権の関係で画像は表示できませんのでご了承ください。

## 詳細

- TypeScript：ローカル環境でGoogle App Script (以下GAS)にコンパイルしてくれる[gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter)を使用しています。
- slackのbotはIncoming Webhoobotです。
- GASのトリガーで1時間に1回コードが読み込まれ、コメントします。
- 褒めフレーズは[Spread Sheet](https://docs.google.com/spreadsheets/d/10YAPVNZtbq8JVLtBX9VsAqmGXqfctZIyUjbcwRCHuXc/edit?usp=sharing)からランダムに呼び出しています。