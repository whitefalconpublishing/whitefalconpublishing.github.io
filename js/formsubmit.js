function postPublishingForm() {

    var dataStr = 'entry.1435449569=' + encodeURIComponent($('#entry_1435449569').val()) + '&entry.689278842=' + encodeURIComponent($('#entry_689278842').val()) + '&entry.794830973=' + encodeURIComponent($('#entry_794830973').val()) + '&entry.28753899=' + encodeURIComponent($('#entry_28753899').val()) +
        '&entry.1085289810=' + encodeURIComponent($('#entry_1085289810').val()) + '&entry.1649662356=' + encodeURIComponent($('#entry_1649662356').val());


    var entry2131609516 = $('input[name="entry.2131609516"]:checked');
    for (var i = 0; i < entry2131609516.length; i++) {
        dataStr += '&entry.2131609516=' + encodeURIComponent($(entry2131609516[i]).val());
    }

    var entry1811881259 = $('input[name="entry.1811881259"]:checked');
    for (var i = 0; i < entry1811881259.length; i++) {
        dataStr += '&entry.1811881259=' + encodeURIComponent($(entry1811881259[i]).val());
    }

    var entry1022023694 = $('input[name="entry.1022023694"]:checked');
    for (var i = 0; i < entry1022023694.length; i++) {
        dataStr += '&entry.1022023694=' + encodeURIComponent($(entry1022023694[i]).val());
    }

    var entry333489778 = $('input[name="entry.333489778"]:checked');
    for (var i = 0; i < entry333489778.length; i++) {
        dataStr += '&entry.333489778=' + encodeURIComponent($(entry333489778[i]).val());
    }

    var entry291878763 = $('input[name="entry.291878763"]:checked');
    for (var i = 0; i < entry291878763.length; i++) {
        dataStr += '&entry.291878763=' + encodeURIComponent($(entry291878763[i]).val());
    }

    var dataStrEncoded = dataStr;

    //console.log(dataStrEncoded);

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSe18QHkhhQcwAzd7SxTnhH3J2Ve3W8C5UKMYdETTIDbJTfilQ/formResponse",
        /*data: {"entry.1435449569" : $('#entry_1435449569').val(), "entry.689278842" : $('#entry_689278842').val(), "entry.794830973": $('#entry_794830973').val(), "entry.28753899": $('#entry_28753899').val(), "entry.1085289810": $('#entry_1085289810').val(), "entry.2131609516": val2131609516, "entry.1811881259": val1811881259, "entry.1022023694": val1022023694, "entry.333489778": val333489778, "entry.291878763": val291878763, "entry.1649662356": $('#entry_1649662356').val() + val2131609516 + val1811881259 + val1022023694 + val333489778 + val291878763},*/
        data: dataStrEncoded,
        //data: 'entry.1435449569=Arshdeep+Bahga&entry.689278842=arshdeepbahga%40gmail.com&entry.794830973=%2B917837591229&entry.28753899=Test+Book&entry.1085289810=30000&entry.2131609516=Silver&entry.2131609516=Gold&entry.1811881259=Text-only&entry.1022023694=Non-Fiction&entry.1022023694=Textbook&entry.333489778=Black+%26+White+Interior+%2F+Full+Color+Cover&entry.291878763=Copy+editing+%26+Proof+Reading&entry.291878763=Ingram+Distribution&entry.1649662356=ok',
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                $("#defaultModal").modal();
            },
            200: function() {
                $("#defaultModal").modal();
            }
        }
    });
}

function postContactForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeGzVizjPHStgTeIB0En8k4Zy0BWYRDy_9Qqbf9sXuBLkW-AA/formResponse",
        data: {
            "entry.675902108": name,
            "entry.800931974": email,
            "entry.237185281": message
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                $("#defaultModal").modal();
            },
            200: function() {
                $("#defaultModal").modal();
            }
        }
    });
}

function postSubscribeForm() {
    var email = $('#entry_1640236631').val();
    console.log(email);
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdt5rg8TfFojYxPGXHkc8nsrSAhCZpExT6bou4OLUx0Q3DK_A/formResponse",
        data: {
            "entry.1640236631": email
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                console.log("Err");
                $("#subscribeModal").modal();
            },
            200: function() {
            console.log("OK");
                $("#subscribeModal").modal();
            }
        }
    });
}

