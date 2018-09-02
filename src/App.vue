<template>
	<div id="app">
		<CalendarWeek />
		<CalendarEntry />
	</div>
</template>


<script>
import CalendarWeek from '@/components/CalendarWeek';
import CalendarEntry from '@/components/CalendarEntry';

export default {
	name: 'app',
	components: {
		CalendarWeek,
		CalendarEntry
	}
}
</script>

<style lang="scss">
html,
body {
	height: 100%;
	box-sizing: border-box;

	& > * {
		box-sizing: inherit;
	}
}

#app {
	height: inherit;
	background: #6e6e6e;
	display: flex;
	flex-direction: column;
	align-items: center;
	-webkit-align-items: center;
	justify-content: center;
	-webkit-justify-content: center;
}
</style>
