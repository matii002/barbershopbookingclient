import styles from "../assets/styles/BookAppointment.module.css";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { useForm, Controller } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { Message } from "primereact/message";

function BookAppointment() {
  const queryClient = useQueryClient();

  const toast = useRef();

  const navigate = useNavigate();

  const getServices = [
    { id: 1, name: "Haircuts" },
    { id: 2, name: "Beard Trims" },
    { id: 3, name: "Shaves" },
    { id: 4, name: "Hair Coloring" },
  ];

  const getBarbers = [
    {
      id: 1,
      name: "John Smith",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Specializes in classic and modern men's haircuts. Always pays attention to the perfect finishing touches on every haircut and beard, helping each client look confident and stylish.",
    },
    {
      id: 2,
      name: "Adam Brown",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Passionate about creative cuts and trendy styles. Combines traditional barbering techniques with modern trends to create haircuts perfectly suited to each client's personality.",
    },
    {
      id: 3,
      name: "Michael Wilson",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Passionate about creative cuts and trendy styles. Combines traditional barbering techniques with modern trends to create haircuts perfectly suited to each client's personality.",
    },
    {
      id: 4,
      name: "James Taylor",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Passionate about creative cuts and trendy styles. Combines traditional barbering techniques with modern trends to create haircuts perfectly suited to each client's personality.",
    },
  ];

  const createBooking = (data) => {
    console.log(
      "Created new booking, service: " +
        data.serviceId +
        " barber: " +
        data.employeeId,
    );
  };

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: async () => {
      await Promise.all([
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["bookings"] }),
      ]);
      toast.current.show({
        severity: "success",
        summary: "Created booking",
        life: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    },
    onError: (error) => {
      toast.current.show({
        severity: "error",
        summary: "Could not create the booking.",
        sticky: true,
      });
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startTime: "",
      serviceId: null,
      employeeId: null,
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className={styles.BookAppointmentContainer}>
      <Toast ref={toast} />
      <form
        className={styles.BookAppointmentForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.BookAppointmentTitle}>Choose a service</h1>

        <fieldset className={styles.selectionGroup}>
          <legend>1. Choose a service</legend>
          <div className={styles.optionsGrid}>
            {getServices.map((service) => (
              <label className={styles.optionCard} key={service.id}>
                <Controller
                  name="serviceId"
                  control={control}
                  rules={{ required: "Choose a service." }}
                  render={({ field }) => (
                    <RadioButton
                      value={service.id}
                      checked={field.value === service.id}
                      onChange={(event) => field.onChange(event.value)}
                    />
                  )}
                />
                <span>{service.name}</span>
              </label>
            ))}
            {errors.serviceId && <Message text={errors.serviceId.message} />}
          </div>
        </fieldset>

        <fieldset className={styles.selectionGroup}>
          <legend>2. Choose a barber</legend>
          <div className={styles.optionsGrid}>
            {getBarbers.map((barber) => (
              <label className={styles.optionCard} key={barber.id}>
                <Controller
                  name="employeeId"
                  control={control}
                  rules={{ required: "Choose a barber." }}
                  render={({ field }) => (
                    <RadioButton
                      value={barber.id}
                      checked={field.value === barber.id}
                      onChange={(event) => field.onChange(event.value)}
                    />
                  )}
                />
                <span>{barber.name}</span>
                <img
                  className={styles.barberImage}
                  src={barber.img}
                  alt={barber.name}
                />
              </label>
            ))}
            {errors.employeeId && <Message text={errors.employeeId.message} />}
          </div>
        </fieldset>

        <Button
          label="Confirm choices"
          className={styles.submitButton}
          type="submit"
        />
      </form>
    </div>
  );
}
export default BookAppointment;