function postCustomForm() {

    var dataStr =  'entry.990534186=' + encodeURIComponent($('#entry_990534186').val()) + 
                   '&entry.227755716=' + encodeURIComponent($('#entry_227755716').val()) + 
                   '&entry.985830575=' + encodeURIComponent($('#entry_985830575').val()) + 
                   '&entry.618585050=' + encodeURIComponent($('#entry_618585050').val()) + 
                   //'&entry.661368213=' + encodeURIComponent($('input[name="entry.661368213"]').val) +
                   //'&entry.1227232360=' + encodeURIComponent($('input[name="entry.1227232360"]').val) + 
                   //'&entry.616754442=' + encodeURIComponent($('input[name="entry.616754442"]').val) + 
                   //'&entry.1692587617=' + encodeURIComponent($('input[name="entry.1692587617"]').val)+ 
                   //'&entry.770142947=' + encodeURIComponent($('input[name="entry.770142947"]').val)+
                   '&entry.1464090448=' + encodeURIComponent($('#entry_1464090448').val())+
                   //'&entry.486425979=' + encodeURIComponent($('input[name="entry.486425979"]').val)+
                   //'&entry.1676997480=' + encodeURIComponent($('input[name="entry.1676997480"]').val)
                   '&entry.661368213=' + encodeURIComponent($('#entry_661368213').val())+
                   '&entry.1227232360=' + encodeURIComponent($('#entry_1227232360').val())+
                   '&entry.616754442=' + encodeURIComponent($('#entry_616754442').val())+
                   '&entry.1692587617=' + encodeURIComponent($('#entry_1692587617').val())+
                   '&entry.770142947=' + encodeURIComponent($('#entry_770142947').val())+
                   '&entry.486425979=' + encodeURIComponent($('#entry_486425979').val())+
                   '&entry.1676997480=' + encodeURIComponent($('#entry_1676997480').val()) ;


    var entry1982777555 = $('input[name="entry.1982777555"]:checked');
    for (var i = 0; i < entry1982777555.length; i++) {
        dataStr += '&entry.1982777555=' + encodeURIComponent($(entry1982777555[i]).val());
    }

    var dataStrEncoded = dataStr;

    //console.log(dataStrEncoded);

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSf4NodD1z8DRFTRDAW5nlfhPiDgxPxQ7L1TpAs-J5wUx5hTqA/formResponse",
        data: dataStrEncoded,
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                $("#defaultModal").modal();
            },
            200: function() {
                $("#defaultModal").modal();
            }
        }
    });
}

function postManuscriptForm() {
    var myName = $('#myName').val();
    var myEmail = $('#myEmail').val();
    var bookTitle = $('#bookTitle').val();
    var aboutBook = $('#aboutBook').val();
    var aboutAuthor = $('#aboutAuthor').val();
    var agreementFile = $('#agreementFile')[0].files[0];
    var idFile = $('#idFile')[0].files[0];
    var addressFile = $('#addressFile')[0].files[0];
    var manuscriptFile = $('#manuscriptFile')[0].files[0];
    var authorPhoto = $('#authorPhoto')[0].files[0];

    var formData = new FormData();
    formData.append('myName', myName);
    formData.append('myEmail', myEmail);
    formData.append('bookTitle', bookTitle);
    formData.append('aboutBook', aboutBook);
    formData.append('aboutAuthor', aboutAuthor);
    formData.append('agreementFile', agreementFile);
    formData.append('idFile', idFile);
    formData.append('addressFile', addressFile);
    formData.append('manuscriptFile', manuscriptFile);
    formData.append('authorPhoto', authorPhoto);    
    console.log(formData);
    /*$.ajax({
        url: "https://platform.self-publish.in/api/manuscript_submission/",
        data: formData,
        type: "POST",
        //contentType: 'multipart/form-data',
        crossDomain: true,
        processData: false,  // tell jQuery not to process the data
        contentType: false,  // tell jQuery not to set contentType
        success: function(data){
            $("#defaultModal").modal();
            console.log("Manuscript submission successful");
        }
        error: function() {
                console.log("Error in submitting manuscript");
        }
    });*/
}

$(document).ready(function() {
    $('#contact-form').submit(function() {
        postContactForm();
        return false;
    });

    $('#subscribe-form').submit(function() {
        postSubscribeForm();
        return false;
    });

    $('#publishing-form').submit(function() {
        postPublishingForm();
        return false;
    });

    $('#custom-form').submit(function() {
        postCustomForm();
        return false;
    });

   /* $('#manuscript-form').submit(function() {
        postManuscriptForm();
        return false;
    });*/
});