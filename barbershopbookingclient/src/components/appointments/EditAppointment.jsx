import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { AutoComplete } from "primereact/autocomplete";
import styles from "@/assets/styles/EditAppointment.module.css";
import { getStatuses } from "@/api/status";
import { getAllBarberServices } from "@/api/barberService";
import { get4MatchedEmployee } from "@/api/employee";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking, getBookingById } from "@/api/booking";
import { useNavigate, useParams } from "react-router";
import { ProgressSpinner } from "primereact/progressspinner";
import { Controller, useForm } from "react-hook-form";
import { toLocalDataTime } from "@/utils";
import StatusTemplate from "@/components/StatusTemplate.jsx";
import { Message } from "primereact/message";

function EditAppointment() {
  const [employeeSuggestions, setEmployeeSuggestions] = useState([]);
  const statusTeplate = (status) => <StatusTemplate status={status} />;
  const { bookingId } = useParams();
  const toast = useRef(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const booking = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBookingById(bookingId),
    enabled: Boolean(bookingId),
  });

  const statuses = useQuery({
    queryKey: ["statuses"],
    queryFn: getStatuses,
    staleTime: 120000,
  });

  const employees = async ({ query }) => {
    try {
      const parts = query.trim(" ").split(/\s+/);

      const firstName = parts[0] ?? "";
      const lastName = parts.slice(1).join("-");

      const employees = await get4MatchedEmployee(firstName, lastName);
      setEmployeeSuggestions(
        employees.map((employee) => ({
          ...employee,
          label: `${employee.firstName} ${employee.lastName}`,
        })),
      );
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: error instanceof Error ? error.message : "Server error",
        life: 3000,
      });
    }
  };

  const services = useQuery({
    queryKey: ["services"],
    queryFn: getAllBarberServices,
    staleTime: 120000,
  });

  const mutation = useMutation({
    mutationFn: (data) => updateBooking(data),
    onSuccess: async (message) => {
      await queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.current.show({
        severity: "success",
        summary: message,
        life: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    },
    onError: (error) => {
      toast.current.show({
        severity: "error",
        summary: error.message || "Internal server error.",
        sticky: true,
      });
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: booking.data
      ? {
          startTime: new Date(booking.data.startTime),
          status: booking.data.status,
          serviceId: booking.data.serviceId,
          employee: {
            id: booking.data.employeeId,
            label: booking.data.employeeName,
          },
        }
      : undefined,
  });

  const onSubmit = (data) => {
    mutation.mutate({
      id: Number(bookingId),
      startTime: toLocalDataTime(data.startTime),
      status: data.status,
      employeeId: Number(data?.employee?.id),
      serviceId: Number(data?.serviceId),
      clientId: Number(1),
    });
  };

  return booking.isLoading ? (
    <ProgressSpinner />
  ) : (
    <section className={styles.panel}>
      <Toast ref={toast} />
      <h2 className={styles.title}>Edit Appointment</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="startTime"
          rules={{ required: "Choose an appointment date and time." }}
          render={({ field: { onChange, value } }) => (
            <Calendar
              className={styles.field}
              value={value}
              onChange={onChange}
              showTime
              hourFormat="24"
            />
          )}
        />
        {errors.startTime && <Message text={errors.startTime.message} />}

        <Controller
          control={control}
          name="status"
          rules={{ required: "Choose a status." }}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              options={statuses.data || []}
              value={value}
              onChange={onChange}
              itemTemplate={statusTeplate}
              valueTemplate={statusTeplate}
              className={styles.field}
            />
          )}
        />
        {errors.status && <Message text={errors.status.message} />}

        <Controller
          control={control}
          name="serviceId"
          rules={{ required: "Choose a service." }}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              options={services.data || []}
              optionLabel="name"
              optionValue="id"
              value={value}
              onChange={onChange}
              className={styles.field}
            />
          )}
        />
        {errors.serviceId && <Message text={errors.serviceId.message} />}

        <Controller
          control={control}
          name="employee"
          rules={{ required: "Choose a barber." }}
          render={({ field: { onChange, value } }) => (
            <AutoComplete
              value={value}
              suggestions={employeeSuggestions}
              completeMethod={employees}
              onChange={onChange}
              showEmptyMessage
              emptyMessage="Employee not found."
              minLength="4"
              field="label"
              className={styles.field}
            />
          )}
        />
        {errors.employee && <Message text={errors.employee.message} />}

        <Button
          label="Save"
          icon="pi pi-check"
          type="submit"
          className={styles.saveButton}
        />
      </form>
    </section>
  );
}
export default EditAppointment;
