import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-switch',
  template: `
    <span *ngIf="size">
      <ui-switch
        [checked]="checked"
        [size]="size"
        [disabled]="disabled"
        [color]="bdColor"
        [switchColor]="switchColor"
        [uncheckedLabel]="uncheckedLabel"
        [checkedLabel]="checkedLabel"
        (valueChange)="onValueChange($event)"
        (change)="onChange($event)"
        (changeEvent)="onChangeEvent($event)"
      ></ui-switch>
    </span>
    <span *ngIf="!size">
      <ui-switch
        [checked]="checked"
        [disabled]="disabled"
        [color]="bdColor"
        [switchColor]="switchColor"
        [uncheckedLabel]="uncheckedLabel"
        [checkedLabel]="checkedLabel"
        (valueChange)="onValueChange($event)"
        (change)="onChange($event)"
        (changeEvent)="onChangeEvent($event)"
      ></ui-switch>
    </span>
  `,
  styles: [``]
  // styleUrls: ['./common-switch.component.css']
})
export class CommonSwitchComponent implements OnInit {
  @Output() valueChangeEvent = new EventEmitter();
  @Input() public checked = true;
  @Input() public size = null;
  @Input() public disabled = false;
  @Input() public bdColor = '#0072c6';
  @Input() public switchColor = '#fff';
  @Input() public uncheckedLabel = 'OFF';
  @Input() public checkedLabel = 'On';
  ngOnInit() {}
  onChange(value: boolean) {
    // console.log('onchange', value);
  }
  onChangeEvent(event: MouseEvent) {
    // console.log(event, event.toString(), JSON.stringify(event));
  }

  onValueChange(value: boolean) {
    this.valueChangeEvent.emit(value);
  }
}
