import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BirthdayDataService } from '../birthday-data.service';

@Component({
  selector: 'app-birthday-public',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './birthday-public.component.html',
  styleUrl: './birthday-public.component.css'
})
export class BirthdayPublicComponent implements OnInit {
  personName = 'Aisha';
  birthdayMessage = 'Happy Birthday!';
  imageData = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80';
  accessCode = '1234';
  enteredCode = '';
  isUnlocked = false;
  isIncorrect = false;

  constructor(private birthdayDataService: BirthdayDataService) {}

  ngOnInit(): void {
    const data = this.birthdayDataService.getData();
    this.personName = data.personName;
    this.birthdayMessage = data.birthdayMessage;
    this.imageData = data.imageData;
    this.accessCode = data.accessCode || '1234';
  }

  unlockGift(): void {
    this.isIncorrect = this.enteredCode !== this.accessCode;

    if (!this.isIncorrect) {
      this.isUnlocked = true;
    }
  }
}
