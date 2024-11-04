import QRCode from "react-qr-code";
import CryptoJS from 'crypto-js';

function UrlGen() {
    const encryptString = (string, secretKey) => {
      return CryptoJS.AES.encrypt(string, secretKey).toString();
    };
    
    const secretKey = 'url';
    const originalString = 'https://www.xorostory.com';
    const encryptedString = encryptString(originalString, secretKey);
    
    const encryptedString2 = encryptString('1234', secretKey);
  
    const encodedString = encodeURIComponent(encryptedString);
    const encodedString2 = encodeURIComponent(encryptedString2);
    return (
      <>
        <QRCode value={`https://qrcode-taupe-chi.vercel.app/unMask/${encodedString}`} />
        <br></br>
        <br></br>
        <QRCode value={`https://qrcode-taupe-chi.vercel.app/A/${encodedString2}`} />
      </>
    )
  }
  
  export default UrlGen