import {TeacherItem} from './TeacherItem'

export const TeachersList = ({teacher, filteredTeachers, handleDelete}) => {
  return (
    <div className="teachers">
    {filteredTeachers.map((teacher) => (
<TeacherItem key={teacher.id} teacher={teacher} handleDelete={handleDelete} />
))}
  </div>
)
}
