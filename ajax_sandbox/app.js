// add event listener
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create XHR object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);
    console.log('READY STATE - ', xhr.readyState);

    // Optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READY STATE - ', xhr.readyState);
    }

    // recommended 
    xhr.onload = function(){
        console.log('READY STATE - ', xhr.readyState);
        if (this.status === 200) {
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // older syntax
    // xhr.onreadystatechange = function() {
    //     console.log('READY STATE - ', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    // For errors, recommended to always include
    xhr.onerror = function() {
        console.log('Request Error');
    }

    // SEND
    xhr.send();

    // READY STATE VALUES
    // 0: request not inititalized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


    // HTTP STATUSES
    // 200 : 'OK'
    // 403 : "Forbidden"
    // 404 : "Not Found"
}