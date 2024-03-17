<template>
    <div
        class="base-panel__container flex flex-row bg-white rounded-md justify-center gap-5 drop-shadow-xl max-w-[100%] overflow-auto">
        <slot></slot>
    </div>
</template>


<style>
.base-panel__container::-webkit-scrollbar {
    height: 8px;
    border-radius: 20px;
    @apply bg-blue-400;
}

.base-panel__container::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    ;
}
</style>
