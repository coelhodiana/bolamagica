import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  answers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
  ];

  randomNumber: number | null = null;
  shaked = false;

  constructor() {}

  ngOnInit(): void {
    console.log('aqui');
  }

  shake() {
    this.randomNumber = null;

    // this.randomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    this.shaked = true;

    setTimeout(() => {
      this.shaked = false;
      this.randomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    }, 1000);
  }
}
