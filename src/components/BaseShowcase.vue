<template>
    <div class="flex flex-col w-full aspect-[4/3] relative rounded-[50px] overflow-hidden">
        <img class="w-full h-full object-cover" :src="coverURL" alt="" srcset="">
        <div class="absolute bottom-0 h-[50%] w-full bg-gradient-to-b from-transparent to-black flex flex-row">
            <div class="flex-[3] flex flex-col justify-center pl-[20px]">
                <h5 class="text-white text-[20px] font-bold sm:text-[30px]">{{ header }}</h5>
                <p class="text-white text-[15px] sm:text-[20px]">{{ description }}</p>
            </div>
            <div class="flex-[1] flex flex-col justify-center pr-[20px]">
                <a :href="URLToPage"><button
                        class="outline-none border-none rounded-full text-blue-400 font-bold w-full bg-white px-2 py-1">Играть</button></a>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    props: {
        coverURL: {
            type: Object as PropType<string>,
            required: true
        },
        header: {
            type: Object as PropType<string>,
            required: true
        },
        description: {
            type: Object as PropType<string>,
            required: true
        },
        URLToPage: {
            type: Object as PropType<string>,
            required: true
        }
    }
})
</script>


<style></style>