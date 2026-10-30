import styles from "@/assets/styles/Contact.module.css";

function Contact() {
  const contactItems = [
    {
      icon: <i className="pi pi-phone" />,
      label: "+48 123 123 123",
      href: "tel:+48123123123",
    },
    {
      icon: <i className="pi pi-envelope" />,
      label: "menthingsbarbershop@gmail.com",
      href: "mailto:menthingsbarbershop@gmail.com",
    },
    {
      icon: <i className="pi pi-instagram" />,
      label: "menthingsbarbershop",
      href: "https://www.instagram.com",
    },
    {
      icon: <i className="pi pi-facebook" />,
      label: "menthingsbarbershop",
      href: "https://www.facebook.com",
    },
  ];
  return (
    <div className={styles.contact}>
      <h1 className={styles.header}>CONTACT</h1>
      <div className={styles.contactContainer}>
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className={styles.contactElement}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
export default Contact;
