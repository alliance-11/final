import { TeacherItem } from "./TeacherItem";

export const TeachersList = ({
  filteredTeachers,
}) => {
  return (
    <div className="teachers">
      {filteredTeachers.map((teacher) => (
        <TeacherItem
          key={teacher.id}
          teacher={teacher}
        />
      ))}
    </div>
  );
};
