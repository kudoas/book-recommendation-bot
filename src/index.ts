import { getDayFormat } from "./util";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

const getPhraseFromSpreadSheet = (): string => {
  const ss = SpreadsheetApp.openById(
    "10YAPVNZtbq8JVLtBX9VsAqmGXqfctZIyUjbcwRCHuXc"
  );
  const sheet = ss.getSheetByName("sheet1");
  const values = sheet
    .getRange("B:B")
    .getValues()
    .filter(String);

  const phraseArray = values.slice(1, values.length - 1);
  const phraseSelector = Math.floor(Math.random() * (values.length - 1)) + 1;
  const text = phraseArray[phraseSelector].toString();
  return text;
};

global.record = (): void => {
  const text = getPhraseFromSpreadSheet();
  const payload = {
    text: text
  };
  const options: any = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  const url =
    "https://hooks.slack.com/services/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";
  UrlFetchApp.fetch(url, options);
};