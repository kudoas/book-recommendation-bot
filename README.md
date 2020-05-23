# Book Remecommendtion Bot

積読している本はありませんか？私は大量にあります。この問題を解決するために、本をレコメンドしてくれるbotを作りました。しかしながらbotが本を勧めてくれるだけではモチベーションが上がらないので、本田翼さんの力をお借りしました。

## 仕様

毎週土曜日の9時から10時、本田翼さんに本を１つ選んでレコメンドして頂けます。ついでに激励の一言も頂けます。
著作権の関係で画像は表示できませんのでご了承ください。

## 詳細

- TypeScript：ローカル環境でGoogle App Script (以下GAS)にコンパイルしてくれる[gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter)を使用しています。
- slackのbotはIncoming Webhooks botです。
- GASのトリガーで週1回コードが読み込まれるように設定しています。
- 褒めフレーズと本のレコメンドは[Spread Sheet](https://docs.google.com/spreadsheets/d/10YAPVNZtbq8JVLtBX9VsAqmGXqfctZIyUjbcwRCHuXc/edit?usp=sharing)からランダムに呼び出しています。