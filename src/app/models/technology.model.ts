import { Category } from './category.model';

export class Technology {
    constructor(
        public id: number,
        public name: string,
        public categories: Category[]
      ) {}
}