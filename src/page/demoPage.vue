<template>
	<div class="w-screen h-screen">
		<h1 class="text-center">这是一个演示页面</h1>
		<!-- <Tailwind msg="Vue with tailwind"/> -->
		<!-- <PxToVw></PxToVw> -->
		<!-- <LazyLoad></LazyLoad> -->
		<!-- <MovieClip
        class="people mx-auto mt-4"
        ref="MovieClip"
        :frames="imgArr"
        :duration="2000"
        :width="455"
        :height="344"
        :autoPlay="true"
        :loop="true"
    /> -->
	</div>
</template>

<script>
	// import Tailwind from './components/Tailwind.vue'
	// import PxToVw from './components/PxToVw.vue'
	// import LazyLoad from './components/LazyLoad.vue'
	// import MovieClip from '@/components/MovieClip/MovieClip.vue'
	export default {
    name: 'demoPage',
		components: {
			// Tailwind,
			// PxToVw,
			// LazyLoad,
			// MovieClip
		},
		data () {
			// const imgArr = [];
			// for (let index = 0; index < 16; index += 1) {
			// 	imgArr.push(require(`@/assets/gif/${index}.png`));
			// }
			return {
				// imgArr
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>