import { Item } from "./Item";

export const List = ({ filteredStudents }) => {
  return (
    <div className="students">
      {filteredStudents.map((student) => (
        <Item key={student._id} student={student} />
      ))}
    </div>
  );
};
