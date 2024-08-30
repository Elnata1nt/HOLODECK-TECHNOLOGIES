// src/components/QRCodePopup.jsx
import React, { useState } from 'react';
import QRCode from 'qrcode';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa';

const QRCodePopup = () => {
  const [showQRCode, setShowQRCode] = useState(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

  const handleQRCodeClick = (event, url) => {
    event.preventDefault();
    setShowQRCode(url);
    QRCode.toDataURL(url, { width: 256 }, (err, url) => {
      if (err) console.error(err);
      setQrCodeDataUrl(url);
    });
  };

  const handleCloseQRCode = () => {
    setShowQRCode(null);
    setQrCodeDataUrl('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Entre na Holodeck</h2>
      <div className="flex space-x-4">
        <button
          onClick={(event) =>
            handleQRCodeClick(event, "https://chat.whatsapp.com/Ew4dOwAS4CJ01xdSaUxAwv")
          }
          className="relative overflow-hidden flex items-center space-2 px-4 py-2 bg-[#221655] text-white font-bold rounded group"
          aria-label="WhatsApp"
        >
          <span className="absolute inset-0 bg-[#a9e916] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <FaWhatsapp className="text-2xl relative z-10" />
          <span className="relative z-10">WhatsApp</span>
        </button>
        <button
          onClick={(event) =>
            handleQRCodeClick(event, "https://discord.gg/YTbTfmfs")
          }
          className="relative overflow-hidden flex items-center space-2 px-4 py-2 bg-[#221655] text-white font-bold rounded group"
          aria-label="Discord"
        >
          <span className="absolute inset-0 bg-[#a9e916] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          <FaDiscord className="text-3xl relative z-10" />
          <span className="relative z-10">Discord</span>
        </button>
      </div>

      {showQRCode && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center opacity-100">
            <h3 className="text-lg font-semibold mb-4">Escaneie o QR Code</h3>
            <img src={qrCodeDataUrl} alt="QR Code" />
            <button
              onClick={handleCloseQRCode}
              className="mt-4 px-4 py-2 bg-[#3c297a] hover:bg-[#a9e916] text-white hover:text-slate-900 font-bold rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodePopup;
