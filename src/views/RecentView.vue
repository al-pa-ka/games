<template>
    <div class="flex flex-row">
        <base-navbar :active="active"></base-navbar>
    </div>
    <div class="flex justify-center w-full">
        <div class="flex flex-col max-w-[680px]">
            <div class="flex flex-col w-full h-fit mt-5">
                <h5 class="font-bold text-[25px] ml-5">Вы недавно играли</h5>
                <base-panel class="border-blue-400 flex-wrap" :covers="[
            { coverURL: 'https://vectorified.com/images/subway-surfers-icon-25.jpg', URLToPage: '/game/4124', name: 'subway surfers' },
            { coverURL: 'https://static12.tgcnt.ru/posts/_0/c7/c79f448eea8e8242018ad6089c5a0fd6.jpg', URLToPage: '/game/4124', name: 'jetpack joyride' },
            { coverURL: 'https://w.forfun.com/fetch/fe/fe573188474bee74c2ae0506be294b7a.jpeg', URLToPage: '/game/4124', name: 'poker club' },
            { coverURL: 'https://betandroid.ru/wp-content/uploads/2023/03/news.xuxxxsja_logo-scaled.jpg', URLToPage: '/game/4124', name: 'mobile legends' },
            { coverURL: 'https://yt3.googleusercontent.com/ytc/AGIKgqMK9pfNvw88T-Nm2FbRVj5Zm9BrDt0SgGBs2eMB=s900-c-k-c0x00ffffff-no-rj', URLToPage: '/game/4124', name: 'gta mobile' },
            { coverURL: 'https://vectorified.com/images/subway-surfers-icon-25.jpg', URLToPage: '/game/4124', name: 'subway surfers' },
            { coverURL: 'https://static12.tgcnt.ru/posts/_0/c7/c79f448eea8e8242018ad6089c5a0fd6.jpg', URLToPage: '/game/4124', name: 'jetpack joyride' },
            { coverURL: 'https://w.forfun.com/fetch/fe/fe573188474bee74c2ae0506be294b7a.jpeg', URLToPage: '/game/4124', name: 'poker club' },
            { coverURL: 'https://betandroid.ru/wp-content/uploads/2023/03/news.xuxxxsja_logo-scaled.jpg', URLToPage: '/game/4124', name: 'mobile legends' },
            { coverURL: 'https://yt3.googleusercontent.com/ytc/AGIKgqMK9pfNvw88T-Nm2FbRVj5Zm9BrDt0SgGBs2eMB=s900-c-k-c0x00ffffff-no-rj', URLToPage: '/game/4124', name: 'gta mobile' }
        ]">
                </base-panel>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import BaseNavbar from '../components/BaseNavbar.vue';
import { Tabs } from '../components/BaseNavbar.vue';
import BaseShowcase from '../components/BaseShowcase.vue';
import BasePanel from '../components/BasePanel.vue';
export default defineComponent({
    components: {
        BaseNavbar, BaseShowcase, BasePanel
    },
    data() {
        return {
            active: Tabs.RECENT
        }
    },
    computed: {

    }
})
</script>

<style></style>