<script>
	let characters = ['❤','💛','💚','💙','💜']; // 特点
	let density = 80 // 密度
	let confetti = new Array(density).fill()  // 五彩纸屑
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -5 - Math.random() * 100,
				r: 0.2 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	function loop() {
		confetti = confetti.map(emoji => {
			emoji.y += 0.7 * emoji.r;
			if (emoji.y > 100) emoji.y = -5;
			return emoji;
		});
		requestAnimationFrame(loop);
	}

	loop();
</script>

<style>
	:global(body) {	overflow: hidden;}
	span {
		position: absolute;
		font-size: 5vw;
	}
</style>

{#each confetti as c}
	<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
{/each}