import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BirthdayCardData, BirthdayDataService } from '../birthday-data.service';

@Component({
  selector: 'app-birthday-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './birthday-admin.component.html',
  styleUrl: './birthday-admin.component.css'
})
export class BirthdayAdminComponent implements OnInit {
  personName = '';
  birthdayMessage = '';
  imageData = '';
  accessCode = '';
  imageName = 'No file chosen';
  showToast = false;

  constructor(private birthdayDataService: BirthdayDataService) {}

  ngOnInit(): void {
    const data = this.birthdayDataService.getData();
    this.personName = data.personName;
    this.birthdayMessage = data.birthdayMessage;
    this.imageData = data.imageData;
    this.accessCode = data.accessCode;
    this.imageName = this.imageData ? 'Uploaded image ready' : 'No file chosen';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    this.imageName = file.name;

    const reader = new FileReader();
    reader.onload = () => {
      this.imageData = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    const payload: BirthdayCardData = {
      personName: this.personName,
      birthdayMessage: this.birthdayMessage,
      imageData: this.imageData,
      accessCode: this.accessCode
    };

    this.birthdayDataService.saveData(payload);
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2200);
  }
}
