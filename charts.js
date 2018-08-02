// Zeehive Chart

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Easy to find!", "", "", "", "Difficult to find"],
        datasets: [{
            label: 'Email or Search',
            data: [0, 2, 5, 6, 8],
            backgroundColor: [
                'rgba(235,243,245, 1)',
                'rgba(235,243,245, 1)',
                'rgba(235,243,245, 1)',
                'rgba(235,243,245, 1)',
                'rgba(235,243,245, 1)',

            ],

            borderWidth: 1
        }, {
            label: 'Recent Files',
            data: [1, 0, 2, 1, 0],
            backgroundColor: [
                'rgba(75,137,160,.7)',
                'rgba(75,137,160,.7)',
                'rgba(75,137,160,.7)',
                'rgba(75,137,160,.7)',
                'rgba(75,137,160,.7)',
                'rgba(75,137,160,.7)',
            ],

            borderWidth: 1
        }, {
            label: 'Folders or Bookmarks',
            data: [6, 4, 3, 0, 1],
            backgroundColor: [
                'rgba(56,77,88,.7)',
                'rgba(56,77,88,.7)',
                'rgba(56,77,88,.7)',
                'rgba(56,77,88,.7)',
                'rgba(56,77,88,.7)',
                'rgba(56,77,88,.7)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
Chart.defaults.global.defaultFontColor = '#212232';
Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif";
