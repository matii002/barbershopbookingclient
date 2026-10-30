import { Image } from "primereact/image";
import styles from "@/assets/styles/Team.module.css";

function Team() {
  const employees = [
    {
      id: 1,
      name: "John Smith",
      role: "Barber",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Specializes in classic and modern men's haircuts. Always pays attention to the perfect finishing touches on every haircut and beard, helping each client look confident and stylish.",
    },
    {
      id: 2,
      name: "Adam Brown",
      role: "Barber",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Passionate about creative cuts and trendy styles. Combines traditional barbering techniques with modern trends to create haircuts perfectly suited to each client's personality.",
    },
    {
      id: 3,
      name: "Michael Wilson",
      role: "Barber",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Passionate about creative cuts and trendy styles. Combines traditional barbering techniques with modern trends to create haircuts perfectly suited to each client's personality.",
    },
    {
      id: 4,
      name: "James Taylor",
      role: "Barber",
      img: "https://tse1.explicit.bing.net/th/id/OIP.mDzsfikoyDMd_vVWuXgXzAHaEc?w=1650&h=990&rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Passionate about creative cuts and trendy styles. Combines traditional barbering techniques with modern trends to create haircuts perfectly suited to each client's personality.",
    },
  ];
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.header}> MEET OUR TEAM</h1>
      <div className={styles.teamGrid}>
        {employees.map((employee) => (
          <div key={employee.id} className={styles.employeeDescription}>
            <Image
              src={employee.img}
              alt={employee.name}
              imageClassName={styles.image}
            />
            <div className={styles.employeeText}>
              <h2>{employee.name}</h2>
              <h4>{employee.role}</h4>
              <p>{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
