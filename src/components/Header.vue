<template>
	<header>
		<slot></slot>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style scoped>
header
{
	position: fixed;
	top: 0;

	height: 50px;
	width: 100%;
	line-height: 50px;

	color: #f1f1f1;
	font-size: 25px;
	text-align: center;
	vertical-align: middle;

	background-color: #444;
}
</style>