import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnChanges, OnInit, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  value = "hello"

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes")
  }

  ngOnInit(): void {
    console.log("on init")
  }

  ngDoCheck(): void {
    console.log("do check")
  }

  ngAfterContentInit(): void {
    console.log("after content init")
  }
  
  ngAfterContentChecked(): void {
    console.log("after content checked")
  }

  ngAfterViewInit(): void {
    console.log("after view init")
  }

  ngAfterViewChecked(): void {
    console.log("after view checked")
  }

  ngOnDestroy(): void {
    console.log("on destroy content")
  }

}
