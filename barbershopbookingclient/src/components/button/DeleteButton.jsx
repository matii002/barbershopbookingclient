import { Button } from "primereact/button";
import styles from "@/assets/styles/buttons/DeleteButton.module.css";

function DeleteButton({ onClick, ref }) {
  return (
    <Button
      label="Delete"
      icon="pi pi-trash"
      onClick={onClick}
      ref={ref}
      className={styles.deleteButton}
    />
  );
}
export default DeleteButton;
