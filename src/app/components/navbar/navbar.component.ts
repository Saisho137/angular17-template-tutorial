import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentNavbar } from '../../interfaces/component-navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() propertyChild: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  componentsNavbar: ComponentNavbar[] = [{id: "1", name: "home"}, {id: "2", name: "login"}, {id: "3", name: "logo"}];

  isInHome: boolean = true;
  
  handleHover(item: string): void {
    console.log(`Mouse on ${item}`)
  }
  emitToParent(): void {
    this.greet.emit("Greetings parent! Im your child.")
  }
}
