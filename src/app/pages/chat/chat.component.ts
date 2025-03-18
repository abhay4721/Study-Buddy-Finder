import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true, // Make it a standalone component
  imports: [CommonModule, FormsModule], // Import required modules
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  conversations = [
    {
      name: 'Akil',
      avatar: 'https://i.pravatar.cc/150?img=1',
      description: 'Passionate about algorithms and data structures.',
      subjects: ['Computer Science', 'Mathematics'],
      lastMessage: 'Excited to discuss sorting algorithms!',
      time: '2h ago',
      messages: [
        { sender: 'Akil', text: 'Hey! Need help with sorting algorithms?', time: 'Mar 18, 10:00 AM' },
        { sender: 'You', text: 'That would be amazing! QuickSort is confusing.', time: 'Mar 18, 10:15 AM' }
      ]
    },
    {
      name: 'Jithin Siva',
      avatar: 'https://i.pravatar.cc/150?img=2',
      description: 'Quantum mechanics enthusiast. Loves simplifying concepts.',
      subjects: ['Physics', 'Mathematics'],
      lastMessage: 'Schrödinger’s equation is fascinating!',
      time: '5h ago',
      messages: [
        { sender: 'Jithin Siva', text: 'Do you want to go over quantum wave functions?', time: 'Mar 18, 12:30 PM' },
        { sender: 'You', text: 'Absolutely! Let’s break it down.', time: 'Mar 18, 12:45 PM' }
      ]
    },
    {
      name: 'Suraj',
      avatar: 'https://i.pravatar.cc/150?img=4',
      description: 'Enjoys coding and problem-solving.',
      subjects: ['Web Development', 'Software Engineering'],
      lastMessage: 'Have you tried TypeScript Generics?',
      time: '1d ago',
      messages: [
        { sender: 'Suraj', text: 'Hey! Need help with TypeScript?', time: 'Mar 17, 9:00 AM' },
        { sender: 'You', text: 'Yes! Generics are a bit tricky for me.', time: 'Mar 17, 9:15 AM' }
      ]
    }
  ];

  selectedConversation: any = null;
  newMessage: string = '';

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '' && this.selectedConversation) {
      this.selectedConversation.messages.push({
        sender: 'You',
        text: this.newMessage,
        time: new Date().toLocaleTimeString()
      });
      this.newMessage = '';
    }
  }
}
