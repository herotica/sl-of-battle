export const ReceiverNameReplace = /xxxx/g;
export const ReceiverHisHer = new RegExp("====","g");
export const fuckerReplacer = /\+\+\+\+/g;
export const fuckerHisHer = new RegExp("####","g");

export const replacer = (fucker, receiver, text) => {
  const newText = text
    .replace(ReceiverNameReplace, receiver.name)
    .replace(ReceiverHisHer, receiver.isWoman ? "her" : "his")
    .replace(fuckerReplacer, fucker.name)
    .replace(fuckerHisHer, fucker.isWoman ? "her" : "his");

  return newText;
};
