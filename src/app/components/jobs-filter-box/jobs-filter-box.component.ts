import { Component } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-filter-box',
  templateUrl: './jobs-filter-box.component.html',
  styleUrls: ['./jobs-filter-box.component.css']
})
export class JobsFilterBoxComponent {
  categories$ = this.jobService.categoriesAction$;

  constructor(protected jobService: JobService) { }
}
