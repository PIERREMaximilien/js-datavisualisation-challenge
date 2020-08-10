/*==========Data graph 1 =========== */ 

let crimeValue = [];
let countryCrime = [];
let j = 0;
let length = 12

for (i= 2; i<37 ; i++) {
    for (j ; j < length ; j++) {
    countryCrime.push(document.getElementsByTagName("td")[j].innerHTML);
}
crimeValue.push(countryCrime);
countryCrime = [];
length += 12;
}

/* ======= country/Year ========*/

let country = [];
let Y2002 = [];
let Y2003 = [];
let Y2004 = [];
let Y2005 = [];
let Y2006 = [];
let Y2007 = [];
let Y2008 = [];
let Y2009 = [];
let Y2010 = [];
let Y2011 = [];
let Y2012 = [];

for (ii = 0; ii<35; ii++) {
    country.push(crimeValue[ii][0]);
    Y2002.push(parseInt(crimeValue[ii][1]));
    Y2003.push(parseInt(crimeValue[ii][2]));
    Y2004.push(parseInt(crimeValue[ii][3]));
    Y2005.push(parseInt(crimeValue[ii][4]));
    Y2006.push(parseInt(crimeValue[ii][5]));
    Y2007.push(parseInt(crimeValue[ii][6]));
    Y2008.push(parseInt(crimeValue[ii][7]));
    Y2009.push(parseInt(crimeValue[ii][8]));
    Y2010.push(parseInt(crimeValue[ii][9]));
    Y2011.push(parseInt(crimeValue[ii][10]));
    Y2012.push(parseInt(crimeValue[ii][11]));
}

/* ========graph========*/

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: country,
        datasets: [
        {
            label: '2002',
            data: Y2002,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        {
            label: '2003',
            data: Y2003,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1  
        },
        {
            label: '2004',
            data: Y2004,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1 
        },
        {
            label: '2005',
            data: Y2005,
        },
        {
            label: '2006',
            data: Y2006,
        },
        {
            label: '2007',
            data: Y2007,
        },
        {
            label: '2008',
            data: Y2008,
        },
        {
            label: '2009',
            data: Y2009,
        },
        {
            label: '2010',
            data: Y2010,
        },
        {
            label: '2011',
            data: Y2011,
        },
        {
            label: '2012',
            data: Y2012,
        }
    ]
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

/*========Data graph 2========= */

let prisonValue = [];
let countryPrison = [];
let jj = 420;
let length2 = 423;

for (iii= 0; iii<30 ; iii++) {
    for (jj ; jj < length2 ; jj++) {
    countryPrison.push(document.getElementsByTagName("td")[jj].innerHTML);
}
prisonValue.push(countryPrison);
countryPrison = [];
length2 += 3;
}


let country2 = [];
let Y1 = [];
let Y2 = [];

for (iiii = 0; iiii<30; iiii++) {
    country2.push(prisonValue[iiii][0]);
    Y1.push(parseInt(prisonValue[iiii][1]));
    Y2.push(parseInt(prisonValue[iiii][2]));
}

country2[7] ="England and Wales(UK)";

let ctx2 = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: country2,
        datasets: [
        {
            label: '2007-09',
            data: Y1
        },
        {
            label: '2010-12',
            data: Y1
        }
    ]
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




const getData = () => {
    fetch("https://canvasjs.com/services/data/datapoints.php").then(response => {
        return response.json();
    })
    .then(responseData => {
        console.log(responseData)
    })
};
