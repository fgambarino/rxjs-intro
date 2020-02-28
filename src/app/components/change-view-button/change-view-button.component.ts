import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-view-button',
  templateUrl: './change-view-button.component.html',
  styleUrls: ['./change-view-button.component.scss']
})
export class ChangeViewButtonComponent implements OnInit {
  @Input() showMarbleDiagram: boolean;
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clicked.emit();
  }
}
