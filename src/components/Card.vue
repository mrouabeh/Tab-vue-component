<template>
	<div class="mt-5">
		<b-card no-body>
			<b-card-header header-tag="nav">
				<b-nav card-header tabs>
					<b-nav-item
						v-on:click="activeTab('tab1')"
						v-bind:active="tabs.tab1">
						Tab 1
					</b-nav-item>
					<b-nav-item
						v-on:click="activeTab('tab2')"
						v-bind:active="tabs.tab2">
						Tab 2
					</b-nav-item>
					<b-nav-item
						v-on:click="activeTab('tab3')"
						v-bind:active="tabs.tab3">
						Tab 3
					</b-nav-item>
				</b-nav>
			</b-card-header>

			<Tab1 v-if="tabs.tab1"></Tab1>
			<Tab2 v-if="tabs.tab2"></Tab2>
			<Tab3 v-if="tabs.tab3"></Tab3>
		</b-card>
	</div>
</template>

<script>
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

export default {
	name: "Card",
	components: {
		Tab1,
		Tab2,
		Tab3
	},
	data() {
		return {
			tabs: {
				tab1: true,
				tab2: false,
				tab3: false
			}
		}
	},
	methods: {
		activeTab: function(tabButton) {
			for (let tab in this.tabs) {
				this.tabs[tab] = false;

				if (tab === tabButton)
					this.tabs[tab] = true;
			}
		}
	}
}
</script>