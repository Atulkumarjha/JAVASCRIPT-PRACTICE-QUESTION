//IMPLEMENT A FUNCTION THAT MAKES MULTIPLE API CALLS AND PROCESS THE DATA USING CALLBACK 
function APICall(url,callback){
    fetch(url)
    .then(response=>response.json())
    .then(data=>callback(data))
}

function handleData(data){
    console.log(data);
}

function main(){
    url1='https://jsonplaceholder.typicode.com/posts/1';
    url2='https://jsonplaceholder.typicode.com/users/2';

    APICall(url1,handleData);
    APICall(url2,handleData);
}

main();