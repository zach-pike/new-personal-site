import App from './App.svelte'
import './index.css';

import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { mangle } from "marked-mangle";


const options = {
	prefix: "home-blog-",
};

marked.use(gfmHeadingId(options));
marked.use(mangle());

const app = new App({
  target: document.getElementById('app'),
})

export default app
