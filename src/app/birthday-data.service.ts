import { Injectable } from '@angular/core';

export interface BirthdayCardData {
  personName: string;
  birthdayMessage: string;
  imageData: string;
  accessCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class BirthdayDataService {
  private readonly storageKey = 'birthday-card-data';

  readonly defaultData: BirthdayCardData = {
    personName: 'Aisha',
    birthdayMessage:
      'Happy Birthday! May your day be filled with laughter, love, sweet surprises, and beautiful memories. You deserve all the happiness in the world, today and always.',
    imageData:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    accessCode: '1234'
  };

  getData(): BirthdayCardData {
    const savedData = localStorage.getItem(this.storageKey);

    if (!savedData) {
      return this.defaultData;
    }

    try {
      return { ...this.defaultData, ...JSON.parse(savedData) };
    } catch {
      return this.defaultData;
    }
  }

  saveData(data: BirthdayCardData): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
