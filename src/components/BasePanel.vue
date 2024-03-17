<template>
    <base-container>
        <a v-for="cover in covers" :href="cover.URLToPage"
            class="flex flex-col w-[80px] justify-start items-center p-[10px] gap-1 flex-shrink-0">
            <img :src="cover.coverURL" class="aspect-square w-[100%] rounded-md drop-shadow-md" alt="">
            <h5 class="text-center font-bold leading-[15px]">{{ cover.name }}</h5>
        </a>
    </base-container>
</template>



<script lang="ts">
import { PropType, defineComponent } from 'vue';
import BaseContainer from './BaseContainer.vue';
export default defineComponent({
    components: {
        BaseContainer
    },
    props: {
        covers: Object as PropType<{ coverURL: string, name: string, URLToPage: string }[]>
    }
})
</script>
