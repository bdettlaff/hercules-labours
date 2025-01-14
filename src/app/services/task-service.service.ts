import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { Category } from '../models/category.model';
import { Technology } from '../models/technology.model';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
//   public tasksData: string = ''; // Pole do przechowywania danych z pliku

//   constructor(private http: HttpClient) {
//     this.loadTasks();
//   }

//   loadTasks(): Observable<string> {
//     return this.http.get('assets/tasks.txt', { responseType: 'text' });
//   }

//   // Metoda, która analizuje zadania na podstawie wybranego języka
//   public parseTextToTechnologies(text: string): Technology[] {
//     const technologies: Technology[] = [];
//     const lines = text.split('\n'); // Rozdzielamy tekst na linie
//     let currentTechnology: Technology | null = null; // Zmienna na technologię
//     let currentCategory: Category | null = null; // Zmienna na kategorię
  
//     let taskId = 1; // Numeracja zadań
//     let categoryId = 1; // Numeracja kategorii
//     let technologyId = 1; // Numeracja technologii
  
//     lines.forEach((line) => {
//       // Szukamy technologii, np. "PHP"
//       const technologyMatch = line.match(/^([A-Za-z]+)$/);
//       if (technologyMatch) {
//         // Jeśli istnieje już aktualna technologia, dodajemy ją do listy
//         if (currentTechnology) {
//           technologies.push(currentTechnology);
//         }
//         // Tworzymy nową technologię
//         currentTechnology = new Technology(
//           technologyId++, // ID technologii
//           technologyMatch[1], // Nazwa technologii
//           [] // Inicjujemy pustą listę kategorii
//         );
//       }
  
//       // Szukamy kategorii, np. "Podstawowe zadania"
//       const categoryMatch = line.match(/^([A-Za-z]+.*)$/);
//       if (categoryMatch && currentTechnology) {
//         // Jeśli istnieje już aktualna kategoria, dodajemy ją do technologii
//         if (currentCategory) {
//           currentTechnology.categories.push(currentCategory);
//         }
//         // Tworzymy nową kategorię
//         currentCategory = new Category(
//           categoryId++, // ID kategorii
//           categoryMatch[1], // Nazwa kategorii
//           [] // Inicjujemy pustą listę zadań
//         );
//       }
  
//       // Szukamy zadań, np. "1. Połączenie z bazą danych"
//       const taskMatch = line.match(/^(\d+)\. (.*)/);
//       if (taskMatch && currentCategory) {
//         const task = new Task(
//           taskId++, // ID zadania
//           taskMatch[2], // Nazwa zadania
//           '', // Domyślny opis
//           '', // Domyślny input
//           '' // Domyślny output
//         );
//         currentCategory.tasks.push(task); // Dodajemy zadanie do bieżącej kategorii
//       }
  
//       // Szukamy opisu zadania
//       const descriptionMatch = line.match(/^Opis: (.*)/);
//       if (descriptionMatch && currentCategory) {
//         const lastTask = currentCategory.tasks[currentCategory.tasks.length - 1];
//         lastTask.description = descriptionMatch[1];
//       }
  
//       // Szukamy danych wejściowych
//       const inputMatch = line.match(/^Wejście: (.*)/);
//       if (inputMatch && currentCategory) {
//         const lastTask = currentCategory.tasks[currentCategory.tasks.length - 1];
//         lastTask.inputExample = inputMatch[1];
//       }
  
//       // Szukamy danych wyjściowych
//       const outputMatch = line.match(/^Wyjście: (.*)/);
//       if (outputMatch && currentCategory) {
//         const lastTask = currentCategory.tasks[currentCategory.tasks.length - 1];
//         lastTask.outputExample = outputMatch[1];
//       }
//     });
  
//     // Dodajemy ostatnią kategorię i technologię, jeśli istnieją
//     if (currentCategory && currentTechnology) {
//       currentTechnology.categories.push(currentCategory);
//       technologies.push(currentTechnology);
//     }
  
//     return technologies;
//   }
// }
}