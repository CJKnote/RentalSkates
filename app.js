/**
 * An app interface to update the skate rental log
 * 
 * Creator: Caroline Knote 
 * 
 * 
 */

const $skateForm = $('#newSkateForm');
const $skateStorage = $('#skateStorage');
var Excel = require("exceljs");
var workbook = new Excel.Workbook();
workbook.xlsx.readFile('TestData.xlsx')
.then(function() {
    var worksheet - workbook.getWorksheet('sheet');
    var i=1;
    worksheet.eachRow({includeEmpty: false}, function(row, rowNumber) {
        r-worksheet.getRow(i).values;
        r1=r[2]; //index the column
        console.log(r1);
        i++;
    });
    worksheet.getCell('B3').value = "test";
    return workbook.xlsx.writeFile('TestData.xlsx');
});

$charForm.on("submit", function(e){
    e.preventDefault();

    //pull the skate name
    let skateName = $("#numberInput").val();
    // clear the input
    $("#numberInput").val("");

    displayChar(skateName);
});

function changeLog(skateForm){
    
}

function displaySkate(skateName){
    let skate = $("<p></p>").text(skateName);
    $skateStorage.append(skate);
}