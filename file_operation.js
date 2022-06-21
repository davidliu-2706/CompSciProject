function SaveToFile(input){
    var jqXHR = $.ajax({
        type: "POST",
        url: "./file_operation.py",
        async: false,
        data: { param: input }
    });

    return jqXHR.responseText;
}
