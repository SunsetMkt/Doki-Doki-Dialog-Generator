declare module '*.vue' {
	import { defineComponent } from 'vue';
	const component: ReturnType<typeof defineComponent>;
	export default component;
}

declare module '*.svg' {
	const ret: string;
	export default ret;
}
