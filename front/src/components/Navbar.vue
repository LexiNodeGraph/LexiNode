<script>
import {useAuth0} from "@auth0/auth0-vue";
                            
export default {
    setup() {
        const {isAuthenticated, user } = useAuth0();
        return {
            isAuthenticated,
            user
        };
    },
}
                            
</script>

<template>
   <nav class="bg-black shadow-xl">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <!-- LOGO -->
                    <div>
                        <router-link to="/" class="flex items-center py-6 px-2">
                            <span class="text-[#0952DB] font-semibold text-2xl tracking-tight pl-2">LEXI</span>
                            <span class="text-[#EEEEEE] font-semibold text-2xl tracking-tight pr-2">NODE</span>
                        </router-link>
                        
                    </div>
                    <!-- FIM LOGO -->

                    <!-- MENU -->
                    <div class="flex items-center py-2 px-2">
                        
                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/artigos">
                            <span>Artigos</span>
                        </router-link>

                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/autores">
                            <span>Autores</span>
                        </router-link>

                        <router-link 
                        class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" 
                        to="/login"
                        v-if="!isAuthenticated"
                        >
                            <span>Entrar</span>
                        </router-link>

                        <router-link 
                        class="py-2 px-6 rounded-2xl bg-black hover:bg-[#ffffff11] transition duration-300" 
                        to="/login"
                        v-if="isAuthenticated"
                        >
                            <img 
                            class="rounded-2xl w-12 h-12" 
                            :src="user.picture"
                            referrerpolicy="no-referrer"
                            >

                        </router-link>

                    </div>
                    <!-- FIM MENU -->
                </div>
            </div>
        </nav>

</template>


