import styles from "@/assets/styles/StatusTemplate.module.css";

export default function statusTemplate({ status }) {
  if (!status) return null;

  const label = status.toUpperCase();

  const statusClassNames = {
    WAITING: styles.statusWaiting,
    ACCEPTED: styles.statusAccepted,
    CANCELED: styles.statusCANCELED,
    FINISHED: styles.statusFinished,
  };

  return (
    <span
      className={`${styles.status} ${statusClassNames[label] ?? styles.statusDefault}`}
    >
      {label}
    </span>
  );
}
