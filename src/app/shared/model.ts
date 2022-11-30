export interface Teacher {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface Course {
  $key: string;
  courseTitle: string;
  description: string;
  creator: string;
  noOfStudents: string
  range: Number;
  studentsEnrolled: Array<string>;
}

export interface Role {
  role?: string;
  //teacher?: boolean;
  //admin?: boolean;
}



