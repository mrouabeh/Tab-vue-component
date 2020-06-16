<template>
	<div class="my-5">
		<b-card no-body>
			<b-card-header header-tag="nav">
				<b-nav card-header tabs>
					<b-nav-item
						v-for="(tab, index) in tabs"
						v-bind:key="index"
						v-on:click="activateTab(tab)"
						v-bind:active="isActiveTab(tab)">
						{{ tab }}
					</b-nav-item>
				</b-nav>
			</b-card-header>

			<component v-bind:is="currentTabComponent"></component>
		</b-card>
	</div>
</template>

<script>
import Home from './tabs/Home'
import Posts from './tabs/Posts'
import Archives from './tabs/Archives'

export default {
	name: "TabComponent",
	components: {
		Home,
		Posts,
		Archives
	},
	data() {
		return {
			currentTabComponent: "Home",
			tabs: ['Home', 'Posts', 'Archives']
		}
	},
	methods: {
		activateTab: function(tab) {
			this.currentTabComponent = tab;
		},
		isActiveTab: function(tab) {
			return tab === this.currentTabComponent;
		}
	}
}
</script>

<style scoped>
	
</style>