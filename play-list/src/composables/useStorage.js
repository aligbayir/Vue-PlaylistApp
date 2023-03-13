import { ref } from 'vue';
import { projectStorage } from '../firebase/config';
import getUser from './getUser';

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.id}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try {
      const res = await storageRef.put(file);
      url.value = await getCoverUrl(filePath.value); // Call the getCoverUrl method
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  const getCoverUrl = async (filePath) => {
    const storageRef = projectStorage.ref(filePath);
    try {
      const downloadURL = await storageRef.getDownloadURL();
      return downloadURL;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { url, filePath, error, uploadImage ,getCoverUrl};
};

export default useStorage;

