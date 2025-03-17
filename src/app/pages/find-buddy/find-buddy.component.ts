import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-buddy',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './find-buddy.component.html',
  styleUrls: ['./find-buddy.component.css']
})
export class FindBuddyComponent {
  buddies = [
    { name: "Akil", avatar: "https://i.pravatar.cc/150?img=1", description: "Passionate about algorithms and data structures.", subjects: ["Computer Science", "Mathematics"] },
    { name: "Jithin Siva", avatar: "https://i.pravatar.cc/150?img=2", description: "Quantum mechanics enthusiast. Loves simplifying concepts.", subjects: ["Physics", "Mathematics"] },
    { name: "Abhay Abhi", avatar: "https://i.pravatar.cc/150?img=3", description: "Interested in AI and deep learning.", subjects: ["Artificial Intelligence", "Data Science"] },
    { name: "Suraj", avatar: "https://i.pravatar.cc/150?img=4", description: "Enjoys coding and problem-solving.", subjects: ["Web Development", "Software Engineering"] },
    { name: "Olivia Martinez", avatar: "https://i.pravatar.cc/150?img=5", description: "Loves writing and literature analysis.", subjects: ["English", "History"] },
    { name: "Jeevan", avatar: "https://i.pravatar.cc/150?img=6", description: "Studying human behavior and psychology.", subjects: ["Psychology", "Neuroscience"] },
    { name: "Abhinandh", avatar: "https://i.pravatar.cc/150?img=7", description: "Researching environmental science.", subjects: ["Biology", "Environmental Studies"] },
    { name: "Arjun", avatar: "https://i.pravatar.cc/150?img=8", description: "Aspiring astrophysicist.", subjects: ["Astrophysics", "Quantum Mechanics"] },
    { name: "Nazriya Fahad", avatar: "https://i.pravatar.cc/150?img=9", description: "Interested in economics and finance.", subjects: ["Economics", "Finance"] },
    { name: "Shanmugapriya", avatar: "https://i.pravatar.cc/150?img=10", description: "Passionate about cybersecurity.", subjects: ["Cybersecurity", "Networking"] },
    { name: "Ashfaq", avatar: "https://i.pravatar.cc/150?img=11", description: "Exploring the depths of marine biology.", subjects: ["Marine Biology", "Ecology"] },
    { name: "Codsen", avatar: "https://i.pravatar.cc/150?img=12", description: "Avid reader and aspiring author.", subjects: ["Literature", "Creative Writing"] },
    { name: "Manas", avatar: "https://i.pravatar.cc/150?img=13", description: "Learning to decode the human genome.", subjects: ["Genetics", "Molecular Biology"] },
    { name: "Nuhman", avatar: "https://i.pravatar.cc/150?img=14", description: "Enjoys analyzing global political trends.", subjects: ["Political Science", "International Relations"] },
    { name: "Goat vijay", avatar: "https://i.pravatar.cc/150?img=15", description: "Loves exploring space technology.", subjects: ["Astronomy", "Aerospace Engineering"] },
  ];
  

  sendRequest(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.innerText = "Request Sent";
    button.disabled = true;
    button.classList.add("sent");
  }
}
