import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements AfterViewInit {
  @Output() filterChange = new EventEmitter();

  @ViewChild('filter') filterElement: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.filterElement.nativeElement, 'input', (event: Event) => {
      this.filterChange.emit((<HTMLInputElement>event.target).value);
    });
  }
}
