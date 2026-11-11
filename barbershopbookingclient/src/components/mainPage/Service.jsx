import { Link } from "react-router";
import styles from "@/assets/styles/Service.module.css";

function Service() {
  return (
    <div className={styles.serviceContainer}>
      <h1 className={styles.serviceTitle}>Men Things BarberShop</h1>
      <p className={styles.serviceDescription}>Welcome to our barbershop!</p>
      <p className={styles.serviceDescription}>
        We offer a variety of services to help you look and feel your best.
      </p>
      <ul className={styles.serviceList}>
        <li>Haircuts</li>
        <li>Beard Trims</li>
        <li>Shaves</li>
        <li>Hair Coloring</li>
      </ul>
      <p className={styles.serviceDescription}>
        Our experienced barbers are here to provide you with the best service
        possible.
      </p>
      <p className={styles.serviceDescription}>
        Book an appointment today and experience the difference!
      </p>
      <Link to="/book-appointment" className={styles.serviceButton}>
        Book Now
      </Link>
    </div>
  );
}
export default Service;
