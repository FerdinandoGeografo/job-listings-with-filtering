import { Component } from '@angular/core';
import { map } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent {
  jobs$ = this.jobService.filteredJobs$.pipe(
    map((jobs) =>
      jobs.map((job) => {
        job.categories = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ];
        return job;
      })
    )
  );

  constructor(protected jobService: JobService) { }
}
