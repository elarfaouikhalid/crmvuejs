import axios from 'axios';
import swal from 'sweetalert';

export default {
    namespaced: true,
    state: {
        companies: [],
        invitations: [],
        companyName: '',
        companyId: null,
        companyAnalytic: '',
        percent: '',
        classchart: '',
        // companyData: {
        //     labels: [],
        //     counts: [],
        // },
        days: 7,
        companyChartData: [],
    },
    mutations: {
        setCompanies(state, companies) {
            state.companies = companies
        },
        setInvitations(state, invitations) {
            state.invitations = invitations
        },
        setCompanyName(state, companyName) {
            state.companyName = companyName
        },
        setCompanyId(state, companyId) {
            state.companyId = companyId
        },
        addCompany(state, company) {
            state.companies.push(company)
        },
        setCompanyData(state, data) {
            state.companyData = data;
        },
    },
    getters: {
        companies(state) {
            return state.companies
        },
        invitations(state) {
            return state.invitations
        },

    },
    actions: {
        async createcompany(_, companyData) {
            try {
                const response = await axios.post("create/company", companyData)
                swal({
                    title: "Success!",
                    text: response.data.success,
                    icon: "success",
                    button: "OK",
                    timer: 2000
                })
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    button: "OK",
                });
            }
        },
        async getcompanies({ commit, state }) {
            try {
                const response = await axios.get("companies/data")
                commit('setCompanies', response.data.companies.data);
            } catch (error) {
                
            }
        },
        async sendInvitation({ commit }, Invitationdata) {
            try {
                const response = await axios.post("invitation/send", Invitationdata)
                swal({
                    title: "Success!",
                    text: response.data.success,
                    icon: "success",
                    button: "OK",
                    timer: 2000
                })
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    button: "OK",
                });
            }
        }, 
        async getInvitations({ commit, state }) {
            try {
                const response = await axios.get("invitations/data")
                console.log(response.data.invitations.data[0]["id"])
                commit('setInvitations', response.data.invitations.data);
                console.log(state.invitations)
            } catch (error) {
                
            }
        },
        async cancelInvitation({ commit }, InvitationId) {
            try {
                const response = await axios.patch(`invitations/update/${InvitationId}`)
                swal({
                    title: "Success!",
                    text: response.data.success,
                    icon: "success",
                    button: "OK",
                    timer: 2000
                })
            } catch (error) {
                console.log(error);
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    button: "OK",
                });
            }
        }, 
    },
}