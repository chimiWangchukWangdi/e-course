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
  noOfStudents: string
  range: Number;
}


