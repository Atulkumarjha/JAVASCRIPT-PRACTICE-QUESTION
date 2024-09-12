//IMPLEMENT A FUNCTION THAT MAKES MULTIPLE API CALLS AND PROCESS THE DATA USING PROMISES 
function APICall(url){
    return fetch(url)
    .then(response=>response.json())
}

function handleData(data){
    console.log(data);
}

function main(){
    url1='https://jsonplaceholder.typicode.com/posts/1';
    url2='https://jsonplaceholder.typicode.com/users/2';

    APICall(url1).then(handleData).catch(error=>console.log(error));
    APICall(url2).then(handleData).catch(error=>console.log(error));
}

main();