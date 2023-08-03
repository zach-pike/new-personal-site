<script lang="ts">
    import NavBar from "./lib/NavBar.svelte";
    import { Router, Route } from 'svelte-routing';
    import NavBarLink from "./lib/NavBarLink.svelte";
    import NavBarSpacer from "./lib/NavBarSpacer.svelte";
    import Home from "./pages/Home.svelte";
</script>

<main>
    <NavBar>
        <NavBarLink name="Home" path="/" />
        <NavBarLink name="Contact" path="/contact" />
        <NavBarSpacer />
        <NavBarLink name="Admin" path="/admin" />
    </NavBar>

    <Router>
        <Route path='/'>
            <Home />
        </Route>
        <Route path='/contact'></Route>
        <Route path='/admin'></Route>
    </Router>
</main>