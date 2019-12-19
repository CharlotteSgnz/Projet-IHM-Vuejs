<template>
    <nav class="navbar">
            <span class="navbar-brand mb-0 h1">FYME</span>
            <span class="navbar-deco-button">
                <div class="user-actions">
                    <img :src="require(`@/assets/images/` + data.urlAvatar)" alt="user" class="user-avatar">
                    <b-dropdown id="dropdown-1" class="m-md-2">
                        <b-dropdown-item>Mon profil</b-dropdown-item>
                        <b-dropdown-item><router-link to ="/">Déconnexion</router-link></b-dropdown-item>
                    </b-dropdown>
                </div>
            </span>
        </nav>
</template>

<script>
  export default {
        name: 'Header',

        data () {
            return {
                data: []
            }
        },

        created () {
            this.data = JSON.parse(localStorage.getItem('currentUser'))
        },
    }
</script>

<style >

.navbar {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    background: #0b1036;
    color: white;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;    
}

.navbar-deco-button a {
    color: white;
    text-decoration: none;
}

.user-actions {
    display: flex;
    align-items: center;
}

.user-actions .btn {
    padding-bottom: 16px;
}

.user-actions .btn:focus {
   box-shadow: none;
}

.dropdown-menu.show  {
    position: absolute !important;
    left: -80px !important;
}

.dropdown-item  {
   color: darkblue !important;
}

.dropdown-item a  {
   color: darkblue !important;
}

.user-avatar {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

#dropdown-1__BV_toggle_ {
    background: transparent !important;
    border: none;
}

</style>