# Book Recommender

## Summary

スプレッドシートにまとめてある本リストから特定のものを選択して、incoming webhook で slack に通知します。
スクリプトの定期実行は、Apps Scripts のトリガーを使用しています。

## Tech

- TypeScript
- [gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter)
- [Spread Sheet for GAS](https://developers.google.com/apps-script/guides/sheets)
- slack: Incoming Webhooks
- 定期実行: GAS のトリガー

# off topic

ファイル間の import/export が難しいため 1 ファイルで記述しています
（webpack などでバンドルすることも試しましたが、変換後の JS が GAS で対応していないことがありました）

- 参考：[Google Apps Script のモダンな開発環境は理想だった](https://kenchan0130.github.io/post/2019-12-25-1)
