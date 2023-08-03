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
}

export { API };