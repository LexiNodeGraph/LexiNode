<template>
   <nav class="bg-black shadow-xl">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <!-- LOGO -->
                    <div>
                        <!-- White: #f8fafc -->
                        <router-link to="/" class="flex items-center py-6 px-2">
                            <span class="text-white font-semibold text-2xl tracking-tight px-2">LEXINODE</span>
                        </router-link>
                    </div>
                    <!-- FIM LOGO -->
                    <!-- ENTRAR -->
                    <div class="flex items-center py-4 px-2" v-if="!showMenu">
                        
                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/artigos">
                            <span>Artigos</span>
                        </router-link>

                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/">
                            <span>Cadastrar Artigo</span>
                        </router-link>

                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/">
                            <span>Meus Artigos</span>
                        </router-link>
                        <router-link class="py-2 px-6 font-semibold text-white rounded hover:bg-[#ffffff11] transition duration-300 mx-1" to="/login">
                            <span>Entrar</span>
                        </router-link>
                    </div>

                    <!-- FIM ENTRAR -->
                </div>
            </div>
        </nav>




        
</template>

<script>
import {useAuth0} from "@auth0/auth0-vue";

export default {
      setup() {
        const {isAuthenticated} = useAuth0();
        return {
            isAuthenticated,
        };
    },
}

</script>

<style>

</style>
