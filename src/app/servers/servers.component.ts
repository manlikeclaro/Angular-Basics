import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})

export class ServerComponent {
  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, modi?";
  outputContent: string[] = [];
  data = [
    'Lorem ipsum dolor sit amet - 1',
    'Lorem ipsum dolor sit amet - 2',
    'Lorem ipsum dolor sit amet - 3',
    'Lorem ipsum dolor sit amet - 4',
  ];

  loadstate = () => {
    this.data.forEach(element => {
      this.outputContent.push(element);
    });
  }

  ngOnInit() {
    this.loadstate();
  }
}
