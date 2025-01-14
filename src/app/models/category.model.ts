import { Task } from './task.model';

export class Category {
  constructor(
    public id: number,
    public name: string,
    public tasks: Task[] = []
  ) {}
}