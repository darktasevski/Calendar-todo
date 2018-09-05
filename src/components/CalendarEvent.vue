<template>
	<div class="day-event" :style="getEventBackgroundColor">
		<div v-if="!event.edit">
			<span class="has-text-centered details">{{ event.details }}</span>
			<div class="has-text-centered icons">
				<font-awesome-icon icon="edit" @click="editEvent(day.id, event.details)"></font-awesome-icon>
				<font-awesome-icon icon="trash"></font-awesome-icon>
			</div>
		</div>

		<div v-if="event.edit">
			<input type="text" :placeholder="event.details" />
			<div class="has-text-centered icons">
				<font-awesome-icon icon="check"></font-awesome-icon>
			</div>
		</div>
	</div>
</template>

<script>
import store from '../store.js';

export default {
	name: 'CalendarEvent',
	props: ['day', 'event'],
	computed: {
		getEventBackgroundColor() {
			const colors = ['#FF9999', '#85D6FF', '#99FF99'];
			let randomColor = colors[Math.floor(Math.random() * colors.length)];
			return `background-color: ${randomColor}`;
		}
	},
	methods: {
		editEvent(dayId, eventDetails) {
			store.editEvent(dayId, eventDetails);
		}
	}
}
</script>

<style lang="scss" scoped>
.day-event {
	margin-top: 6px;
	margin-bottom: 6px;
	display: block;
	color: #4c4c4c;
	padding: 5px;

	.details {
		display: block;
	}

	input {
		background: none;
		border: 0;
		border-bottom: 1px solid #fff;
		width: 100%;

		&:focus {
			outline: none;
		}
	}
}
</style>

// <font-awesome-icon icon="edit"></font-awesome-icon>
// <font-awesome-icon icon="trash"></font-awesome-icon>