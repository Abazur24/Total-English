// Function to convert Base64 to Blob and generate an object URL
export const base64ToBlob = (base64String, mimeType='image/png') => {
  if (!base64String.startsWith("data:")) {
    // Add the MIME type to the base64 string if it's missing
    base64String = `data:${mimeType};base64,${base64String}`;
  }
  const arr = base64String.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  const n = bstr.length;
  const u8arr = new Uint8Array(n);

  for (let i = 0; i < n; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }
  const blob = new Blob([u8arr], { type: mime });
  return URL.createObjectURL(blob);
};
