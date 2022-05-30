//const { line } = require("d3");

var dashBoard=function(){
    var charts=c3.generate({
        bindto:'#charts',
        axis:{
            y:{
                label:{
                    text:'Time used',
                    position:'outer-middle'
                },
                y2:{
                    show:true,
                    label:{
                        text:'projects progress',
                    position:'outer-middle'
                }
                }
            }
        },
        data:{
            columns:[
                ['dataset1',30,70,40,90,50],
                ['dataset2',80,10,35,58,45],
            ],
            axes:{
                dataset2:'y2'
            },
            types:{
                'dataset1':'bar',
                'dataset2':'line',
            }
        }
    });
}();