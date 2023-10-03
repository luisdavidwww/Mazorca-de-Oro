// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import { v4 } from 'uuid';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjE_aO8xUITJIwIGk8pHNX2L3bdU4EGZA",
  authDomain: "csgupload-c055e.firebaseapp.com",
  projectId: "csgupload-c055e",
  storageBucket: "csgupload-c055e.appspot.com",
  messagingSenderId: "400912262263",
  appId: "1:400912262263:web:537e1c1194d7df7cfb5272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

//metodo para subir
export function uploadFile(file, setEstadoCarga ) {
    const storageRef = ref(storage, v4() );

    // Tiempo de inicio de la carga
    const startTime = performance.now();

    const endTime = performance.now(); // Tiempo de finalización de la carga
    const duration = endTime - startTime; // Duración de la carga en milisegundos
    
    /*uploadBytes(storageRef, file).then((snapshot) => {
        console.log(snapshot);
      });*/


      uploadBytes(storageRef, file)
      .then((snapshot) => {
        const endTime = performance.now(); // Tiempo de finalización de la carga
        const duration = endTime - startTime; // Duración de la carga en milisegundos
        console.log(snapshot);
        console.log(`Archivo subido en ${duration} milisegundos`);
        console.log("Cargado con éxito");
        setEstadoCarga("exitoso"); // Indicar que la carga fue exitosa
      })
      .catch((error) => {
        console.error("Error al cargar el archivo:", error);
        setEstadoCarga("error"); // Indicar que ocurrió un error en la carga
      });
}


//metodo para subir
export async function uploadFileNew(file) {
  const storageRef = ref(storage, v4() );
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}


export async function uploadFileWithProgress(file, onProgressCallback) {

  const uniqueFileName = v4();
  const storageRef = ref(storage, uniqueFileName);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      const formattedProgress = parseFloat(progress.toFixed(2)); // Redondea a 2 decimales
      if (onProgressCallback) {
        onProgressCallback(formattedProgress);
      }
    },
    (error) => {
      console.error('Error al cargar el archivo:', error);
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      // La carga se ha completado con éxito, puedes hacer algo aquí si es necesario
    }
  );

  await uploadTask;
  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

  return downloadURL;
}




