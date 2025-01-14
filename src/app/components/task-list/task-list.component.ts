import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Task } from 'src/app/models/task.model';
import { Technology } from 'src/app/models/technology.model';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { TasksList } from 'src/app/models/tasksList.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList = new TasksList()
  tasks = this.taskList.getTaskList();

  selectedLanguage: string = 'PHP';
  selectedCategoryIndex: number | null = null;
  expandedTaskId: number | null = null;

  constructor(private route: ActivatedRoute, private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedLanguage = params['language'] || 'PHP';
    });
  }

  selectCategory(categoryIndex: number) {
    this.selectedCategoryIndex = this.selectedCategoryIndex === categoryIndex ? null : categoryIndex;
  }

  getFilteredTechnology(): Technology | undefined {
    return this.tasks.find(tasks => tasks.name === this.selectedLanguage);
  }

  toggleTaskDetails(taskId: number) {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }
}