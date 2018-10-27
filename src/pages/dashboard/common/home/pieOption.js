let obj = {

    series: [
        {

            type: 'pie',
            radius: ['50%', '60%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {

                show: true,
                position: 'center',
                formatter: (item) => {

                    if (item.data.id === 1) {

                        return item.percent + '%';
                    }

                },
                color: '#000'

            },
            data: [

                {value: 765, id: 1, itemStyle: {color: '#609dff'}},
                {value: 18976, id: 2, itemStyle: {color: '#94b9f5'}}
            ]
        }
    ]
};

export default obj