import Vue from 'vue';
import { seedData } from './seed';

const store = {
	state: {
		seedData,
	},
	getActiveDay() {
		return this.state.seedData.find(day => day.active);
	},
	setActiveDay(dayId) {
		this.state.seedData.map(dayObj => {
			dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
		});
	},
	submitEvent(eventDetails) {
		const activeDay = this.getActiveDay();
		activeDay.events.push({ details: eventDetails, edit: false });
	},
};

export default store;
