export default function getListStudentIds(students) {
    if (Array.isArray(students)) {
        const n = students.map(student => student.id);
        return n;
    }
    else {
        return [];
    }
}