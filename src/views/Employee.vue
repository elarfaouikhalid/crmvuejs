<template>
+
        <form class="form" @submit.prevent="CreatAccount()">
            <p class="title">Complete your profile now</p>
            <label>
                <input v-model="employeeInvitation.password" placeholder="" type="password" class="input" required>
                <span>Password</span>
            </label>
            <label>
                <input v-model="employeeInvitation.password_confirmation" placeholder="" type="password" class="input" required>
                <span>Password Confirmation</span>
            </label>
            <label>
                <input v-model="employeeInvitation.name" required placeholder="" type="text" class="input">
                <span>Name</span>
            </label>
                
            <label>
                <input v-model="employeeInvitation.address" required placeholder="" type="text" class="input">
                <span>Address</span>
            </label>
            <label>
                <input v-model="employeeInvitation.phone" required placeholder="" type="text" class="input">
                <span>Phone</span>
            </label>
            <label>
                <span>Date birth</span>
                <input v-model="employeeInvitation.date_of_birth" required placeholder="" type="date" class="input">
            </label>
            <button class="submit">Confirm</button>
        </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {
            showFirstForm: true,
            employeeInvitation: {
                'name': '',
                'email': null,
                'address': '',
                'phone': '',
                'date_of_birth': '',
                'password': '',
                'password_confirmation': ''
            }
        }
    },
    created() {
        this.checkInvitation(this.$route.params.id)
        console.log(this.employeeInvitation.email)
    },  
    methods: {
        ...mapActions({
            "Invitationcheck": "employee/Invitationcheck",
            "Creataccount": "employee/createAccount"
        }),
        checkInvitation(data) {
            this.Invitationcheck(data);
            this.employeeInvitation.email = this.GetEmail
        },
        CreatAccount() {
            this.Creataccount(this.employeeInvitation)
        }
    },
    computed: {
        ...mapGetters({
            'GetEmail': 'employee/getEmail'
        })
    },
}
</script>
  <style scoped>
    .form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
  </style>