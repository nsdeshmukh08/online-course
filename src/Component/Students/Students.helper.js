export const getStudents = async () => {
    const students = await fetch('http://my-json-server.typicode.com/shripad-agashe/fake-api/students');
    const studentsData = await students.json();

    return {
        students: studentsData
    }
}