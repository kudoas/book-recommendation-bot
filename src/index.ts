const spreadSheet = SpreadsheetApp.openById(
  "10YAPVNZtbq8JVLtBX9VsAqmGXqfctZIyUjbcwRCHuXc"
);

const getPhraseFromSpreadSheet = (): string | any => {
  const sheet1 = spreadSheet.getSheetByName("sheet1");
  const values = sheet1.getDataRange().getValues();

  const phraseArray = values.slice(1, values.length);
  const phraseSelector = Math.floor(Math.random() * phraseArray.length);
  const text = phraseArray[phraseSelector];
  return text;
};

const getBookFromSpreadSheet = (): string[] => {
  const sheet2 = spreadSheet.getSheetByName("sheet2");
  const values = sheet2.getDataRange().getValues();
  const books = values.slice(1, values.length);
  const bookSelector = Math.floor(Math.random() * books.length);
  const book = books[bookSelector];
  return book;
};

// `function` keyword is required for Google Apps Script
function main() {
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
  const options: {
    method: "get" | "post";
    contentType: string;
    payload: string;
  } = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };
  const url = "https://hooks.slack.com/services/xxxxxxxxx";
  UrlFetchApp.fetch(url, options);
}
