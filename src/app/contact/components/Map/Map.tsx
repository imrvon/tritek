import styles from "./Map.module.css";
import Image from "next/image";
import building from "../../assets/map-image.jpg";

function Card() {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={building}
          width={400}
          height={500}
          alt="location Building"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.layer}>
          <h4>location</h4>
          <p>60 East 65th Street, New York</p>
        </div>
        <div className={styles.layer}>
          <h4>phone</h4>
          <p>1-800-700-600</p>
        </div>
        <div className={styles.layer}>
          <h4>email</h4>
          <p>info@bold-themes.com</p>
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className={styles.location}>
      <Card />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.712210060604!2d3.3822084410316484!3d6.462223572081718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b749d13f17d%3A0x93de0b9a6baeb722!2sGate%20To%20Gate!5e0!3m2!1sen!2sng!4v1734099824035!5m2!1sen!2sng"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
