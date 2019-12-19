<template>
    <Layout>
        <div class="container">
         
         <div class="retour">       
            <button class="btn btn-light" @click="goToMessages()"><icon name="keyboard_arrow_left" class="newConv" scale="2"></icon>Retour à la messagerie</button>
        </div>

            <div class="card chat">
						<div class="card-header msg_head">
							<div class="d-flex bd-highlight">
								<div class="img_cont">
									<img :src="require(`@/assets/images/` + chat[0].urlAvatar)" class="rounded-circle user_img">
									<span class="online_icon"></span>
								</div>
								<div class="user_info">
									<span>{{chat[0].pseudo}}</span>
									<p>1767 Messages</p>
								</div>
							</div>
							<span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
						</div>
						<div class="card-body msg_card_body">
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img :src="require(`@/assets/images/` + chat[0].urlAvatar)" class="rounded-circle user_img_msg">
								</div>
								<div class="msg_cotainer">
									Salut, tu vas bien ?
									<span class="msg_time">8:40, Aujourd'hui</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Oh coucou ! Ouais et toi ? 
									<span class="msg_time_send">8:55, Aujourd'hui</span>
								</div>
								<div class="img_cont_msg">
							<img src="@/assets/images/fakeProfile.jpeg" class="rounded-circle user_img_msg">
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img :src="require(`@/assets/images/` + chat[0].urlAvatar)" class="rounded-circle user_img_msg">
								</div>
								<div class="msg_cotainer">
									Bof, j'ai le projet d'IHM à finir...
									<span class="msg_time">9:00, Aujourd'hui</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Oh courage, si tu as besoin d'aide n'hésite pas :D
									<span class="msg_time_send">9:05, Aujourd'hui</span>
								</div>
								<div class="img_cont_msg">
							<img src="@/assets/images/fakeProfile.jpeg" class="rounded-circle user_img_msg">
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img :src="require(`@/assets/images/` + chat[0].urlAvatar)" class="rounded-circle user_img_msg">
								</div>
								<div class="msg_cotainer">
									Tu gères merci :D
									<span class="msg_time">9:07, Aujourd'hui</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									On est solidaires en MIASHS tu sais, c'est normal !
									<span class="msg_time_send">9:10, Aujourd'hui</span>
								</div>
								<div class="img_cont_msg">
						<img src="@/assets/images/fakeProfile.jpeg" class="rounded-circle user_img_msg">
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img :src="require(`@/assets/images/` + chat[0].urlAvatar)" class="rounded-circle user_img_msg">
								</div>
								<div class="msg_cotainer">
									J'ai remarqué, ça fait chaud au coeur en tout cas...
									<span class="msg_time">9:12, Aujourd'hui</span>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<div class="input-group">
								<div class="input-group-append">
									<span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
								<div class="input-group-append">
									<span class="input-group-text send_btn"><icon name="send" class="newConv" scale="2"></icon></span>
								</div>
							</div>
						</div>
					</div>

    </div>

    </Layout>
   
</template>

<script>

    import Icon from "vue-md-icons/src/components/Icon";

    export default {
        data () {
            return {
                chat: []
            }
        },
        components: {
            Icon
        },
        created () {
            this.chat = JSON.parse(localStorage.getItem('usersStorage'))
            this.chat = this.chat.filter(x => x.id === this.$route.params.id)
        },
        methods: {
            goToMessages(){
               this.$router.push("/messages")
           }
        }
    }
</script>

