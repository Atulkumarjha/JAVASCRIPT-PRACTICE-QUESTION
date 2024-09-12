//IMPLEMENT AN ASYN FUNCTION TO FETCH DATA FROM AN API AND HANDLE ERRORS USING TRY/CATCH
async function fetchData(url){
    try{
    let response = await fetch(url);
    if(!response.ok){
        throw new Error('Network response was not ok' + response.status);
    }
    return await(response.json());
}
catch(error){
    console.log(error);
    
}
}

fetchData('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data)).catch(error => console.log(error));