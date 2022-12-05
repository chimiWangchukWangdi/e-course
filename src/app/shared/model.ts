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
  studentsRequest: Array<string>;
  studentsEnrolled: Array<string>;
}

export interface Role {
  role?: string;
  //teacher?: boolean;
  //admin?: boolean;
}



