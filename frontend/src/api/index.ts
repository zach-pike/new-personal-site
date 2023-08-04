import { writable } from "svelte/store";

export const apiBaseURL = 'https://backend.zpike.net';
export let accessToken = writable<string>(null);

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

        return await req.json();
    }
}

export { API };