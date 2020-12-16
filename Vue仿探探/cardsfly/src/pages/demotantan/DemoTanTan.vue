<template>
	<div class="cards-content">
		
		<div v-if="actionName!=''" style="color:#fff;background: rgba(0,0,0,.3);padding:10px 20px;font-size:24px;position: absolute;z-index:999;left: 50%;top:50%;transform: translate(-50%,-50%);">{{actionName}}</div>
		<Ezflycard
			@onDragMove="onCardDragMove"
			@onDragStop='onCardDragStop'
			@onThrowDone='onCardThrowDone'
			:cardWidth="200" 
			:cardHeight="240"
			:throwTriggerDistance="100"
			dragDirection="horizontal"
			:hasShadow="true"
		>
			<div slot="firstCard" style="width:100%;height:100%;">
				<div v-if="cards[0]" class="tantanCard">
					<img :src="cards[0].image" style="width: 100%;height: 100%;" mode="aspectFill"></img>
				</div>
			</div>
			<div slot="secondCard" style="width:100%;height:100%;">
				<div v-if="cards[1]" class="tantanCard">
					<img :src="cards[1].image" style="width: 100%;height: 100%;" mode="aspectFill"></img>
				</div>
			</div>
			<div slot="thirdCard" style="width:100%;height:100%;">
				<div v-if="cards[2]" class="tantanCard">
					<img :src="cards[2].image" style="width: 100%;height: 100%;" mode="aspectFill"></img>
				</div>
			</div>
		</Ezflycard>
	</div>
</template>

<script lang="js">
	import Ezflycard from "../../components/Ezflycard.vue";
	export default {
		name:'DemoTanTan',
		components:{
			Ezflycard
		},
		data() {
			return {
				title: 'Hello',
				actionName:"",
				cards:[
					{
						"image":"../../img/1.jpg"
					},
					{
						"image":"../../img/2.jpg"
					},
					{
						"image":"../../img/3.jpg"
					},
					{
						"image":"../../img/4.jpg"
					},
					{
						"image":"../../img/5.jpg"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			onCardDragMove(obj){
				// console.log(obj);
				if(obj.left<-10){
					this.actionName="不喜欢";
				}else if(obj.left>10){
					this.actionName="喜欢";
				}else{
					this.actionName="";
				}
			},
			onCardDragStop(obj){
				this.actionName="";
			},
			onCardThrowDone(obj){
				this.cards.splice(0,1);
			}
		}
	}
</script>

<style>
.cards-content {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 500px;
}
	div{
		box-sizing: border-box;
	}
	
	.tantanCard
	{
		width: 100%;
		height: 100%;
	}
</style>
