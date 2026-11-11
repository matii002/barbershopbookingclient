import { Button } from "primereact/button";
import styles from "@/assets/styles/buttons/EditButton.module.css";

function EditButton({ onClick }) {
  return (
    <Button
      label="Edit"
      icon="pi pi-pencil"
      onClick={onClick}
      className={styles.editButton}
    />
  );
}
export default EditButton;
