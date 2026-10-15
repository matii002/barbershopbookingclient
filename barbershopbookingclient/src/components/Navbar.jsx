import { Menubar } from "primereact/menubar";
import { Link } from "react-router";
import styles from "../assets/styles/Navbar.module.css";
import logoImage from "../assets/images/menthingsbarbershop.png";

function Navbar() {
  const logo = (
    <Link to="/">
      <img
        src={logoImage}
        alt="Menthings Barbershop"
        className={styles.logo}
      />
    </Link>
  );
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      template: (item, options) => (
        <Link to="/" className={options.className} onClick={options.onClick}>
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </Link>
      ),
    },
    {
      label: "Book appointment",
      icon: "pi pi-fw pi-calendar",
      template: (item, options) => (
        <Link
          to="/book-appointment"
          className={options.className}
          onClick={options.onClick}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </Link>
      ),
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
      template: (item, options) => (
        <Link
          to="/contact"
          className={options.className}
          onClick={options.onClick}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </Link>
      ),
    },
    {
      label: "login",
      icon: "pi pi-fw pi-user",
      template: (item, options) => (
        <Link
          to="/login"
          className={options.className}
          onClick={options.onClick}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </Link>
      ),
    },
  ];
  return (
    <div className={styles.navbarContainer}>
      {logo}
      <Menubar model={items} className={styles.navbar} />
    </div>
  );
}
export default Navbar;
