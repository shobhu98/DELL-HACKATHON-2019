const csv = require('csv-parser');
const fs = require('fs');



    let url=[];
    let finalurl=[];
    fs.createReadStream('writeData2.csv')
        .pipe(csv())
        .on('data', (row) => {
            url.push(row.a);
        })

        .on('end', () => {
            console.log('CSV file successfully processed');
             finalurl= a(url);
             console.log(finalurl);
        });

    function a(url) {
        let url1=url;
        return url1;
    }



