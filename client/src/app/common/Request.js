export default 
{
    static Samsung()
    {

        let query = await fetch(path,{
            method: `${method}`,
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:data
        });

    }

}