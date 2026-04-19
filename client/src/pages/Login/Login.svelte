<script>
    import { fetchPost } from "../../utils/fetchUtil.js";

    let loginMode = true;

    let loginEmail = "";
    let loginPassword = "";

    let signupEmail = "";
    let signupPassword = "";

    function flipLoginCard() {
        loginMode = !loginMode;
    }

    async function handleAuth(event) {
        event.preventDefault();
        const email = loginMode ? loginEmail : signupEmail;
        const password = loginMode ? loginPassword : signupPassword;
        const endpoint = loginMode ? "/auth/login" : "/auth/signup";

        try {
            const result = await fetchPost(endpoint, { email, password });

            if (!loginMode) {
                flipLoginCard();
                signupEmail = "";
                signupPassword = "";
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    }
</script>

<div class="card-container">
    <div class="card {loginMode ? 'login' : 'signup'}">
        <div class="login-card">
            <h2>Login</h2>
            <form on:submit={handleAuth}>
                <fieldset>
                    <label>Email</label>
                    <input
                        bind:value={loginEmail}
                        name="email"
                        type="email"
                        required
                        placeholder="Type your email address..."
                    />
                    <label>Adgangskode</label>
                    <input
                        bind:value={loginPassword}
                        name="password"
                        type="password"
                        required
                        placeholder="Type your password..."
                    />
                </fieldset>
                <button type="submit">Login</button>
            </form>
            <p>Don't have a profile?</p>
            <button on:click={flipLoginCard}>Make one here!</button>
        </div>

        <div class="signup-card">
            <h2>Sign Up</h2>
            <form on:submit={handleAuth}>
                <fieldset>
                    <label>Email</label>
                    <input
                        bind:value={signupEmail}
                        name="email"
                        type="email"
                        required
                        placeholder="Type your email address..."
                    />
                    <label>Adgangskode</label>
                    <input
                        bind:value={signupPassword}
                        name="password"
                        type="password"
                        required
                        placeholder="Type your password..."
                    />
                </fieldset>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have a profile?</p>
            <button on:click={flipLoginCard}>Login here!</button>
        </div>
    </div>
</div>

<style>
    .card-container {
        perspective: 1000px;
        width: 62.5rem;
        height: 50vh;
        min-height: 4rem;
        margin: 1rem auto;
    }

    .card {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.5s;
        transform-style: preserve-3d;
    }

    .card.signup {
        transform: rotateY(180deg);
    }

    .login-card,
    .signup-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(89, 89, 88);
        backface-visibility: hidden;
        border: 1px solid;
        padding: 1rem;
        box-sizing: border-box;
    }

    .signup-card {
        transform: rotateY(180deg);
    }

    button {
        background-color: #000000;
        border: 2px solid #1a1a1a;
        border-radius: 15px;
        box-sizing: border-box;
        color: #ffffff;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        min-width: 0;
        max-width: 20rem;
        min-height: 60px;
        max-height: 3rem;
        padding: 16px 24px;
        text-align: center;
        text-decoration: none;
        user-select: none;
        width: 25%;
        
    }
</style>
