import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import EditButton from "@/components/button/EditButton";
import DeleteButton from "@/components/button/DeleteButton";
import styles from "@/assets/styles/AppointmentManager.module.css";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { getBookings } from "@/api/booking";
import { useQuery } from "@tanstack/react-query";
import { formatDateTime } from "@/utils";

function AppointmentManagement() {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);
  const [popupTarget, setPopupTarget] = useState(null);

  const bookings = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookings(),
    staleTime: 120000,
  });

  const handleDelete = (appointmentId) => {
    // Handle delete logic here
    console.log("Delete appointment with ID:", appointmentId);
  };

  const accept = () => {
    // Handle accept logic here
    console.log("Accepted");
    handleDelete(appointmentId);
    setVisible(false);
  };

  const reject = () => {
    setVisible(false);
  };

  const statusClassNames = {
    WAITING: styles.statusWaiting,
    ACCEPTED: styles.statusAccepted,
    REJECTED: styles.statusRejected,
    FINISHED: styles.statusFinished,
  };

  const statusBody = (booking) => {
    const status = booking.status.toUpperCase();

    return (
      <span
        className={`${styles.status} ${statusClassNames[status] ?? styles.statusDefault}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div>
      <Toast ref={toast} />
      <ConfirmPopup
        target={popupTarget}
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to delete it?"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
      <DataTable
        value={bookings?.data?.content}
        tableStyle={{ minWidth: "50rem" }}
        dataKey="id"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
      >
        <Column
          field="startTime"
          header="Start time"
          body={(booking) => formatDateTime(booking.startTime)}
        ></Column>
        <Column field="status" header="Status" body={statusBody}></Column>
        <Column field="clientName" header="Client name"></Column>
        <Column field="employeeName" header="Employee name"></Column>
        <Column field="serviceName" header="Service"></Column>
        <Column field="price" header="Price"></Column>
        <Column
          header="Options"
          body={(appointment) => (
            <div className={styles.buttonContainer}>
              <EditButton />
              <DeleteButton
                onClick={(event) => {
                  setVisible(true);
                  setAppointmentId(appointment.id);
                  setPopupTarget(event.currentTarget);
                }}
              />
            </div>
          )}
        ></Column>
      </DataTable>
    </div>
  );
}
export default AppointmentManagement;
