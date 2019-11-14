import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  /** input reusable variables */
  @Input() name: string;
  @Input() formGroup: FormGroup;
  @Input() model: any;
  @Input() type: any;
  @Input() placeholder: any;
  upper: any;

  constructor() { }

  ngOnInit() {
    /** set space for capital names */
    // this.upper = this.name.replace(/([A-Z])/g, ' $1').trim();
  }
}
