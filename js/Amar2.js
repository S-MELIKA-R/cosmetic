//*bazdid*//
function createConfig() {
			return {
				type: 'line',
				data: {
					labels: ['امروز', 'دیروز',],
					datasets: [{
						label: '',
						borderColor: window.chartColors.red,
						backgroundColor: window.chartColors.red,
						data: [100,40,40,55,100],
						fill: false,
					}]
				}, 
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'بازدید روزانه'
					},
					tooltips: {
						position: 'nearest',
						mode: 'index',
						intersect: false,
						yPadding: 10,
						xPadding: 10,
						caretSize: 8,
						background: ' #BA55D3 ',
                        Color:'#000',
						titleFontColor: window.chartColors.black,
						bodyFontColor: window.chartColors.black,
						borderColor: 'rgba(0,0,0,1)',
						borderWidth:2
					},
				}
			};
		}

		window.onload = function() {
			var container = document.querySelector('.container');
			var div = document.createElement('div');
			div.classList.add('chart-container');

			var canvas = document.createElement('canvas');
			div.appendChild(canvas);
			container.appendChild(div);

			var ctx = canvas.getContext('2d');
			var config = createConfig();
			new Chart(ctx, config);
		};

//*chart2//
var ctx = document.getElementById("myCharts").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر'],
      datasets: [{
        label: 'بازدید ماهانه',
        data: [50,60,65,40,50,60,70,80,90,100 ],
        backgroundColor: [
       
            ' #DC143C ',
            '  #8B0000 ',
            '  #d31339 ',
            '  #ec2c54',
            '  #a60e2c',
            '  #ea1a3f',
            '  #a60e2c',
            '  #a60e2c',
            '  #66071b',
        ],
        borderColor: [
          '#370525',
          '#370525',
          '#370525',
          '#370525',
          '#370525',
          '#370525',
          '#370525',
          '#370525',
          '#370525',
        ],
        borderWidth:1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });