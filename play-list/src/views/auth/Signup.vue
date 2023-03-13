<template>
    <form @submit.prevent="handleSubmit">
        <h3>Signup</h3>
        <input type="text" placeholder="Username" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="!isPending">Signup</button>
        <button v-if="isPending">Loading</button>
    </form>
</template>
<script>
import useSignup from '@/composables/useSignup'
import {ref} from 'vue'

export default {
    setup() {
        const {error,signup,isPending} = useSignup()

        const email = ref("");
        const password = ref("");
        const displayName = ref("");

        const handleSubmit = async ()=> {
            const res = await signup(email.value,password.value,displayName.value);
            if (!error.value) {
                console.log("User Signup successfully")
            }
        }
        return {email,password,displayName,isPending,error,handleSubmit};
    }
}
</script>
<style>
    
</style>