var webForm = document.getElementsByClassName("url-form")[0];
var embedTag = document.getElementsByClassName("embed-tag")[0];
var embedTag;
// getting input value on form submit
webForm.addEventListener("submit", function (e) {
    var urlFormInput = document.getElementsByClassName("url-form-input")[0];
    var inputValue = urlFormInput.value;
    fillEmbed(inputValue);
    tryAjax();
    e.preventDefault();
});

// filling "src" property of the Embed tag with input value
function fillEmbed(inputValue) {
    console.log(embedTag, inputValue)
    embedTag.setAttribute("src", inputValue)
    ready()
}

ready();

function ready() {
    console.log("just a second...")
    embedTag.onload = function () {
        console.log('DOM is ready.')
        // console.log(embedTag);
        let ifr = embedTag.contentWindow;
        ifr.location = "https://www.rockhardpro.com/members-area-2/"
        // console.log(embedTag, embedTag.contentWindow.document)

        // var x = document.getElementsByClassName("embed-tag")[0].querySelectorAll("a");
        // console.log(x);
    }
    // if(document.readyState === 'complete'){
    //     var clearI = clearInterval(readyInterval);
    //     showLinks();
    // }else{
    //     var readyInterval = setInterval(function(){
    //         console.log("DOM is nor ready")
    //         ready()
    //     }, 100)
    // }
};


var nametext;
var myarray = []

function showLinks() {

    for (var i = 0; i < x.length; i++) {

        if (x[i].textContent.replace(/\s+/g, ' ').trim() != "") {

            nametext = x[i].textContent;
            var cleantext = nametext.replace(/\s+/g, ' ').trim();
            var cleanlink = '<a href ="' + x[i].href + '">' + x[i].href + '</a>';
            myarray.push([cleantext, cleanlink]);
        } else

        {
            nametext = x[i].outerHTML.innerHTML;
            var cleantext = nametext;
            var cleanlink = '<a href ="' + x[i].href + '">' + x[i].href + '</a>';
            myarray.push([cleantext, cleanlink]);
        }

    };

    make_table();

    function make_table() {
        var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
        for (var i = 0; i < myarray.length; i++) {
            table += '<tr><td>' + myarray[i][0] + '</td><td>' + myarray[i][1] + '</td></tr>';
        };

        //
        var w = window.open("");
        w.document.write(table);
    }
    make_table();
}

// function tryAjax(){
//     $.ajax({
//         url: 'https://www.rockhardpro.com/members-area-2/',
//         success: function(data) {
//           $('#links').html(data);
//           $('#show').text(function(){
//             if (data.indexOf('Text') != -1) {
//               return 'Can see text!';
//             }
//             else {
//               return "Can't see text!";
//             }
//           });
//         },
//         error: function(){
//           console.log(error);
//         }
//       });
// }