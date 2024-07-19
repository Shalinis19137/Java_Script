/*
let marks = [86,75,98,66,54];
let sum = 0;
for(let val of marks)
    {
        sum +=val;
    }

    let avg = sum/marks.length;
    console.log(`avg marks of the class = ${avg}`);
    */


    /*
    let items = [250,645,300,900,50];
    let idx = 0;
    for(let val of items)
        { console.log(`value at index ${idx} = ${val}`);
            idx++;
        }
            */

        /*
        let items = [250,645,300,900,50];
        let i = 0;
        for(let val of items)
            {
                let offer = val/10;
                items[i] = items[i]-offer;
                console.log(`value after offer =${items[i]}`);
                i++;
            }
                */



            
            let items = [250,645,300,900,50];


            for (let i = 0; i <items . length; i++)
                {
                    let offer = items[i]/10;
                    items[i] -= offer;
                }
                console.log(items)
       