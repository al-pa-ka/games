<template>
    <nav class="flex flex-row gap-2 w-full justify-between h-11 items-center pl-3 pr-3 bg-white drop-shadow-md">
        <li class="font-['Roboto'] cursor-pointer h-full flex flex-col justify-center" v-for="tab, index in tabs"
            :class="{
            'font-bold border-b-[3px] border-blue-500': index == active
        }">
            <a :href="tab.href">{{ tab.name }}</a>
        </li>
    </nav>
</template>


<script lang="ts">
import { PropType, defineComponent } from 'vue';
enum Tabs {
    MAIN = 0,
    FAVORITE,
    ALL,
    RECENT
}
export default defineComponent({
    data() {
        return {
            tabsEnum: Tabs,
            tabs: [{name: 'Главная', href: '/'}, {name: 'Избранное', href: '/favorite'}, {name: 'Все игры', href: '/all'}, {name: 'Недавние', href: '/recent'}]
        }
    },
    props: {
        active: {
            type: Object as PropType<Tabs>,
            required: true
        }
    },

})
export { Tabs }
</script>