<script setup lang="ts">
const emit = defineEmits(['get-icon'])
const props = defineProps({
	// 图标列表数据
	list: {
		type: Array,
		default: () => [],
	},
	// 自定义空状态描述文字
	empty: {
		type: String,
		default: () => '无相关图标',
	},
    selectedIcon:{
        type: String,
		default: () => '',
    }
})
// 点击icon 图标
const onColClick = (v: unknown | string) => {
	emit('get-icon', v)
}
</script>


<template>
<div class="icon-selector-warp-row">
    <el-scrollbar ref="selectorScrollbarRef">
        <el-row :gutter="10" v-if="props.list.length > 0">
            <el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4" v-for="(v, k) in list" :key="k" @click="onColClick(v)">
                <div class="icon-selector-warp-item" :class="{ 'icon-selector-active': selectedIcon === v }">
                    <SvgIcon :name="v"/>
                </div>
            </el-col>
        </el-row>
        <el-empty :image-size="100" v-if="list.length <= 0" :description="empty"></el-empty>
    </el-scrollbar>
</div>

</template>

<style scoped lang="scss">
.icon-selector-warp-row {
	height: 230px;
	overflow: hidden;
	.el-row {
		padding: 15px;
	}
	.el-scrollbar__bar.is-horizontal {
		display: none;
	}
	.icon-selector-warp-item {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--el-border-color);
		border-radius: 5px;
		margin-bottom: 10px;
		height: 30px;
		i {
			font-size: 20px;
			color: var(--el-text-color-regular);
		}
		&:hover {
			cursor: pointer;
			background-color: var(--el-color-primary-light-9);
			border: 1px solid var(--el-color-primary-light-5);
			i {
				color: var(--el-color-primary);
			}
		}
	}
	.icon-selector-active {
		background-color: var(--el-color-primary-light-9);
		border: 1px solid var(--el-color-primary-light-5);
		i {
			color: var(--el-color-primary);
		}
	}
}
</style>