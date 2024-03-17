const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  
  return true;
};

export default copyToClipboard;