<script>
    import { fetchPost } from "../../utils/fetchUtil.js";
    import toast, { Toaster } from "svelte-french-toast";
    import { currentUser } from "../../stores/userStore";
        // @ts-ignore
    import { useNavigate } from "svelte-navigator";

    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await fetchPost("/auth/logout", {});
            
            $currentUser = null;

            toast.success('Logout successful! Come back soon!');
            navigate('/');
        } catch (error) {
            toast.error('Something went wrong...');
        }
    }

</script>

<h2>Welcome administrator {$currentUser.email}</h2>

<button on:click={ handleLogout }>Log out</button>

<style>
        button {
        background-color: #fff;
        border: 1px solid #d5d9d9;
        border-radius: 8px;
        box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
        box-sizing: border-box;
        color: #0f1111;
        cursor: pointer;
        display: inline-block;
        font-family: "Amazon Ember", sans-serif;
        font-size: 13px;
        line-height: 29px;
        padding: 0 10px 0 11px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        width: 120px;
        margin: 0.25rem;
    }

    button:hover {
        background-color: #f7fafa;
    }

    button:focus {
        border-color: #008296;
        box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
        outline: 0;
    }
</style>