<style scoped>


    .chat{
			height: 500px;
			border-radius: 15px !important;
			background-color: rgba(156, 156, 156, 0.589) !important;
		}
		.contacts_body{
			padding:  0.75rem 0 !important;
			overflow-y: auto;
			white-space: nowrap;
		}
		.msg_card_body{
			overflow-y: auto;
		}
		.card-header{
			border-radius: 15px 15px 0 0 !important;
			border-bottom: 0 !important;
		}
        .card-footer{
		border-radius: 0 0 15px 15px !important;
			border-top: 0 !important;
	}
    .container{
			align-content: center;
		}
		.search{
			border-radius: 15px 0 0 15px !important;
			background-color: rgba(0,0,0,0.3) !important;
			border:0 !important;
			color:white !important;
		}
		.search:focus{
            box-shadow:none !important;
            outline:0px !important;
		}
		.type_msg{
			background-color: rgba(0,0,0,0.3) !important;
			border:0 !important;
			color:white !important;
			height: 60px !important;
			overflow-y: auto;
		}
			.type_msg:focus{
            box-shadow:none !important;
            outline:0px !important;
		}

        .type_msg::placeholder {
            color: white;
        }        
		.attach_btn{
	border-radius: 15px 0 0 15px !important;
	background-color: rgba(0,0,0,0.3) !important;
			border:0 !important;
			color: white !important;
			cursor: pointer;
		}
		.send_btn{
	border-radius: 0 15px 15px 0 !important;
	background-color: rgba(0,0,0,0.3) !important;
			border:0 !important;
			color: white !important;
			cursor: pointer;

		}
		.search_btn{
			border-radius: 0 15px 15px 0 !important;
			background-color: rgba(0,0,0,0.3) !important;
			border:0 !important;
			color: white !important;
			cursor: pointer;
		}
		.contacts{
			list-style: none;
			padding: 0;
		}
		.contacts li{
			width: 100% !important;
			padding: 5px 10px;
			margin-bottom: 15px !important;
		}
	.active{
			background-color: rgba(0,0,0,0.3);
	}
		.user_img{
			height: 70px;
			width: 70px;
			border:1.5px solid #f5f6fa;
		
		}
		.user_img_msg{
			height: 40px;
			width: 40px;
			border:1.5px solid #f5f6fa;
		
		}
	.img_cont{
			position: relative;
			height: 70px;
			width: 70px;
	}
	.img_cont_msg{
			height: 40px;
			width: 40px;
	}
	.online_icon{
		position: absolute;
		height: 15px;
		width:15px;
		background-color: #4cd137;
		border-radius: 50%;
		bottom: 0.2em;
		right: 0.4em;
		border:1.5px solid white;
	}
	.offline{
		background-color: #c23616 !important;
	}
	.user_info{
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 15px;
	}
	.user_info span{
		font-size: 20px;
		color: black;
	}
	.user_info p{
	font-size: 10px;
	color: rgba(53, 53, 53, 0.849);
	}
	.video_cam{
		margin-left: 50px;
		margin-top: 5px;
	}
	.video_cam span{
		color: white;
		font-size: 20px;
		cursor: pointer;
		margin-right: 20px;
	}
	.msg_cotainer{
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 10px;
		border-radius: 25px;
		background-color: #1c4d8a;
		padding: 10px;
		position: relative;
        opacity: 80%;
        color: white;


	}
	.msg_cotainer_send{
		margin-top: auto;
		margin-bottom: auto;
		margin-right: 10px;
		border-radius: 25px;
		background-color: #44b35ec0;
		padding: 10px;
		position: relative;
        color: white;
	}
	.msg_time{
		position: absolute;
		left: 0;
		bottom: -15px;
		color: rgba(39, 39, 39, 0.808);
		font-size: 10px;
	}
	.msg_time_send{
		position: absolute;
		right:0;
		bottom: -15px;
		color: rgba(39, 39, 39, 0.808);
		font-size: 10px;
	}
	.msg_head{
		position: relative;
        background-color: rgba(156, 156, 156, 0.863);
	}
	#action_menu_btn{
		position: absolute;
		right: 10px;
		top: 10px;
		color: white;
		cursor: pointer;
		font-size: 20px;
	}
	.action_menu{
		z-index: 1;
		position: absolute;
		padding: 15px 0;
		background-color: rgba(0,0,0,0.5);
		color: white;
		border-radius: 15px;
		top: 30px;
		right: 15px;
		display: none;
	}
	.action_menu ul{
		list-style: none;
		padding: 0;
	margin: 0;
	}
	.action_menu ul li{
		width: 100%;
		padding: 10px 15px;
		margin-bottom: 5px;
	}
	.action_menu ul li i{
		padding-right: 10px;
	
	}
	.action_menu ul li:hover{
		cursor: pointer;
		background-color: rgba(0,0,0,0.2);
	}
	@media(max-width: 576px){
	.contacts_card{
		margin-bottom: 15px !important;
	}
	}

</style>