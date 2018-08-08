import { Component, OnInit } from '@angular/core';

export interface Message {
  from: string;
  subject: string;
  content: string;
}

@Component({
  selector: 'app-aaaaaa-test',
  templateUrl: './aaaaaa-test.component.html',
  styleUrls: ['./aaaaaa-test.component.css']
})
export class AaaaaaTestComponent implements OnInit {

  messages: Message[] = [
    { from: 'aaa', content: "aaa content", subject: 'aaa subject' },
    { from: 'bbb', content: "bbb content", subject: 'bbb subject' },
    { from: 'ccc', content: "ccc content", subject: 'ccc subject' },
    { from: 'ddd', content: "ddd content", subject: 'ddd subject' }
  ];
  constructor() { }

  ngOnInit() {
  }

}