import QRCode from "react-qr-code";
import CryptoJS from 'crypto-js';

function UrlGen() {
    const encryptString = (string, secretKey) => {
      return CryptoJS.AES.encrypt(string, secretKey).toString();
    };
    
    const secretKey = 'url';
    const originalString = 'https://www.xorostory.com';
    const encryptedString = encryptString(originalString, secretKey);
  
    const encodedString = encodeURIComponent(encryptedString);
    return (
      <>
        <QRCode value={`https://qrcode-taupe-chi.vercel.app/unMask/${encodedString}`} />
        <br></br>
        <br></br>
        <QRCode value={`https://qrcode-taupe-chi.vercel.app/A/${encodedString}`} />
      </>
    )
  }
  
  export default UrlGen