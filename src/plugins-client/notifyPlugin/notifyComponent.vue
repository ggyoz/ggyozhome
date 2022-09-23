<template>
    <v-dialog v-model="dialog" :max-width="options.width">
        <v-card>
            <v-toolbar color="primary" dark>
                <v-toolbar-title>{{title}}</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pt-4">
                <v-icon large :color="options.iconColor" class="mr-4">{{options.icon}}</v-icon>                
                {{ content }}
                <v-form v-if="options.type === 'prompt'" v-model="valid" lazy-validation>                     
                    <v-text-field v-model="text" :rules="[ v => !!v || '필수입력입니다.']"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn v-if="options.type !== 'alert'">취소</v-btn>
                <v-btn @click="confrimBtn" color="primary">확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        name:"notifyComponent",        
        data(){
            return{
                dialog:true, 
                title : "타이틀",
                content : "내용입니다.",
                text : "사용자 답변",
                options: {
                    width:500,
                    icon:'mdi-alert',
                    iconColor:'orange',
                    type:'confirm'                    
                }
            }
        },
        methods:{
            confrimBtn(){
                this.dialog = false
            }
        }

    }
</script>

<style>

</style>