import { Component } from '@angular/core';

@Component({
  selector: 'app-find-buddy',
  templateUrl: './find-buddy.component.html',
  styleUrls: ['./find-buddy.component.css']
})
export class FindBuddyComponent {
  // Sample list of students
  students = [
    { name: 'Alice Johnson', subject: 'Mathematics' },
    { name: 'Bob Smith', subject: 'Physics' },
    { name: 'Charlie Brown', subject: 'Chemistry' },
    { name: 'Diana Prince', subject: 'Biology' },
    { name: 'Ethan Hunt', subject: 'Computer Science' }
  ];

  // Method to handle the "Make as Friend" button click
  makeFriend(student: any) {
    alert(`You have made a friend request to ${student.name}!`);
  }
}