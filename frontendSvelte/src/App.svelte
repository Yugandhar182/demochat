<script >
	import Pusher from 'pusher-js'
	import axios from 'axios'
	import {onMount} from 'svelte'
	let allmsg = [];
	let newmsg = "";
    var pusher = new Pusher('b2c1c07e2a40ad08398c', {
      cluster: 'mt1'
    });

onMount(()=>{
	var channel = pusher.subscribe('my-chat');
    channel.bind('my-message', function(data) {
      allmsg = [...allmsg,data]
      console.log(JSON.stringify(data))
    });
})

function handlenew(){
	axios.post("http://localhost:1000/addpesan",{
		pesanbaru:newmsg
	}).then((res)=>{
		console.log(res)
	})
}
</script>
<h1>hellow</h1>
<input type="text" bind:value={newmsg} name="">
<button on:click={handlenew}>post</button>
<!-- fetch data to list -->
{#each allmsg as p}
	<p>{p.pesanbaru}</p>
{/each}