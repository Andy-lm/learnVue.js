<template>
    <div class="song">
        <div class="song-top"><h3>最新音乐</h3></div>
        <SongListItem :newsongs="newsongs"></SongListItem>
    </div>
</template>

<script>
import SongListItem from "../SongListItem"
export default {
    name:"NewSong",
    components:{
        SongListItem
    },
    props:{
        newsongs:{
            type: Array,
            default: () => [],
            required: true,
        }
    },
}
</script>

<style scoped lang="scss">
@import '../../assets/css/mixin.scss';
@import '../../assets/css/variable.scss';
    .song {
        .song-top {
            width: 100%;
            height: 84px;
            line-height: 84px;
            @include bg_sub_color();
            padding: 0 20px;
            border-bottom: 1px solid #cccccc;
            border-top: 1px solid #cccccc;
            h3 {
                @include font_size($font_large);
                font-weight: bold;
                @include font_color();
            }
        }
        
    }
</style>