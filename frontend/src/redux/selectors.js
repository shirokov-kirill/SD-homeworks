
//Student

export const studentAttempts = state => state.student.attempts
export const studentTasks = state => state.student.tasks
export const gotStudentAttempts = state => state.student.gotAttempts
export const gotStudentTasks = state => state.student.gotTasks

//Teacher

export const teacherHomeworks = state => state.teacher.studentAttempts
export const teacherTasks = state => state.teacher.tasks
export const gotTeacherHomeworks = state => state.teacher.gotStudentAttempts
export const gotTeacherTasks = state => state.teacher.gotTasks
