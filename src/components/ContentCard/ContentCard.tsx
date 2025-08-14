import qrCode from '../../assets/image-qr-code.png';
import './ContentCard.css';

function ContentCard() {
  return (
    <div className="content-card">
      <img src={qrCode} alt="QR code" className="qr-code" />
      <div className="body-content">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the Qr code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default ContentCard;
