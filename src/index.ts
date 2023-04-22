import { getDayFormat } from "./util";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

const getPhraseFromSpreadSheet = (): string | any => {
  const ss = SpreadsheetApp.openById(
    "10YAPVNZtbq8JVLtBX9VsAqmGXqfctZIyUjbcwRCHuXc"
  );
  const sheet = ss.getSheetByName("sheet1");
  const values = sheet.getDataRange().getValues();

  const phraseArray = values.slice(1, values.length);
  const phraseSelector = Math.floor(Math.random() * phraseArray.length);
  const text = phraseArray[phraseSelector];
  return text;
};

const getBookFromSpreadSheet = (): string[] => {
  const ss = SpreadsheetApp.openById(
    "10YAPVNZtbq8JVLtBX9VsAqmGXqfctZIyUjbcwRCHuXc"
  );
  const sheet = ss.getSheetByName("sheet2");
  const values = sheet.getDataRange().getValues();
  const books = values.slice(1, values.length);
  const bookSelector = Math.floor(Math.random() * books.length);
  const book = books[bookSelector];
  return book;
};

global.record = (): void => {
  const phrase = getPhraseFromSpreadSheet();
  const book = getBookFromSpreadSheet();
  const text =
    "今週のおすすめ本は「" +
    book[0] +
    "」です！" +
    "\n" +
    "著者: " +
    book[1] +
    "\n" +
    "ポイント: " +
    book[2] +
    "\n\n" +
    phrase;
  const payload = {
    text: text,
  };
  const options: any = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };
  const url =
    "https://hooks.slack.com/services/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";
  UrlFetchApp.fetch(url, options);
};
