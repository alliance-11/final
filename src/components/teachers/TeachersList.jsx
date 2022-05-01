import { TeacherItem } from "./TeacherItem";

export const TeachersList = ({
  teacher,
  filteredTeachers,
  handleDelete,
  editTeacher,
}) => {
  return (
    <div className="teachers">
      {filteredTeachers.map((teacher) => (
        <TeacherItem
          key={teacher.id}
          teacher={teacher}
          handleDelete={handleDelete}
          editTeacher={editTeacher}
        />
      ))}
    </div>
  );
};
