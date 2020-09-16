// Browser LocalStorage
const LocalstorageKey = "slutsofbattle";
const useLocalStorage = window.__TAURI__
  ? window.tauriLocalStorage
  : window.localStorage;

// console.log(">>>>>>>>>>>>>>> window.__TAURI__",  Object.keys( window.__TAURI__.window));
// console.log(">>>>>>>>>>>>>>> window", Object.keys( window));

export const GetFromStorage = () => {
  const Data = useLocalStorage.getItem(LocalstorageKey);
  try {
    return JSON.parse(Data);
  } catch (e) {
    return false;
  }
};

export const StoreObj = (Data) => {
  useLocalStorage.setItem(LocalstorageKey, JSON.stringify(Data));
};

export const createObjFromUpload = (importElementID, onFileLoad) => {
  var files = document.getElementById(importElementID).files;
  if (files.length <= 0) {
    return false;
  }
  console.warn("imported a character:", files);

  var fr = new FileReader();

  fr.onload = function (e) {
    var result = JSON.parse(e.target.result);
    onFileLoad(result);
  };

  fr.readAsText(files.item(0));
};

export const createFileFromObj = (dataObj, name) => {
  if (window.__TAURI__) {
    window.__TAURI__.dialog.save().then(
      (result) => {
        window.__TAURI__.fs.writeFile(
          {
            path: result,
            contents: JSON.stringify(dataObj),
          },
          {}
        );
      },
      (error) => {}
    );
  } else {
    createFile(
      JSON.stringify(dataObj),
      `${name}.slutsofbattle.json`,
      "application/json"
    );
  }
};

export function createFile(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
