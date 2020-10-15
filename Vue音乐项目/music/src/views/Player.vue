<template>
    <div class="player">
        <NormalPlayer></NormalPlayer>
        <MiniPlayer @showList="showList"></MiniPlayer>
        <ListPlayer ref="listPlayer"></ListPlayer>
    </div>
</template>

<script>
import NormalPlayer from "../components/Player/NormalPlayer"
import MiniPlayer from "../components/Player/MiniPlayer"
import ListPlayer from "../components/Player/ListPlayer"
export default {
    name:"Player",
    methods:{
        showList(){
            this.$refs.listPlayer.show();
        }
    },
    components:{
        NormalPlayer,
        MiniPlayer,
        ListPlayer
    },
}
</script>

<style scoped lang="scss">
    // .player {
        
    // }
</style>