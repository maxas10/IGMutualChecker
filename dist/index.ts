interface Data {
  files: Array<Object>
}

// document.getElementById("list-files")!.addEventListener("click", () => {
//   chrome.identity.getAuthToken({ interactive: true }, (token) => {
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError);
//       return;
//     }

//     fetch("https://www.googleapis.com/drive/v3/files", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((response) => response.json())
//       .then((data:Data) => {
//         const output = document.getElementById("output")!
//         const files = data['files']

//           for(let i in files) {
//             const newText = document.createElement('p')
//             const file:any = files[i]
//             newText.innerHTML = file['name']
//             output.appendChild(newText)
//           }
//       })
//       .catch((error) => console.error(error));
//   });
// });

// document.getElementById("list-files")!.addEventListener("click", () => {
//   chrome.identity.getAuthToken({ interactive: true }, (token) => {
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError);
//       return;
//     }

//     fetch("https://www.googleapis.com/drive/v3/files", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((response) => response.json())
//       .then((data:Data) => {
//         const output = document.getElementById("output")!
//         const files = data['files']

//         //   for(let i in files) {
//         //     const newText = document.createElement('p')
//         //     const file:any = files[i]
//         //     newText.innerHTML = file
//         //     output.appendChild(newText)
//         //   }
//         console.log(files)
//       })
//       .catch((error) => console.error(error));
//   });
// })