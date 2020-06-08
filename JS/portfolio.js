let myChart = document.getElementById('worthChart').getContext('2d');
let dif = document.getElementById('difChart').getContext('2d');
var appleKurs = 1000;
var microsoftKurs = 800;
var netflixKurs = 600;
var cocacolaKurs = 400;
var appledif = 1.23;
var microsoftdif = 0.25;
var netflixdif = -0.12;
var cocacoladif = -1.52;

// Global Options
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#769fcd';

let portfolioChart = new Chart(myChart, {
  type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Apple', 'Microsoft', 'Netflix', 'Coca Cola'],
    datasets:[{
      label:'',
      data:[appleKurs, microsoftKurs, netflixKurs, cocacolaKurs],
      backgroundColor:['rgba(118, 159, 205, 1)', 'rgba(185, 215, 234, 1)', 'rgba(118, 159, 205, 1)',
        'rgba(185, 215, 234, 1)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderWidth:0,
      borderColor:'#ffffff',
      hoverBorderWidth:2,
      hoverBorderColor:'#769fcd'}]},
  options:{
    title:{
      display:false,
      text:'',
      fontSize:70 },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000',
        fontSize:50
      }
    },
    layout:{
      padding:{
        left:50,
        right:50,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

let difChart = new Chart(dif, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Apple', 'Microsoft', 'Netflix', 'Coca Cola'],
    datasets:[{
      label:'',
      data:[appledif, microsoftdif, netflixdif, cocacoladif],
      backgroundColor:['rgba(118, 159, 205, 1)', 'rgba(185, 215, 234, 1)', 'rgba(118, 159, 205, 1)',
        'rgba(185, 215, 234, 1)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      borderWidth:0,
      borderColor:'#ffffff',
      hoverBorderWidth:2,
      hoverBorderColor:'#769fcd'}]},
  options:{
    title:{
      display:false,
      text:'',
      fontSize:70 },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000',
        fontSize:50
      }
    },
    layout:{
      padding:{
        left:50,
        right:50,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});
