import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private SOURCE_URL = 'assets/data/data.json';

  private job$ = this.getJobs();
  private categoriesSubject = new BehaviorSubject<string[]>([]);

  categoriesAction$ = this.categoriesSubject.asObservable();
  filteredJobs$ = combineLatest([
    this.job$,
    this.categoriesAction$,
  ]).pipe(
    map(([jobs, categories]) => {
      if (categories.length === 0) return jobs;
      return jobs.filter((job) =>
        categories.every((cat) =>
          [
            job.position,
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ].includes(cat)
        )
      );
    })
  );

  constructor(private http: HttpClient) { }

  private getJobs() {
    return this.http.get<Job[]>(this.SOURCE_URL);
  }

  onCategoryAdded(category: string) {
    if (this.categoriesSubject.value.includes(category)) return;

    this.categoriesSubject.next([...this.categoriesSubject.value, category]);
  }

  onCategoryRemoved(category: string) {
    this.categoriesSubject.next(
      this.categoriesSubject.value.filter((cat) => cat !== category)
    );
  }

  onClearCategories() {
    this.categoriesSubject.next([]);
  }
}
