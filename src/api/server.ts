let token = '8a630cd90ceeabb68e4e083e5b869d2c81c37937d626bdca';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://polite-reliable-acapella.glitch.me/api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://polite-reliable-acapella.glitch.me/api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create data on server')
        }
        return await response.json()
    },
    update: async (isbn:string, data:any ={}) => {
        const response = await fetch(`https://polite-reliable-acapella.glitch.me/api/books/${isbn}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async (isbn:string) => {
        const response = await fetch(`https://polite-reliable-acapella.glitch.me/api/books/${isbn}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }
        return;
    },
}