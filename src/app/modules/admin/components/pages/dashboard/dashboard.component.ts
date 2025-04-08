import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  //Propriedades do componente
  grafico: Chart = new Chart();
  dados: any[] = [];


  //Função executada quando o componente é inicializado
  ngOnInit() {


    //Mock de dados
    this.dados = [
      { prioridade : 'Alta', quantidade : 10 },
      { prioridade : 'Média', quantidade : 5 },
      { prioridade : 'Baixa', quantidade : 2 },
    ];


    //Montando os dados do gráfico
    const conteudo: any[] = [];
    this.dados.forEach((item) => {
      conteudo.push([item.prioridade, item.quantidade]);
    });


    //Configurando o gráfico
    this.grafico = new Chart({
      chart: { type: 'pie' },
      title: { text: 'Quantidade de tarefas por prioridade' },
      subtitle: { text: 'Total de tarefas separadas por tipo / prioridade' },
      plotOptions: {
        pie: {
          innerSize: '50%',
          dataLabels: { enabled: true }
        }
      },
      series: [{
        data: conteudo,
        type: 'pie',
        name: 'Quantidade de tarefas',
      }],
      legend: { enabled: false },
      credits: { enabled: false },
    });


  }
}



