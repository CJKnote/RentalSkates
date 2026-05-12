/**
 * An app interface to update the skate rental log
 * 
 * Creator: Caroline Knote 
 * 
 * 
 */

const $skateForm = $('#newSkateForm');
const $skateStorage = $('#skateStorage');

$charForm.on("submit", function(e){
    e.preventDefault();

    //pull the skate name
    let skateName = $("#numberInput").val();
    // clear the input
    $("#numberInput").val("");

    displayChar(skateName);
});

function displaySkate(skateName){
    let skate = $("<p></p>").text(skateName);
    $skateStorage.append(skate);
}