import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  textColor: string = 'indigo';

  ngOnInit() {
      setInterval(
        () => {
            this.textColor = this.getRandomColor();
        },
        7000
      );
  }

  getRandomColor() {
      // random integers in the 0-255 range for rgb
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      return `rgb(${r}, ${g}, ${b})`;
  }
}
