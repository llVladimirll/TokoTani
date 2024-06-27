document.addEventListener('DOMContentLoaded', function () {
    var earningsCtx = document.getElementById('earningsChart').getContext('2d');
    var earningsChart = new Chart(earningsCtx, {
        type: 'line',
        data: {
            labels: ['8', '9', '10', '11', '12', '13', '14'],
            datasets: [{
                label: 'Earnings',
                backgroundColor: 'rgba(163, 194, 80, 0.2)',
                borderColor: '#A3C250',
                pointBackgroundColor: '#A3C250',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                data: [1, 3, 7, 2, 5, 4, 6]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tanggal',
                        color: '#4a4a4a',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Jt',
                        color: '#4a4a4a',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        stepSize: 1,
                        color: '#4a4a4a'
                    },
                    grid: {
                        color: '#D3D3D3',
                        borderDash: [3, 3]
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var salesVolumeCtx = document.getElementById('salesVolumeChart').getContext('2d');
    var salesVolumeChart = new Chart(salesVolumeCtx, {
        type: 'bar',
        data: {
            labels: ['8', '9', '10', '11', '12', '13', '14'],
            datasets: [
                {
                    label: 'Pisang Raja',
                    backgroundColor: '#A3C250',
                    data: [300, 250, 200, 150, 250, 300, 250]
                },
                {
                    label: 'Mangga',
                    backgroundColor: '#FFD700',
                    data: [250, 200, 150, 100, 200, 250, 200]
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tanggal',
                        color: '#4a4a4a',
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'kg',
                        color: '#4a4a4a',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        stepSize: 50,
                        color: '#4a4a4a'
                    },
                    grid: {
                        color: '#D3D3D3',
                        borderDash: [3, 3]
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});