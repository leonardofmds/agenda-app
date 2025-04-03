import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  imports: [
    CommonModule
  ],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.css'
})
export class AlertMessageComponent {

@Input() message: string = ''; //mensagem a ser exibida no alerta
@Input() type: 'success'| 'error' = 'success'; //tipo do alerta (success, error, warning, info)

}
