export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    if (file.size > 3 * 1024 * 1024) {
      alert('File size must be less than 3MB');
    } else {
      reader.readAsDataURL(file);
    }
  });
};
