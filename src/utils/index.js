// Browser LocalStorage
const LocalstorageKey = "realslutsofbattle";
const autosave = "real-sluts-of-battle/current-autosave";

if (window.__TAURI__) {
  window.__TAURI__.fs.createDir("real-sluts-of-battle", {
    dir: 7,
  });
}
export const GetFromStorage = () => {
  if (!window.__TAURI__) {
    const Data = localStorage.getItem(LocalstorageKey);
    try {
      return JSON.parse(Data);
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
};
export const GetFileAsync = async () => {
  return new Promise((resolve) => {
    window.__TAURI__.fs
      .readTextFile(autosave, {
        dir: 7,
      })
      .then((result) => resolve(JSON.parse(result)));
  });
};

export const StoreObj = (Data) => {
  if (window.__TAURI__) {
    const contents = JSON.stringify(Data);
    window.__TAURI__.fs
      .writeFile(
        {
          path: "real-sluts-of-battle/autosave-" + Data.name,
          contents,
        },
        {
          dir: 7,
        }
      )
      .catch(() => {
        window.__TAURI__.fs.removeFile(
          "real-sluts-of-battle/autosave-" + Data.name,
          {
            dir: 7,
          }
        );
        window.__TAURI__.fs.writeFile(
          {
            path: "real-sluts-of-battle/autosave-" + Data.name,
            contents,
          },
          {
            dir: 7,
          }
        );
      });
    window.__TAURI__.fs.writeFile(
      {
        path: autosave,
        contents,
      },
      {
        dir: 7,
      }
    );
  } else {
    localStorage.setItem(LocalstorageKey, JSON.stringify(Data));
  }
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
      `${name}.realslutsofbattle.json`,
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
