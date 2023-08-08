import { readable, writable } from "svelte/store";
import jwt_decode from 'jwt-decode';

export const apiBaseURL = 'https://backend.zpike.net';
export let accessToken = writable<string>(null);

export let jwtData = readable(null, (set) => {
    let s = accessToken.subscribe((a) => {
        if (a != null)
            set(jwt_decode(a));
    });

    return () => {
        s();
    }
})

namespace API {
    export async function login(username: string, password: string) {
        let req = await fetch(`${apiBaseURL}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        if (!req.ok) throw Error(await req.text());

        let resp = await req.json();

        accessToken.set(resp.accessToken);
    }

    export async function createPost(token: string, title: string, content: string) {
        let req = await fetch(`${apiBaseURL}/blog/createPost`, {
            method: "POST",
            headers: {
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                title,
                content
            })
        });

        let t = await req.text();

        if (!req.ok) throw Error(t);

        return t;
    }

    export async function fetchBlog(): Promise<any[]> {
        let req = await fetch(`${apiBaseURL}/blog/fetchPosts`);
        if (!req.ok) throw Error(await req.text());
        
        let a: { date_of_creation: number }[] = await req.json();
        return a.sort((a, b) =>  (a.date_of_creation - b.date_of_creation)).reverse();
    }
}

export { API };