import {Component, Input} from '@angular/core';
import {ICourseBanner} from "../../core/interfaces/course-banner.interface";

@Component({
  selector: 'math-course-banner',
  templateUrl: './course-banner.component.html',
  styleUrl: './course-banner.component.scss'
})
export class CourseBannerComponent {
  @Input() data!: ICourseBanner;
}
