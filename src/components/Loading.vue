<template lang="">
    <div class="page page-center" v-if="loading">
        <div class="container-slim py-4">
            <div class="text-center">
                <div class="mb-3">
                <a href="." class="navbar-brand navbar-brand-autodark"><img :src="require('@/static/logo.jpg')" height="36" alt=""></a>
                </div>
                <div class="text-muted mb-3">Preparing application</div>
                <div class="progress progress-sm">
                <div class="progress-bar progress-bar-indeterminate"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>