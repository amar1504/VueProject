<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="(product,index) in products" :key="index" v-text="product"></li>
        </ul>
    </div>
</template>
<script>
import productmixin from "../mixin/mixinproduct";

export default {
    mixins:[ productmixin ],
    data(){
        return {
            title:'Sitemap',
        }
    }

}

</script>