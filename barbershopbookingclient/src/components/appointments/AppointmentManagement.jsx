import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import EditButton from "@/components/button/EditButton";
import DeleteButton from "@/components/button/DeleteButton";
import styles from "@/assets/styles/AppointmentManager.module.css";
import { ConfirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

function AppointmentManagement() {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);
  const [popupTarget, setPopupTarget] = useState(null);

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
    // Handle reject logic here
    console.log("Rejected");
    setVisible(false);
  };

  const appointments = [
    {
      id: 1,
      startTime: "09:00 12/12/2026",
      status: "Confirmed",
      clientName: "John Doe",
      employeeName: "John Smith",
      serviceName: "Haircut",
      price: 20,
    },
    {
      id: 2,
      startTime: "10:00 12/12/2026",
      status: "Confirmed",
      clientName: "Jane Smith",
      employeeName: "Jane Doe",
      serviceName: "Shave",
      price: 15,
    },
    {
      id: 3,
      startTime: "11:00 12/12/2026",
      status: "Pending",
      clientName: "Mike Johnson",
      employeeName: "Mike Wilson",
      serviceName: "Haircut",
      price: 20,
    },
    {
      id: 4,
      startTime: "12:00 12/12/2026",
      status: "Confirmed",
      clientName: "Emily Davis",
      employeeName: "Emily Brown",
      serviceName: "Shave",
      price: 15,
    },
  ];
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
        value={appointments}
        tableStyle={{ minWidth: "50rem" }}
        dataKey="id"
      >
        <Column field="startTime" header="Start time"></Column>
        <Column field="status" header="Status"></Column>
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
