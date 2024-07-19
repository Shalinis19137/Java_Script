
/*
for(let i = 1; i<=5 ; i++)
    {
        console.log("Shalini");
    }
    console.log("loop has ended");

    */

    // Calculate the sum of 1 to 5
    

    /*
    let sum = 0;
    for(i = 1; i<=5 ; i++ )
        {
            sum = sum+i ;
        }
    console.log(sum);
        */

    // Using While loop

    /*
   let i = 1;
    while(i<=5)
        {
            console.log("int");
            i++;
        }
        
        */

        // Do while loop

        /*

        let i = 1;
        do{
            console.log("internship");
            i++;
        }
        while(i<=5)
*/

        // For-OF loop
/*
        let str = "asd"
        for(let i of str)
            {
                console.log(i)
            }
*/


/*
let str = "Java script"
let size = 0;
for(let i of str)
    {
        console.log("i=",i);
        size++;
    }
    console.log("string size = ",size)

    */

    // For-In loop(apply on objects)


    
    let student =
    {
        name:"Mohit",
        age:19,
        cgpa:8.5,
        isPass:true
    };

    for(let key in student)
        {
            console.log("Key = ",Key, "value = ",student[key]);
        }


